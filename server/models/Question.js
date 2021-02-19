import { model, Schema } from "mongoose";

export const QuestionSchema = new Schema({
    type: {
        type: String,
        required: false,
    },
    question: {
        type: String,
        required: false,
    },
});

export default model("Question", QuestionSchema);
