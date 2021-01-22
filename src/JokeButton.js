import React from 'react';

function JokeButton(props) {
    return(
        <nav>
            <button 
                onClick={props.getJoke}
            >
                Get a new Joke!
            </button>
        </nav>
    )
}

export default JokeButton;