import React, { Component } from 'react';
import IntroQuestion from "components/introQuestion";
import MCQuestion from "components/mcQuestion";
import Header from 'components/Header'
import Head from 'next/head'
import Footer from 'components/Footer';
import Timer from 'components/Timer';

const appTitle = "intBuddy";
class Questions extends Component {
  state = {
    questionIndex : 0
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
            <title>intBuddy</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </Head>

        <Header appTitle="intBuddy"/>
        <Timer number={this.state.questionIndex+1} total={this.props.questions.length} />

        { this.props.questions[this.state.questionIndex].type == "Introductory" && <IntroQuestion></IntroQuestion> }
        { this.props.questions[this.state.questionIndex].type == "MultipleChoice" && <MCQuestion></MCQuestion> }

        <div className="navBn">
          { this.state.questionIndex != 0 && <button onClick={this.previousHandler} type="button" className="btn btn-primary previous">Previous</button> }
          { this.state.questionIndex != this.props.questions.length - 1 && <button onClick={this.nextHandler} type="button" className="btn btn-primary next">Next</button> }
        </div>

        <Footer appTitle={appTitle} />
        <style jsx>{`
          .navBn {
            margin-top: 100px;
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
            
        `}</style>

      </>
    );
  }
}

export default Questions;