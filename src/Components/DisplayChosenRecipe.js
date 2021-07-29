import react, {Component} from 'react'
import RecipeBook from '../Components/RecipeBook'

class DisplayChosenRecipe extends Component{
    constructor(){
        super()

        this.state={
            chosenRecipe : {},
            editButtonEnabled: false,
            editIngredientEnabled: false,
            ingredients: {},
            quantityInput: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.toggleEditIngredient = this.toggleEditIngredient.bind(this)
        this.test = this.test(this)
        // this.handleEditQuantity = this.handleEditQuantity.bind(this)
    }
 
    toggleEdit(){
        this.setState({editButtonEnabled: !this.state.editButtonEnabled})
    }

    toggleEditIngredient(){
        this.setState({editIngredientEnabled: !this.state.editIngredientEnabled})
    }

    handleEditClick(){
        this.toggleEditIngredientButton()
    }
    handleQuantityChange(e){
        this.setState({quantityInput: e})
    }
    handleEditQuantity(i){
        // this.toggleEditIngredient()
        let obj = this.state.chosenRecipe
        obj.ingredients[i].quantity = this.state.quantityInput
        this.setState({chosenRecipe: obj})
    }

    test(i){
        console.log('mapped i: '+i)
    }
    render(){
        let ingredients = []
        let steps = []
        let id = 0
        if(this.props.toggleDecideButton){
          ingredients = this.props.shownRecipe.ingredients.map((ingredients, i) => {
            return <div id='individual-ingredient' key={i}>
              <li>{`${ingredients.quantity} of ${ingredients.name}`}</li>
              <input 
                hidden={!this.state.editButtonEnabled} 
                placeholder={ingredients.quantity} 
                onChange={(e) => this.handleQuantityChange(e.target.value)}></input>
              <input 
                hidden={!this.state.editButtonEnabled} 
                placeholder={ingredients.name} 
                onChange={(e) => this.handleQuantityChange(e.target.value)}></input>
              <button hidden={!this.state.editButtonEnabled} onClick={ () => {
                  id++
                  return this.handleEditQuantity(id)
                  }}>Edit</button>
            </div>
          })
          steps = this.props.shownRecipe.steps.map((step, i) => {
            return <div key={i}>
              <li>{step}</li>
            </div>
          })
        //   this.setState({ingredients: ingredients})
        }
        console.log('TEST ingredients: ', ingredients)
        return(
            <div> 
                <section>   
                    <button id='pickRandomButton' onClick={this.props.handleClickFn}>Pick a random recipe</button>
                </section>
                <section className='DisplayChosenRecipe' >
                    <section className='Top-Section'>
                        <section id='chosen-recipe-name-image-box'>
                            <h1>{this.props.shownRecipe.name}</h1>
                            <img hidden={!this.props.toggleDecideButton} id='shown-recipe-image' src={this.props.shownRecipe.imageURL}/>
                        </section>
                        <section id='chosen-recipe-ingredients-box' >
                            <h1 hidden={!this.props.toggleDecideButton}>Ingredients</h1>
                            <ul>{ingredients}</ul>
                            <button hidden={!this.props.toggleDecideButton || this.state.editButtonEnabled} onClick={this.toggleEdit}>Edit Ingredients</button>
                            <button hidden={!this.state.editButtonEnabled} onClick={this.toggleEdit}>Save</button>
                        </section>
                    </section>
                    <section className='Bottom-Section'>
                        <h1 hidden={!this.props.toggleDecideButton}>Steps</h1>
                        <ol>{steps}</ol>
                    </section>
                </section>
                <RecipeBook ref='recipeBookRef' chosenRecipe={this.props.shownRecipe}/>
            </div>
        )
    }
}

export default DisplayChosenRecipe