import { model, models, Schema } from "mongoose";

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

export default (models.Question) || model("Question", QuestionSchema);
