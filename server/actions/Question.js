import mongoDB from "../index";
import QuestionSchema from "../models/Question";
import { QuestionType } from "utils/types";

export const addQuestion = async function (question) {
    await mongoDB();
    if (!question) {
        throw new Error("Invalid question");
    }

    await QuestionSchema.create(question);
}

export const getQuestions = async function () {
    await mongoDB();
    const questions = await QuestionSchema.find({});
    
    if (!questions) {
        throw new Error("No questions found!");
    }
    
    return questions;
}

export const getExamSession = async function () {
    await mongoDB();
    
    var examSession = [];
    var promises = [];
    for (let questionType in QuestionType) {
        // get more mult choice questions
        if (questionType === "MultipleChoice") {
            promises.push(QuestionSchema.find({type: questionType}).limit(2));
        }
        else {
           promises.push(QuestionSchema.find({type: questionType}).limit(1));
        }
    }

    const questionsArray = await Promise.all(promises);
    for (var questions of questionsArray) {
        examSession = examSession.concat(questions);
    }
    return examSession;
}

