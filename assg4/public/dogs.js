const $ = document.querySelector.bind(document);
const API_URL = "http://localhost:3000";
function getImage(breed) {
  fetch(`${API_URL}/images?breed=${breed}`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      if (data) {
        const randInt = (n) => Math.floor(n * Math.random());
        const getRandomItemFromArray = (arr) => arr[randInt(arr.length)]; 
        $("#image").innerHTML = "<img src='" + getRandomItemFromArray(data) + "'}>";
      } else {
        $("#image").innerHTML = "Error! Breed Not Found;";
      }
    });
}
var intervalid;
function showImages() {
  let breed = $("#breed").value.trim().toLowerCase();
  clearInterval(intervalid);
  console.log(intervalid);
  getImage(breed);
  intervalid = setInterval(() => {
    getImage(breed);
  }, 5000);
}
fetch(`${API_URL}/breeds`)
  .then((r) => r.json())
  .then((data) => {
    const datalist = document.getElementById("breeds");
    const breedslist = data;
    breedslist.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed;
      datalist.appendChild(option);
    });
  });

$("#d").addEventListener("click", showImages);
