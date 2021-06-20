const url = "https://dog.ceo/api";

export function getDog() {
  return fetch("https://dog.ceo/api/breeds/image/random");
}
