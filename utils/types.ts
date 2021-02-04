
export enum QuestionType {
    Introductory = "Introductory",
    MultipleChoice = "MultipleChoice",
    ShortAnswer = "ShortAnswer",
    Coding = "Coding",
    Behavioral = "Behavioral",
    SystemDesign = "SystemDesign"
}

export interface Question {
    question: String;
    answer: String;
    type: QuestionType;
}

export interface MultChoice extends Question {
    options: String[];
    correctAnswer: number; 
}

export interface ExamSession {
    questions: Question[];
}