let serverURL = "http://localhost:7000/";

export function getDog() {
  return fetch("https://dog.ceo/api/breeds/image/random");
}

export function addMessage(data) {
  return fetch(serverURL + "add-message/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getUser(userId) {
  return fetch(serverURL + "get-user/" + userId);
}
