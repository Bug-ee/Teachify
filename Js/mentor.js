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
  console.log("sss");
  console.log(videourl);
  const run = document.querySelector(".section2");
  // console.log("dsfsaaddsf");
  const showvideos = `
  <div class="video">
  <p>${videourl}</p>
  <img src="${videourl}"/>
  </div>`;

  run.innerhtml = showvideos;
  console.log(showvideos);
}

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

// fetch("http://localhost:3000/hello", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
