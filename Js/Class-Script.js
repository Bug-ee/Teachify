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
const samplevid = [
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 420, Name: 'How to eat chocolate in 5 easy steps', Mentor: 'Mr-Potato' },
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 69, Name:'Noob eats food for 1st tume', Mentor:'Mrs-Potato'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 0, Name:'Preparing for IELTS. What comes and how to prepare', Mentor:'Generick Pro'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 1230, Name:'mr horsea eat seaweed', Mentor:'Skil is'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 616, Name:'Top 5 moments in history', Mentor:'UnderSimply'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 16, Name:'Sussiest moment in kindergarder', Mentor:'Top -1st'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 1028, Name:'Why this new movie that i know nothing about suck', Mentor:'Moovie unenjoyer'},
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 102, Name: 'Sheesh', Mentor: 'Seesh.corp' },
    { Video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", Student: 1, Name:'Crushes what are they and how to handle deez nuts', Mentor:'Love Guru Money Bags'},
]
const classvid = document.querySelector('.Classes')
document.addEventListener('DOMContentLoaded', function () {
    const vids = samplevid.map((el, ind) => {
        return`
        <div class="Class">
            <div class="InnerCard">
              <div class="ClassThumbnail"><video controls><source src=${el.Video} type="video/mp4"></video></div>
              <div class="ClassNum">${el.Student} students</div>
              <div class="ClassName">${el.Name}</div>
              <div class="ClassMentor">${el.Mentor}</div>
            </div>
          </div>`
    }).join("")
    classvid.innerHTML=vids
})