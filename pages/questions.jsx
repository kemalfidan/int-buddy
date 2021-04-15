import React from 'react';
import { getExamSession } from "server/actions/Question";
import Questions from "components/Questions";

const QuestionsPage = ({questions}) => {
  
  return (
    <Questions questions={questions}/>
  );
};


export async function getServerSideProps() {
  try {
      const questions = await getExamSession();
      let q = JSON.parse(JSON.stringify(questions));
      q.push({type: "Coding", yourAnswer : ""});
      return {
          props: {
              questions: q,
          },
      };
  } catch (error) {
      return {
          props: {},
      };
  }
}


export default QuestionsPage;