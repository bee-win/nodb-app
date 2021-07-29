import react, {Component} from 'react'

class GetRecipe extends Component{
    constructor(){
        super()

        this.state = {
            threeRecipes: [],
            chosenRecipe: {}
        }

        this.GetRecipes = this.GetRecipes.bind(this)
        this.getChosenRecipe = this.getChosenRecipe.bind(this)
    }
    componentDidMount(){
        // this.GetRecipes()
    }

    GetRecipes(){
        const recipes = [],
              goodRecipeIndex1 = Math.floor(Math.random() * this.props.goodRecipe.length),
              badRecipeIndex = Math.floor(Math.random() * this.props.badRecipe.length),
              rouletteIndex = Math.floor(Math.random() * 3)
        let goodRecipeIndex2 = Math.floor(Math.random() * this.props.goodRecipe.length)

        //Duplicate recipe index check
        while(goodRecipeIndex2 === goodRecipeIndex1){
            // console.log('duplicate detected, reassigning index2')
            goodRecipeIndex2 = Math.floor(Math.random() * this.props.goodRecipe.length)
        }
        recipes.push(this.props.goodRecipe[goodRecipeIndex1])
        recipes.push(this.props.goodRecipe[goodRecipeIndex2])
        recipes.push(this.props.badRecipe[badRecipeIndex])
        // console.log('recipes: '+ JSON.stringify(recipes))
        this.setState({threeRecipes: recipes})
        // console.log(recipes[rouletteIndex])
        this.setState({chosenRecipe: recipes[rouletteIndex]})
        // console.log(this.state.chosenRecipe)
    }

    getChosenRecipe(){
        return this.state.chosenRecipe
    }

    render(){
        let recipes = this.state.threeRecipes.map((recipe, i) => {
            // console.log(this.state.chosenRecipe)
            //Borders the image and name in red for bad recipe
            if(i === 2){
                return <div key={i} className='Roulette-Recipe'>
                    <img id='recipe-img-bad' src= {recipe.imageURL}/>
                    <p id='recipe-name-bad'>{recipe.name}</p>
                </div> 
            }else{
                return <div key={i} className='Roulette-Recipe'>
                    <img id='recipe-img' src= {recipe.imageURL}/>
                    <p>{recipe.name}</p>
                </div>
            }
        })
        return(
            <div className= 'Recipe-Roulette-Box'>
                <section className= 'Three-Recipes-Display'>{recipes}</section>
                <button onClick = {this.GetRecipes}>Spin the Recipe Roulette!</button>
            </div>
        )
    }
}

export default GetRecipe