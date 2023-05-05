const { Configuration, OpenAIApi } =  require("openai") ;
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

let key = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    organization: "org-roE3qdF4THZPZsempqeydBDs",
    apiKey: key,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
//create an express api that calls the callapi function

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;


app.post('/', async (req,res)=>{
    const {message, currModel} = req.body;
    const response = await openai.createCompletion(
        {
            "model": `${currModel}`,
            "prompt": `${message}`,
            "max_tokens": 300,
            "temperature": 0.5,
          
    });

    const msg = response.data.choices[0].text;

    const img_response = await openai.createImage({
        prompt: `${msg}`,
        n: 1,
        size: "1024x1024",
      });
const ur = img_response.data.data[0].url;
console.log(ur)
    res.json({
    message : msg,
    image_url : img_response.data.data[0].url,
    })
})

//getting all the available AI models
app.get('/models', async (req,res)=>{
    const response = await openai.listEngines();
    res.json({
        models: response.data.data
    })
    
})


app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})