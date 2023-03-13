const names = [
  { name: "Заяадэлгэр", who: "teacher" },
  { name: "Тэмүүжин", who: "teacher" },
  { name: "Намсрай", who: "teacher,mentor" },
  { name: "Тодсүрэн", who: "teacher,mentor" },
  { name: "Цэрэнтогтох", who: "teacher,mentor" },
];
const result = document.querySelector(".section1");
document.addEventListener("DOMContentLoaded", function () {
  const shownames = names
    .map((el) => {
      return `
        <button class="card" onclick="play()">
        <div class="name">${el.name}</div>
        <div class="who">${el.who}</div>
        </button>
        `;
    })
    .join("");
  result.innerHTML = shownames;
});
const introduction = [
  {
    videourl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DotEDU_domain_logo.svg/1200px-DotEDU_domain_logo.svg.png",
    intro: "nbnbnbnbnb",
  },
];

function play() {
  const run = document.querySelector(".section2");
  console.log("dsfsddsf");
  const showvideos = introduction.map((el) => {
    return `
  <div class="video">
  <img src="${el.videourl}"/>
  <div class="text">${el.intro}</div>
  </div>`;
  });
  run.innerhtml = showvideos;
}
