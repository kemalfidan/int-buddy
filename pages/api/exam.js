import { getExamSession } from "server/actions/Question";

// GET    /api/exam - Create exam session and return questions
export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const questions = await getExamSession();
            res.status(200).json({
                status: 200,
                payload: questions,
            });
        } 
    }
    catch (e) {
        console.error(e);
        res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}
