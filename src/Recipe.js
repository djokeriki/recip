import React from 'react';

const Recicpe = ({title, calories, image, ingredients }) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt={title} />
        </div>
    );

}

export default Recicpe;