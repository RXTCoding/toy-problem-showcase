import React, {Component} from 'react';

export default class EvenAndOdd extends Component {

            constructor() {
                super();
                this.state={
                    evenArray:[],
                    oddArray:[],
                    userInput:''
                }
            }
            assignEvenArray(userInput){
                for (let i=0; i< userInput.length; i++){
                    if (userInput[i] % 2=== 0)
                    this.evenArray.push(userInput[i])
                }
            }
            assignOddArray(userInput){
                for (let i=0; i< userInput.length; i++){
                    if (userInput[i] % 2=== 1)
                    this.evenArray.push(userInput[i])
                }
            }
            render(){
                return (
                    <div class='puzzleBox evenAndOdd'>
                    <h4>Evens and Odds</h4>
                    <input class='inputLine' type='text' onChange={this.state.userInput}/>
                    <button class='confirmationButton' onClick= {}></button>
                    <span class='resultsBox'></span>
                    <span class='resultsBox'></span>
                    </div>
                
            
        )
    }
}