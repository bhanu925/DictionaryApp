import React ,{useState} from 'react';
import './Dictionary.css';
export default function Dictionary() {

    
    const dictionary = [
        {
          word: "React",
          meaning: "A JavaScript library for building user interfaces.",
        },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." },
      ];

    // const [ searchText, setSearchText] = useState('');
    // const [definition,setDefinition] = useState('');
    const [curValue, setCurValue] = useState("");
    const [result, setResult] = useState("");
    const handleChange = (e) => {
      setCurValue(e.target.value);
    };

    const handleDictionary = () => {
        let found = false;
        dictionary.forEach((item) => {
          if (item.word.toLowerCase() === curValue.toLowerCase()) {
            setResult(item.meaning);
            found = true;
          }
          if (!found) {
            setResult("Word not found in the dictionary.");
          }
        });
      };
      return (
        <div className="App">
          <h1>Dictionary App</h1>
          <input
            type="text"
            placeholder="Search for a word..."
            value={curValue}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={() => handleDictionary()}>Search</button>
          <div className="result">
            <h3>Definition:</h3>
            <p>{result}</p>
          </div>
        </div>
      );
    }
