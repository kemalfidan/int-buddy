import { model, models, Schema } from "mongoose";

export const QuestionSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: false,
    },
    answer: {
        type: String,
        required: true,
    },
    hints: {
        type: [String],
        required: false,
    },
    explanation: {
        type: String,
        required: false,
    },
});

export default (models.Question) || model("Question", QuestionSchema);
