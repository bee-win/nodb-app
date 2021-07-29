/* Core Imports */
import react, {Component} from 'react'
/* Component Imports */
import Header from './Components/Header'
import GetRecipe from './Components/GetRecipe'
import DisplayChosenRecipe from './Components/DisplayChosenRecipe'
/* Data Imports */
import GoodRecipes from './Data/GoodRecipes'
import BadRecipes from './Data/BadRecipes'
/* CSS Imports */
import './App.css'

class App extends Component{
  constructor(){
    super()

    this.state = {
      goodRecipes: GoodRecipes,
      badRecipes: BadRecipes,
      savedRecipes: [],
      shownRecipe: {},
      toggleDecideButton: false
    }
    this.handleDecideClick = this.handleDecideClick.bind(this)
    this.getSavedRecipes = this.getSavedRecipes.bind(this)
  }

  getSavedRecipes(){
    this.setState({savedRecipes: this.refs.recipeBookRef.savedRecipes})
  }

  handleDecideClick(){
    let obj = this.refs.getRecipeRef.getChosenRecipe()
    this.setState({shownRecipe: obj})
    this.setState({toggleDecideButton: true})
    console.log('shown recipe in app is: '+JSON.stringify(this.state.shownRecipe))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <section className = 'Three-Recipe-Box'>
          <GetRecipe ref='getRecipeRef' goodRecipe={this.state.goodRecipes} badRecipe={this.state.badRecipes}/>
        </section>
        <DisplayChosenRecipe ref='displayRecipeRef' handleClickFn={this.handleDecideClick} shownRecipe={this.state.shownRecipe} toggleDecideButton={this.state.toggleDecideButton}/>
        {/* <RecipeBook ref='recipeBookRef' chosenRecipe={this.state.shownRecipe} savedRecipes={this.state.savedRecipes}/> */}
      </div>
    );
  }

}

export default App;
