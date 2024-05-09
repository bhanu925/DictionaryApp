import React ,{useState} from 'react';
import './Dictionary.css';
export default function Dictionary() {

    
const arr = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

    const [ searchText, setSearchText] = useState('');
    const [ dictionary, setDictionary] =useState(arr);
    const [definition,setDefinition] = useState('');

    const handleSearch =()=>{
        if(searchText){
            const word = dictionary.find((item,index)=>item.word.toLowerCase() === searchText.toLowerCase())
            if(word){
                setDefinition(word.meaning);
            }  
            else{
                setDefinition("Word not found in the dictionary.");
            }         
        }
    }
  return (
    <div className='container'>
        <h1>Dictionary App</h1>
        <div>
            <input type="text" placeholder='Search for a word...'
             value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
             className="input" />
            <button onClick={handleSearch} className="search">Search</button>
        </div>  
        <div>
            <h3>Definition:</h3>
            <p>{definition}</p>
        </div>
      
    </div>
  )
}
