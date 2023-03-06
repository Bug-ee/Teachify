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
        <button class="card" onclick=play>
        <div class="name">${el.name}</div>
        <div class="who">${el.who}</div>
        </button>
        `;
    })
    .join("");
  result.innerHTML = shownames;
});
