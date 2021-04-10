import { addQuestion, getQuestions } from "server/actions/Question";
import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

// GET    /api/question - Get a list of all the questions in the db.
// POST   /api/question - Create an exam question.
export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const questions = await x();
            res.status(200).json({
                status: 200,
                payload: questions,
            });
        }
        else if (req.method === "POST") {
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                try{
                    await addQuestion(fields);
                    res.status(200).json({
                        status: 200,
                        payload: {},
                    });
                }
                catch (e) {
                    console.error(e);
                    res.status(400).json({
                        status: 400,
                        message: e.message
                    });
                }
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
