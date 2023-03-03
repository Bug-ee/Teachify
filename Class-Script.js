const categoryname=[
    {name:"Бүх хичээл", num:310},
    {name:"Алгоритм", num:23},
    {name:"Html Css", num:35},
    {name:"JavaScript", num:63},
    {name:"React JS", num:46},
    {name:"My Sql", num:46},
    {name:"Express JS", num:38},
    {name:"Rest API", num:43},
]
const mySide=document.querySelector('.CategorySort')
document.addEventListener('DOMContentLoaded',function(){
    const reveal=categoryname.map((el,ind)=>{
        return`
        <div class="CategoryName">
            <p class="textsort1">${el.name}</p>
            <p class="textsort2">${el.num}</p>
        </div>
        `
    }).join("")
    mySide.innerHTML= reveal
})