const { Configuration, OpenAIApi } =  require("openai") ;
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const configuration = new Configuration({
    organization: "org-roE3qdF4THZPZsempqeydBDs",
    apiKey: process.env.API_KEY ,
});