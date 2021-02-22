import React, { Component } from 'react';
import IntroQuestion from "components/introQuestion";
import Layout from "components/Layout"
import Header from 'components/Header'
import Head from 'next/head'

/* question for */
class questions extends Component {
  
  state = {
    questionIndex : 0
  };
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

        { this.state.questionIndex == 0 && <IntroQuestion></IntroQuestion>}
        <div className="navBn">
          <button type="button" className="btn btn-primary previous">Previous</button>
          <button type="button" className="btn btn-primary next">Next</button>
        </div>


        <style global jsx>{`
          .navBn {
            margin-top: 30px;
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

export default questions;