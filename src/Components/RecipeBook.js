import react, {Component} from 'react'

class RecipeBook extends Component{
    constructor(){
        super()

        this.state={
            savedRecipes: [],
            chosenRecipe: {},
            toggleEdit: false,
            userInput: ''
        }
        this.handleRecipeImageClick = this.handleRecipeImageClick.bind(this)
        this.toggleButton = this.toggleButton.bind(this)
        // this.getSavedRecipes = this.getSavedRecipes.bind(this)
        // this.deleteRecipe = this.deleteRecipe(this)
    }

    handleInput(e){
        this.setState({userInput: e})
    }
    toggleButton(){
        this.setState({toggleEdit: !this.state.toggleEdit})
    }

    editName(index){
        this.toggleButton()
        let recipes = this.state.savedRecipes.slice()
        recipes[index].name= this.state.userInput
        
    }
    deleteRecipe(index){
        let recipes = this.state.savedRecipes.slice()
        recipes.splice(index, 1)
        this.setState({savedRecipes: recipes})
    }
    
    getChosenRecipe(recipe){
        console.log('clicked: '+ JSON.stringify(recipe))
        return recipe
    }
    handleRecipeImageClick(){
        return this.state.chosenRecipe
    }
    addRecipe(recipe){
        if(!this.state.savedRecipes.includes(recipe)){
            this.setState({savedRecipes: [...this.state.savedRecipes, recipe]})
        }else{
            alert('Recipe already exists in recipe book.')
        }
        console.log(this.state.savedRecipes)
    }
    render(){
        let recipes =  this.state.savedRecipes.map((recipe, i) => {
                return <div key={i}>
                    <img onClick={() => this.getChosenRecipe(i)} id='recipe-book-img' src= {recipe.imageURL}/>
                    <p id='recipe-book-recipe-name'>{recipe.name}</p>
                    <img onClick={() => this.deleteRecipe(recipe)}/>
                    <section>
                        <input id='edit-name-input' onChange={(e) => this.handleInput(e.target.value)}></input>
                        <button id='delete-image' hidden={!this.toggleButton} onClick={() => this.editName(i)}>edit name</button>
                    </section>

                    <button id='delete-image' onClick={() => this.deleteRecipe(i)}>delete recipe</button>
                </div>
            })
        // }
        return(
            <div className='RecipeBookBox'>
                <button onClick={() => this.addRecipe(this.props.chosenRecipe)}>Add recipe to recipe book</button>
                <span id='horizontal-divider'></span>
                <h1>Recipe Book</h1>
                <section id='recipe-book-display'>
                    {recipes}
                </section>
            </div>
        )

    }
}

export default RecipeBook