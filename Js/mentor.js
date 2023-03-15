const names = [
  {
    name: "Заяадэлгэр",
    who: "teacher",
    videourl:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
  },
  {
    name: "Тэмүүжин",
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
  console.log("dsgdfgfdg");
  fetch("http://localhost:50/more")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const shownames = json
        .map((el) => {
          return `
        <button class="card" onclick="play()">
        <div class="name">${el.name}</div>
        <div class="who">${el.email}</div>
        </button>
        `;
        })
        .join("");
      result.innerHTML = shownames;
    });
});
// .catch((error) => console.log("error", error));
console.log("sfsdfsdfsdfsd");

function play() {
  console.log(data.json);
  const run = document.querySelector(".section2");
  const showvideos = names
    .map((element) => {
      console.log("aaa");
      return `
  <div class="video">
  <p>${element.name}</p>
  <div>${element.who}</div>
  </div>`;
    })
    .join("");
  run.innerHTML = showvideos;
}

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
