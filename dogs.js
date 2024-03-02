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
fetch("https://dog.ceo/api/breeds/list/all").then(r=>r.json()).then(data=> {
    const datalist=document.getElementById("breeds");
    const breedslist=Object.keys(data.message);
    breedslist.forEach(breed=>{
        const option=document.createElement("option");
        option.value=breed;
        datalist.appendChild(option);
    })
})

$("#d").addEventListener("click", showImages);
