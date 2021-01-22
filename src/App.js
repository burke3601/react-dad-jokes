import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import JokeButton from './JokeButton'
import JokeContainer from './JokeContainer';



function App() {
  //const [joke, setJoke] = useState("");
  const [jokeArray, setJokeArray] = useState([])
  
  async function getJoke(){
    // fetch the joke
      const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json'
      }
      });
      const response = await jokePromise;
      const jokeData = await response.json();
      console.log(jokeData);
      //setJoke(jokeData.joke);
      //jokeArray.push(jokeData.joke);
      setJokeArray([
        ...jokeArray, 
        jokeData
      ]);
    }

  function deleteJoke (id) {
    //.filter out a joke from the jokeArray
      //use the joke's id to identify the joke to delete
    // setJokeArry using the newly filtered array 
    console.log(`you want to delete ${id}`)
    const filteredArray = jokeArray.filter(j => {
      if (j.id === id) {
        return false;
      } else {
        return true;
      }
    })
    setJokeArray(filteredArray);
  }

  useEffect(() => {
   
    //getJoke();
  }, []);

  //console.log(`this is the joke in state: `, joke)

  return (
    <div className="App">
        <Header />
        <JokeButton handleClick={getJoke}/>
        <JokeContainer  
          jokes={jokeArray}
          handleDelete={deleteJoke}
        />

    </div>
  );
}

export default App;
