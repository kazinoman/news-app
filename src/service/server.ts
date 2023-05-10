// const axios = require("axios");
import axios from "axios";

const Http = axios.create({ baseURL: "", headers: { Accept: "text/html" } });

export default Http;
