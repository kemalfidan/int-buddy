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

      return {
          props: {
              questions: JSON.parse(JSON.stringify(questions)),
          },
      };
  } catch (error) {
      return {
          props: {},
      };
  }
}


export default QuestionsPage;