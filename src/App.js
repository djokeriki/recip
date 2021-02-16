import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import './App.css'
import Recipe from './components/Recipe';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;
  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setRecipes(response.data.hits);
    setQuery('');
  }
  const onSubmit = e => {
    e.preventDefault();
    getData();
  }
  const onChange = e => {
    setQuery(e.target.value);
  }
  return (
    <div>
      <h1>FOOD SEARCHING APP</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text"placeholder="Search Food" autoComplete="off" value={query} onChange={onChange} />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes && recipes.map(recipe => (
         <Recipe key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default App
