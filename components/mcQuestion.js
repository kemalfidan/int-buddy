import React, { Component } from "react";
import Layout from "components/Layout";
import Header from "components/Header";
import NewlineText from "components/newLineText";
import Head from "next/head";

class MCQuestion extends Component {
  /* to do the ml_questions should be pulled from its parent */
  // mc_questions = {
  //   "question": "The code below calculates the average of two numbers. Will the code run properly with all test cases?\nint calculate_average(int a, int b) {\n    return a + b / 2;\n}",
  //   "answer": "C",
  //   "explanation": "It should be should be (a + b) / 2",
  //   "options": ["True", "False"]
  // };

  state = {
    showAnswer: false,
    your_answer: -1,
  };

  hintsHandler = () => {
    let h = !this.state.showAnswer;
    this.setState({ showAnswer: h });
  };

  optionHander = (e) => {
    this.props.question.your_answer = e.target.id;
    this.setState({ your_answer: e.target.id });
  };

  render() {
    return (
      <>
        <div className="container mycontainer">
          <div className="row">
            <div className="col" style={{ borderRight: "1px solid grey" }}>
              <NewlineText text={this.props.question.question} />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.hintsHandler}
              >
                {this.state.showAnswer && "Hide answer"}
                {!this.state.showAnswer && "Show answer"}
              </button>

              {this.state.showAnswer && (
                <div>
                  <br /> Answer: {this.props.question.answer}{" "}
                </div>
              )}
              {this.state.showAnswer && this.props.question.explanation != "" && (
                <div>
                  <br />
                  Explanation: <br />
                  {this.props.question.explanation}
                </div>
              )}
            </div>
            <div className="col">
              Select one of the options below:
              <div className="border border-dark myborder">
                {this.props.question.options.map((option, index) => {
                  return (
                    <div key={option}>
                      <input
                        id={index}
                        type="radio"
                        name="option"
                        onChange={this.optionHander}
                        checked={
                          "your_answer" in this.props.question &&
                          this.props.question.your_answer == index || 
                          this.state.your_answer == index
                        }
                      />
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .mycontainer {
            margin: 20px;
            padding: 0px 10px 0px 10px;
          }

          .myborder {
            margin-top: 20px;
            padding: 20px 5px 10px 20px;
          }

          input[type="radio"] {
            vertical-align: top;
            margin-top: 1px;
            height: 20px;
            width: 20px;
            margin-right: 10px;
            margin-bottom: 15px;
          }
        `}</style>
      </>
    );
  }
}

export default MCQuestion;
