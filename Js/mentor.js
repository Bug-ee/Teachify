const names = [
  {
    name: "Заяадэлгэр",
    who: "teacher",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
  {
    name: "Тэмүүжинs",
    who: "teacher",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
  {
    name: "Намсрай",
    who: "teacher,mentor",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
  {
    name: "Тодсүрэн",
    who: "teacher,mentor",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
  {
    name: "Цэрэнтогтох",
    who: "teacher,mentor",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
];
const result = document.querySelector(".section1");
document.addEventListener("DOMContentLoaded", function () {
  const shownames = names
    .map((el) => {
      return `
        <button class="card" onclick="play('  ${el.videourl} ')">
        <div class="name">${el.name}</div>
        <div class="who">${el.who}</div>
        </button>
        `;
    })
    .join("");
  result.innerHTML = shownames;
});

function play(videourl) {
  const run = document.querySelector(".section2");
  const showvideos = names
    .map((element) => {
      return `
  <div class="video">
  <p>${element.videourl}</p>
  <img src="${element.videourl}"/>
  </div>`;
    })
    .join("");
  run.innerhtml = showvideos;
}

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("http://localhost:50/more", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
