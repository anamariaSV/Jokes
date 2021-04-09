import React from 'react';

export default class Jokes extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            joke: null
        }
     }

     componentDidMount = () =>{
         this.getApi();
     }
        
     getApi = ()=> {
         fetch('https://official-joke-api.appspot.com/random_joke')
         .then(response => response.json())
         .then(data => this.setState({joke: data}));
     }
    
    render()
    {
        if(!this.state.joke){
             return <h2>Loading...</h2>
         }
        const {setup, punchline} = this.state.joke;
            return(
                <div>
                    <h3>{setup}</h3>
                    <p>{punchline}</p>
                    <button onClick = {this.getApi}>Joke of the day</button>
                </div>
            );
        }
    }