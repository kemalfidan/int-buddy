import React, { Component } from 'react';
import Layout from 'components/Layout';
import Head from 'next/head'
import CodePrettier from 'components/codePrettier'
class CodeingQuestion extends Component {

  /* to do the intro_questions should be pulled from its parent */
  questions = {
    "problem_statement": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays",
    "examples": [ {"input": "nums1 = [1,3], nums2 = [2]", "output": "2.00000", "explanation": "merged array = [1,2,3] and median is 2."},
                  {"input": "nums1 = [1,2], nums2 = [3,4]", "output": "2.50000", "explanation": "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."},
                  {"input": "nums1 = [0,0], nums2 = [0,0]", "output": "0.00000"}, 
                  {"input": "nums1 = [], nums2 = [1]", "output": "1.00000"}],
    "answer": String.raw`def median(A, B):
    m, n = len(A), len(B)
    if m > n:
        A, B, m, n = B, A, n, m
    if n == 0:
        raise ValueError

    imin, imax, half_len = 0, m, (m + n + 1) / 2
    while imin <= imax:
        i = (imin + imax) / 2
        j = half_len - i
        if i < m and B[j-1] > A[i]:
            # i is too small, must increase it
            imin = i + 1
        elif i > 0 and A[i-1] > B[j]:
            # i is too big, must decrease it
            imax = i - 1
        else:
            # i is perfect

            if i == 0: max_of_left = B[j-1]
            elif j == 0: max_of_left = A[i-1]
            else: max_of_left = max(A[i-1], B[j-1])

            if (m + n) % 2 == 1:
                return max_of_left

            if i == m: min_of_right = B[j]
            elif j == n: min_of_right = A[i]
            else: min_of_right = min(A[i], B[j])

            return (max_of_left + min_of_right) / 2.0"`,
    "hints": ["Summarize your professional standing", "Elaborate on your experiences and achievements", "Conclude with a lead-in to the next part of the conversation"],
    "example": "My name is Kareem Ali. I’m the product development manager at Smart Solutions. \
               I’ve created over a dozen apps designed to streamline sales and marketing activities for busy professionals. \
               I see myself as a relentless problem-solver, and I’m always looking for a new challenge. \
               I’ve recently gotten interested in recreational boating and noticed that the sales professionals at Dockside Boats don’t seem to have a streamlined system for tracking their sales. \
               I’d love to discuss your needs in this area and find out if you’re interested in participating in beta testing for a new sales app I’m developing."
  };

  state = {
    showHints: false,
    showDescription: true,
    showAnswer: false,
    yourAnswer: "class Voila {\npublic:\n    // Voila\n    static const string VOILA = \"Voila\"\n}"
  };

  hintsHandler = () => {
    let h = !this.state.showHints;
    this.setState({showHints : h});
  };

  showAnswer = () => {
    this.setState({showAnswer: true, showDescription: false});
  }

  showDescription = () => {
    console.log(this.state);
    this.setState({showAnswer: false, showDescription: true});
  }

  render() {
    return (
      <>  
        <div className="container mycontainer">
          <div className="row">
            <div className="col" style={{borderRight: "1px solid grey", overflow: "auto", height:"100vh"}}>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a onClick={this.showDescription} className={this.state.showDescription ? "nav-item nav-link active" : "nav-item nav-link"} href="#">Description</a>
                  <a onClick={this.showAnswer} className={this.state.showAnswer ? "nav-item nav-link active" : "nav-item nav-link"} href="#">Answer</a>
               
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <br/>
                <div className="tab-pane fade show active">

                  { this.state.showDescription && <>
                    <h4>Problem Statement</h4>
                    <div>{this.questions.problem_statement}</div> <br/>
                    {this.questions.examples.map( (example, index) => {
                      return (
                        <div key={index}>
                          <h5>Example {index+1}</h5>
                          <div className="exampleBlock">
                            <div><b>Input: </b>{example.input}</div>
                            <div><b>Output: </b>{example.output}</div>
                            {"explanation" in example && <div><b>Explanation: </b>{example.explanation}</div>}
                          </div>
                          <br/>
                        </div> 

                    )})}
                    
                  </> }

                  { this.state.showAnswer && <> 

                    <div style={{border: "1px solid lightgrey"}}>
                      <CodePrettier language="java" disabled={true}>{this.questions.answer}</CodePrettier>
                    </div>
                  </> }

                 
                </div>
                
                
                <div style={{marginBottom: "200px"}}></div>

              </div>
                
            </div>
            <div className="col" style={{marginTop: "40px"}}>

              Your answer: <br/> <br/>
              <div style={{border: "1px solid lightgrey"}}>
                <CodePrettier language="java" state={this.state}></CodePrettier>
              </div>
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

          .exampleBlock {
            background-color: lightgrey;
            border-radius: 5px;
            padding 5px 5px 5px 15px;
          }
          
        `}</style>

      </>
    );
  }
}

export default CodeingQuestion;

