const $ = document.querySelector.bind(document);

function getImage(breed) {
  fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
    .then((r) => r.json())
    .then((data) => {
      if (data.status == "success") {
        $("#image").innerHTML = "<img src='" + data.message + "'}>";
      } else {
        $("#image").innerHTML = "Error! Breed Not Found;";
      }
    });
}
var intervalid;
function showImages() {
  let breed = $("#breed").value.trim().toLowerCase()
  clearInterval(intervalid);
  console.log(intervalid);
  getImage(breed)
  intervalid = setInterval(() => {
    getImage(breed);
  }, 5000);
}

$("#d").addEventListener("click", showImages);
