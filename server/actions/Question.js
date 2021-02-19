import mongoDB from "../index";
import QuestionSchema from "../models/Question";

export const addQuestion = async function (question) {
    await mongoDB();
    if (!question) {
        throw new Error("Invalid question");
    }

    await QuestionSchema.create(question);
}
