import React from 'react';



function JokeContainer(props) {
    return (
        <section>
            <h3>The latest joke:</h3>
            <p>{props.joke}</p>
        </section>
    )
}

export default JokeContainer;