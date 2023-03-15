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
const classvid = document.querySelector('.Classes')
const recommend = document.querySelector('.Recommend')
document.addEventListener('DOMContentLoaded', function () {
    const reveal = categoryname.map((el, ind) => {
        return`
        <div class="CategoryName" onclick="sort(el)">
            <p class="textsort1">${el.name}</p>
            <p class="textsort2">${el.num}</p>
        </div>
        `
    }).join("")
    mySide.innerHTML= reveal
    fetch('https://pe.tomujin.digital//fds')
        .then(res => res.json())
        .then(json => {
            data=json
            console.log(data.lesson)
            const vids = data.map((el, ind) => {
            return`
            <div class="Class" class="Type${el.Subject}">
                <div class="InnerCard">
                    <div class="ClassThumbnail"><video controls><source src=${el.Video} type="video/mp4"></video></div>
                    <div class="ClassNum">${el.WatchedNum} students</div>
                    <div class="ClassName">${el.Name}</div>
                    <div class="ClassMentor">${el.Creator}</div>
                </div>
            </div>`
            }).join("")
            classvid.innerHTML = vids
            const RecVid = data.map((el, ind) => {
            return`
            <div class="ClassRec">
                <div class="InnerCardRec">
                    <div class="ClassThumbnailRec"><video controls><source src=${el.Video} type="video/mp4"></video></div>
                    <div class="ClassNumRec">${el.WatchedNum} students</div>
                    <div class="ClassNameRec">${el.Name}</div>
                    <div class="ClassMentorRec">${el.Creator}</div>
                </div>
            </div>`
            }).join("")
            recommend.innerHTML = RecVid
            })
})
function sortALL(el) {
    
}
