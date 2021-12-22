var openings=[
    {
        pos:"Senior Frontend Developer",
        companyName:"Photoshop",
        type:'Full Time',
        date:new Date(2021,11,18,15,30),
        jobLocation:'Bangalore',
        keywords:["Frontend","Senior","HTML","CSS","Javascript"],
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4Sz5K-LWV-P8GHKvgYzpnwli0lhs1lx2pg&usqp=CAU"
    },
    {
        pos:"Fullstack Developer",
        companyName:"Norton",
        type:'Full Time',
        date:new Date(2021,11,16,18,30),
        jobLocation:'Remote',
        keywords:["Fullstack","Midweight","Python","React"],
        logo:"https://1000logos.net/wp-content/uploads/2021/12/norton-logo.jpg"
    },
    {
        pos:"Junior Frontend Developer",
        companyName:"Wissen Technology",
        type:'Full Time',
        date:new Date(2021,11,18,15,30),
        jobLocation:'Bangalore',
        keywords:["Junior","Frontend","HTML","CSS","Javascript","Angular"],
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0otPhOHdR6JXMpuBTWS2iZV9yA_XeCVNVt0U6MUR9zjq_WBgfz5GA0LlTb4xAK6jnh9U&usqp=CAU"
    },
    {
        pos:"Senior Frontend Developer",
        companyName:"IB Hubs",
        type:'Full Time',
        date:new Date(2021,11,19,17,30),
        jobLocation:'Hyderabad',
        keywords:["Senior","Frontend","HTML","CSS","Javascript","Angular","Sass"],
        logo:"https://d1ov0p6puz91hu.cloudfront.net/logos/iBhubs_logo.svg"
    },
    {
        pos:"Software Engineer",
        companyName:"Atlassian",
        type:'Full Time',
        date:new Date(2021,11,10,15,30),
        jobLocation:'Remote',
        keywords:["Fullstack","Midweight","Sass","Javascript","React","Ruby"],
        logo:"https://images.ctfassets.net/8j5aqoy0ts8s/4jySPaEh2mr01RvfkuQoKf/4fe9e1602b683afb023d7a475f19bda1/logo-guideline-2_2x_170912_043411.png"
    },
]
 var sortingbyDate=function(a,b){
    return new Date(b.date) - new Date(a.date);
  }
ago=(datePost)=>{
var now=new Date().getTime()
var distance = now-datePost.getTime();
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
if(days>7){
    var weeks=Math.floor(days/7)
    return `${weeks}w ago`
}
if(days>30){
    var mnths=Math.floor(days/30)
    return `${mnths} ago`
}
return `${days}d ago`
}
var filopenings=openings.sort(sortingbyDate)
function getJobs() {
    for(let i=0;i<filopenings.length;++i){
        var key=filopenings[i].keywords
    document.getElementById("postings").innerHTML+=`<div class="card">
    <div class="left">
        <div class="logo-div"><img class="logo-img" src="${filopenings[i].logo}"></div>
        <div class="details">
            <h4 class="comp-name" id="company-${i}">${filopenings[i].companyName}</h4>
            <h3 class="position">${filopenings[i].pos}</h3>
            <p class="misc">${ago(filopenings[i].date)} &nbsp; | &nbsp; ${filopenings[i].type} &nbsp; | &nbsp; ${filopenings[i].jobLocation}</p>
        </div>
    </div>
    <div class="right"  id="right-${i}"></div> 
</div>`
for(let j=0;j<key.length;j++){
    document.getElementById(`right-${i}`).innerHTML+=`<button >${key[j]}</button>`
}

var curent=new Date();
var curentDate=curent.getDate();
if((curentDate-filopenings[i].date.getDate())<5){
    document.getElementById(`company-${i}`).innerHTML+=`<label>NEW!</label>`
    }
    document.getElementById("postings").click()
}
}
var selectedKeywords=[]
document.getElementById("postings").addEventListener("click",function filter(){
    var buttons = document.getElementsByTagName('button');
  for (var i = 0; i <buttons.length; i++) {
    buttons[i].onclick = function () {
        selectedKeywords.push(this.innerText)
      filopenings=filopenings.sort(sortingbyDate).filter(x=>x.keywords.includes(this.innerText))
      console.log(filopenings)
      document.getElementById("postings").innerHTML=""
      getJobs()
      document.getElementById("filter-bg").style.display="block"
  document.getElementById("keywords").innerHTML+=`
  <div class="button">${this.innerText}</div><i class="fas fa-times" onclick="deselect(event)"></i>
`
}
}
}
)

function deselect(event){
    var index=selectedKeywords.indexOf(event.target.previousSibling.innerText)
    selectedKeywords.splice(index,1)
    event.target.previousSibling.style.display="none"
    event.target.style.display="none"
    console.log(event.target.parentElement)
    filopenings=openings
    document.getElementById("postings").innerHTML=""
    filopenings=openings.filter(x=>x.keywords.includes(selectedKeywords[0]))
    for(let i=0;i<selectedKeywords.length;i++){
        filopenings=filopenings.filter(x=>x.keywords.includes(selectedKeywords[i]))
    }
    getJobs()
    if(selectedKeywords.length==0){
       refresh()
    }
}
function refresh(){
    filopenings=openings
    document.getElementById("filter-bg").style.display=""
      getJobs()
}
document.getElementById("clear").addEventListener('click',()=>{
    filopenings=openings
    document.getElementById("filter-bg").style.display=""
    document.getElementById("postings").innerHTML=""
      getJobs()
})


