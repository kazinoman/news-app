// const axios = require("axios");
import axios from "axios";

const Http = axios.create({ baseURL: "https://newsapi.org/v2", headers: { Accept: "text/html" } });

export default Http;
