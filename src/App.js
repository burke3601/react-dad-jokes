import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import JokeButton from './JokeButton'
import JokeContainer from './JokeContainer';



function App() {
  const [joke, setJoke] = useState("");
  async function getJoke(){
    // fetch the joke
      const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json'
      }
      });
      const response = await jokePromise;
      const jokeData = await response.json();
      console.log(jokeData.joke);
      setJoke(jokeData.joke);
  }
    
  useEffect(() => {
   
    getJoke();
  }, []);

  console.log(`this is the joke in state: `, joke)

  return (
    <div className="App">
        <Header />
        <JokeButton getJoke={getJoke}/>
        <JokeContainer  joke={joke}/>

    </div>
  );
}

export default App;
