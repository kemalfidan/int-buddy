import React, { Component } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header'
import Head from 'next/head'


class IntroQuestion extends Component {

  /* to do the intro_questions should be pulled from its parent */
  intro_questions = {
    "question": "Tell me a little about yourself?",
    "hints": ["Summarize your professional standing", "Elaborate on your experiences and achievements", "Conclude with a lead-in to the next part of the conversation"],
    "example": "My name is Kareem Ali. I’m the product development manager at Smart Solutions. \
               I’ve created over a dozen apps designed to streamline sales and marketing activities for busy professionals. \
               I see myself as a relentless problem-solver, and I’m always looking for a new challenge. \
               I’ve recently gotten interested in recreational boating and noticed that the sales professionals at Dockside Boats don’t seem to have a streamlined system for tracking their sales. \
               I’d love to discuss your needs in this area and find out if you’re interested in participating in beta testing for a new sales app I’m developing."
  };

  state = {
    showHints: false
  };

  hintsHandler = () => {
    let h = !this.state.showHints;
    this.setState({showHints : h});
  };

  render() {
    return (
      <>  
        <div className="container mycontainer">
          <div className="row">
            <div className="col" style={{borderRight: "1px solid grey"}}>

              {this.intro_questions.question} <br/> <br/>
              <button type="button" className="btn btn-outline-primary" onClick={this.hintsHandler}>
                {this.state.showHints && 'Hide hints'}
                {!this.state.showHints && 'Show hints'}
              </button>

              { this.state.showHints && 

                <div>
                  <br/>Hints:
                  <ul>
                    {this.intro_questions.hints.map( (hint,index) => {return <li key={index}>{hint}</li>})}
                  </ul>
               
               
                  Example:
                  <ul>
                    <li>{this.intro_questions.example}</li>
                  </ul>
     
                </div>
                
              }
            </div>
            <div className="col">
              
                <label className="textLabel">Your answer: 
                  <textarea name="answer" rows="5" cols = "50" className="textInput"></textarea>
                </label>
             
            </div>
          </div>
        </div>


        <style jsx>{`
          .mycontainer {
            margin: 20px;
            padding: 0px 10px 0px 10px;
          }

          .textInput {
            background-color: lightgrey;
            padding: 10px;
            margin-right: 20px;
          }
          .textLabel {
            margin: 0px;
          }
          
        `}</style>

      </>
    );
  }
}

export default IntroQuestion;

