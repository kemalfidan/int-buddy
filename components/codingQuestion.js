import React, { Component } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import CodePrettier from "components/codePrettier";
import NewlineText from "components/newLineText";

const question1 = {
  problem_statement:
    "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays",
  examples: [
    {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
      explanation: "merged array = [1,2,3] and median is 2.",
    },
    {
      input: "nums1 = [1,2], nums2 = [3,4]",
      output: "2.50000",
      explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
    },
    { input: "nums1 = [0,0], nums2 = [0,0]", output: "0.00000" },
    { input: "nums1 = [], nums2 = [1]", output: "1.00000" },
  ],
  answer: String.raw`def median(A, B):
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
  answer_explanation: "",
};

const question2 = {
  problem_statement:
    "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\
An input string is valid if:\n\
  1. Open brackets must be closed by the same type of brackets.\n\
  2. Open brackets must be closed in the correct order.",
  examples: [
    {
      input: 's = "()"',
      output: "True",
    },
    {
      input: 's = "()[]{}"',
      output: "True",
    },
    { input: 's = "([)]"', output: "False" },
  ],
  answer: String.raw`class Solution(object):
  def isValid(self, s):
      """
      :type s: str
      :rtype: bool
      """

      # The stack to keep track of opening brackets.
      stack = []

      # Hash map for keeping track of mappings. This keeps the code very clean.
      # Also makes adding more types of parenthesis easier
      mapping = {")": "(", "}": "{", "]": "["}

      # For every bracket in the expression.
      for char in s:

          # If the character is an closing bracket
          if char in mapping:

              # Pop the topmost element from the stack, if it is non empty
              # Otherwise assign a dummy value of '#' to the top_element variable
              top_element = stack.pop() if stack else '#'

              # The mapping for the opening bracket in our hash and the top
              # element of the stack don't match, return False
              if mapping[char] != top_element:
                  return False
          else:
              # We have an opening bracket, simply push it onto the stack.
              stack.append(char)

      # In the end, if the stack is empty, then we have a valid expression.
      # The stack won't be empty for cases like ((()
      return not stack`,
  answer_explanation: "",
};

const all_questions = [question1, question2];

class CodeingQuestion extends Component {
  state = {
    showHints: false,
    showDescription: true,
    showAnswer: false,
    questionIndex: -1,
  };

  constructor(props) {
    super(props);
    if (!("question_index" in props.question)) {
      props.question.question_index = Math.floor(
        Math.random() * all_questions.length
      );
    }
    this.questions = all_questions[props.question.question_index];
  }

  hintsHandler = () => {
    let h = !this.state.showHints;
    this.setState({ showHints: h });
  };

  showAnswer = () => {
    this.setState({ showAnswer: true, showDescription: false });
  };

  showDescription = () => {
    this.setState({ showAnswer: false, showDescription: true });
  };

  render() {
    return (
      <>
        <div className="container mycontainer">
          <div className="row">
            <div
              className="col"
              style={{
                borderRight: "1px solid grey",
                overflow: "scroll",
                height: "65vh",
              }}
            >
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    onClick={this.showDescription}
                    className={
                      this.state.showDescription
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    href="#"
                  >
                    Description
                  </a>
                  <a
                    onClick={this.showAnswer}
                    className={
                      this.state.showAnswer
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    href="#"
                  >
                    Answer
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <br />
                <div className="tab-pane fade show active">
                  {this.state.showDescription && (
                    <>
                      <h4>Problem Statement</h4>
                      <NewlineText text={this.questions.problem_statement} />
                      {this.questions.examples.map((example, index) => {
                        return (
                          <div key={index}>
                            <h5>Example {index + 1}</h5>
                            <div className="exampleBlock">
                              <div>
                                <b>Input: </b>
                                {example.input}
                              </div>
                              <div>
                                <b>Output: </b>
                                {example.output}
                              </div>
                              {"explanation" in example && (
                                <div>
                                  <b>Explanation: </b>
                                  {example.explanation}
                                </div>
                              )}
                            </div>
                            <br />
                          </div>
                        );
                      })}
                    </>
                  )}

                  {this.state.showAnswer && (
                    <>
                      <div style={{ border: "1px solid lightgrey" }}>
                        <CodePrettier disabled={true}>
                          {this.questions.answer}
                        </CodePrettier>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col" style={{ marginTop: "40px" }}>
              Your answer: <br /> <br />
              <div style={{ border: "1px solid lightgrey" }}>
                <CodePrettier state={this.props.question}></CodePrettier>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`

          .mycontainer {
            margin: 10px 20px 0px 20px;
            padding: 0px 10px 0px 10px;

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
