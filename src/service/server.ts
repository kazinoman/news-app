// const axios = require("axios");
import axios from "axios";

const Http = axios.create({ baseURL: process.env.BASE_URL, headers: { Accept: "text/html" } });

export default Http;
