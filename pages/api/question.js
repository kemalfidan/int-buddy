import { addQuestion } from "server/actions/Question";
import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            throw new Error("need to create get request for a question");
        } 
        else if (req.method === "POST") {
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                console.log(fields);
                await addQuestion(fields);
                res.status(200).json({
                    status: 200,
                    payload: {},
                });
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
