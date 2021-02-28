import React, { Component } from 'react';
import IntroQuestion from "components/introQuestion";
import MCQuestion from "components/mcQuestion";
import CodingQuestion from "components/codingQuestion";
import Layout from "components/Layout"
import Header from 'components/Header'
import Head from 'next/head'
import Footer from 'components/Footer';

var appTitle = "intBuddy";
const max_questions = 3;
/* question for */
class questions extends Component {
  
  state = {
    questionIndex : 2
  };

  previousHandler = () => {
    let i = this.state.questionIndex - 1;
    this.setState({ questionIndex: i });
  }

  nextHandler = () => {
    let i = this.state.questionIndex + 1;
    this.setState({ questionIndex: i });
  }

  render() {
    return (
      <>
        <Head>
            <title>{appTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </Head>

        <Header appTitle={appTitle}/>

        { this.state.questionIndex == 0 && <IntroQuestion></IntroQuestion> }
        { this.state.questionIndex == 1 && <MCQuestion></MCQuestion> }
        { this.state.questionIndex == 2 && <CodingQuestion></CodingQuestion> }

        <div className="navBn">
          { this.state.questionIndex != 0 && <button onClick={this.previousHandler} type="button" className="btn btn-primary previous">Previous</button> }
          { this.state.questionIndex != max_questions - 1 && <button onClick={this.nextHandler} type="button" className="btn btn-primary next">Next</button> }
        </div>

        <div className="footer" > <Footer appTitle={appTitle} /> </div>
        <style jsx>{`
          .navBn {
            margin-top: 30px;
            margin-bottom: 150px;
          }
          .previous {
            float:left;
            margin-left:30px; 
            width: 100px;
          }    
          
          .next {
            float: right;
            margin-right:30px; 
            width: 100px;
          }

          .footer {
            position: fixed;
            bottom: 0px;
            width: 100%;
          }
            
        `}</style>

      </>
    );
  }
}

export default questions;