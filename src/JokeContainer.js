import React from 'react';



function JokeContainer({jokes, handleDelete}) {
    return (
        <section>
            <h3>The latest joke:</h3>
            {
                jokes.map(joke =>(
                    <p key={joke.id}
                    >{joke.joke}
                    <button onClick={(e) => {
                        console.log('just clicked delete')
                        handleDelete(joke.id)
                    }}
                    >X</button>
                    </p>
                ))
            }
        </section>
    )
}

export default JokeContainer;