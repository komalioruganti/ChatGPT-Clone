const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

const configuration = new Configuration({
    organization: "org-roE3qdF4THZPZsempqeydBDs",
    apiKey: process.env.API_KEY,
});

// Post request from OpenAI API
app.post('/', async (req, res) => {
    const response = await openai.createCompletion(
        {
            "model": "",
            "prompt":"Say this is a test",
            "max_tokens": 100,
            "temperature": 0.5,

        });
    // console.log(response.data);
    res.json({
        message: response.data.choices[0].text,
    })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})