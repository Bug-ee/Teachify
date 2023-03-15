const result = document.querySelector(".section1");
let arr;
document.addEventListener("DOMContentLoaded", function () {
  console.log("dsgdfgfdg");
  fetch("http://localhost:50/more")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      arr = json;
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
function play() {
  console.log(arr);
  const run = document.querySelector(".section2");
  const showvideos = arr
    .map((element) => {
      return `
  <div class="about">
  <div class=zrg_bga>
  <img src="${element.zurag}" width="100px" height="100px" class="zrg">
  </div>
  <div>phone:${element.phone}</div>
  <div>instagram:${element.ig}</div>
  <div>${element.quote}</div>
  </div>`;
    })
    .join("");
  run.innerHTML = showvideos;
}
