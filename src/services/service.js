import axios from "axios";

const baseUrl = "http://localhost:3001";

export function login(request, callback) {
  axios
    .post(baseUrl + "/login", request)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

export function register(request, callback) {
  axios
    .post(baseUrl + "/register", request)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

export function forgot(request, callback) {
  axios
    .post(baseUrl + "/forgotpassword", request)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
