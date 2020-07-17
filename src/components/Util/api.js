// NPM package used to work with API requests
import axios from "axios";

const activityApi =
  "https://web-internship-challenge-proxy.herokuapp.com/activity";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImNoYWxsZW5nZXRlc3R1c2VyQG1haWwuY29tIiwiVXNlck5hbWUiOiJjaGFsbGVuZ2V0ZXN0dXNlciIsIkZpcnN0TmFtZSI6IiIsIkxhc3ROYW1lIjoiIiwiSUQiOiI2Nzg5MTNkMy1lZWQwLTViNjYtN2QyZC0yODE5YmM5ZDEyM2UiLCJJbWFnZSI6Imh0dHBzJTNBJTJGJTJGc3RvcmFnZS5nb29nbGVhcGlzLmNvbSUyRnN0cnlkX3N0YXRpY19hc3NldHMlMkZwcm9maWxlX2ltYWdlJTJGcHJvZmlsZV9zdHJ5ZF9kZWZhdWx0LnBuZyUzRkV4cGlyZXMlM0Q0MTg5MjQ0NDAwJTI2R29vZ2xlQWNjZXNzSWQlM0Rnb29nbGUtY2xvdWQtc3RvcmFnZSUyNTQwc3RyeWR3ZWIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20lMjZTaWduYXR1cmUlM0RweTBNdFFIRlNWa1k2ZHA3MnE2N0pnJTI1MkJhejhBMGxGTzdRbnFwSW44R1NlVTVMbVYzJTI1MkJJWFhDenRTcW9nRWJDZTBkRFZRTllFcGh3VUlaaVQlMjUyQjl1aVZuempKMFhxYkhyeWhqaXdGZjglMjUyQjdTNHFvUVRZc085Y2RBdEhscDQlMjUyQkVJUENVcklnYVJMJTI1MkJrUWN0QWNiTk9GMTJhcUhKMFZobEIzMnlVa3ZNZFFqNDhuOEZDR2hBMUNBc1JSSXRmbWJyVnFFMldtdEQ1V24wJTI1MkI2anYlMjUyQmlzUWE1YVNhVjR0SzBmd3dJNFc4Y2dEVmhhRURtVEs4azh3cnA4QjhUTmZMRlRRb2hWR0tlOFBIaDdQc0ZSM3RmUVclMjUyRiUyNTJCWW56Vml4TnVDUXRvJTI1MkZsciUyNTJGQUo4JTI1MkJuSjllcCUyNTJGNzFERndBdVU1cWlkOE4yRWN3d0swd1QxVmslMjUyRlAxZHlWVkJnYndsS1hUMmclMjUzRCUyNTNEIiwiQWNjZXNzVHlwZXMiOm51bGwsImV4cCI6MTU4NTg2MDg4NTEzOCwiaXNzIjoic3RyeWQifQ.2SldwySUWETq0xmQmedJXuWB59qBj3RRuLXD5AP50ts";

export default class {
  // Method to get data from API
  static get = async () => {
    // Result variable with data and error properties
    let result = {
      data: null,
      error: null,
    };

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    await axios
      .get(activityApi, config)
      .then((resp) => {
        if (resp.status === 200) {
          result.data = resp.data;
        }
      })
      .catch((err) => {
        // Error handling in case API fails
        result.error = err.response.data;
      });

    console.log("This is the result from api.js", result);
    return result;
  };
}
