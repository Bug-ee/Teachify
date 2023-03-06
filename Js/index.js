window.onload = function () {
  const header = ` <header>
<nav id="navbar">
    <a class="logo" href="homePage.html">
        <img src="../images/homepage_img/logo3.png" alt="">
    </a>
    <ul class="Pages">
        <li><a href="/"> Нүүр хуудас </a></li>
        <li><a href="./pages/mentor.html">Менторууд</a></li>
        <li><a href="./pages/Class-Structure.html">Сургалтууд</a></li>
        <li><a href="./pages/members.html">Сурагчид</a></li>
        <li class="login1"><a href="/">Нэвтрэх</a></li>

    </ul>

</nav>
</header>`;
  const hd = document.querySelector(".header1");
  hd.innerHTML = header;
};
// hd.innerHTML = header
// hd.innerHTML = `<div>Baagi</div>`
