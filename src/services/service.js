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

export function verify(request, callback) {
  axios
    .post(baseUrl + "/verifyuser", request, {
      headers: { token: request.token },
    })
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

export function reset(request, callback) {
  axios
    .post(baseUrl + "/resetpassword", request, {
      headers: { token: request.token },
    })
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

export function create_note(request, callback) {
  axios
    .post(baseUrl + "/note", request, {
      headers: { token: sessionStorage.getItem("token") },
    })
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

export function getAllNotes(callback) {
  axios
    .get(baseUrl + "/note", {
      headers: { token: sessionStorage.getItem("token") },
    })
    .then((data) => {
      return callback(null, data);
    })
    .catch((error) => {
      return callback(error);
    });
}

export function updateNote(request) {
  let response = axios.put(baseUrl + "/note/" + request.noteId, request, {
    headers: { token: sessionStorage.getItem("token") },
  });
  return response;
}

export function deleteNote(request) {
  let response = axios.delete(baseUrl + "/note/" + request.noteId, {
    headers: { token: sessionStorage.getItem("token") },
  });
  return response;
}

export function getAllLabels(request) {
  let response = axios.get(baseUrl + "/label", {
    headers: { token: sessionStorage.getItem("token") },
  });
  return response;
}
