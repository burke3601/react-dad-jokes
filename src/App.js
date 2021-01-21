import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import JokeButton from './JokeButton'
import JokeContainer from './JokeContainer';



function App() {
  //tells React to perform actions that 
  // are not directly related to drawing.
  // aka "side effects"
  //  this is the equivalent of "window.onload"
  // this side effect will run exactly one time, no matter
  //how often React has to re-run the App() function to check
  // if anything needs redrawing in the actual/live DOM on the page.
  // this "calculation" and "reconciliation" process is known as 
  // React's Vritual DOM
  useEffect(() => {
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
    getJoke();
  }, []);

  const [joke, setJoke] = useState("");
  
  console.log(`this is the joke in state: `, joke)

  return (
    <div className="App">
        <Header />
        <JokeButton />
        <JokeContainer  joke={joke}/>

    </div>
  );
}

export default App;
