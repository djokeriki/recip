import {v4 as uuidv4} from 'uuid'

const RecipeDetails = ({ingredients}) => {
    return   ingredients.map(ingredient => (
        <ul key={uuidv4()} className="ingredient-list">
            <li className="ingredient-text">{ingredient.text}</li>            
            <li className="ingredient-weight">Weight - {ingredient.weight}</li>            
        </ul>
    ))
    
}

export default RecipeDetails
