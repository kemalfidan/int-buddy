import mongoDB from "../index";
import QuestionSchema from "../models/Question";

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
