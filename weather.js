let title = document.createElement("H1")
title.setAttribute("id","title");
title.setAttribute("class","text-center")
title.innerText="Weather of Rest Countries"    //title
document.body.appendChild(title);



var div1 = document.createElement("div")
div1.setAttribute("class","container")        //create container
document.body.appendChild(div1)

var row=document.createElement("div")
row.setAttribute("class","row")
div1.appendChild(row)


fetch("https://restcountries.com/v2/all")
.then((d)=>d.json())                           
.then((data)=>{
  console.log(data)
  console.log(data.length)
  for(let i=0;i<data.length;i++)
  {
    // console.log(data[i])
    // e=data[i].capital
    row.innerHTML += ` <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
     <div class="card border text-black h-100  m-3 p=2" style="width: 18em;">
     <div class="card-header text-center">${data[i].name}<div>
     <img src=${data[i].flags.png} class="card-img-top">
     <div><div class="card-body">
      <div class="card-text">Native Name:${data[i].nativeName}</div>
      Region:${data[i].region}</div>
      Population:${data[i].population}</div>
      <button btn btn-primary onclick='check("${data[i].capital}","result${i}")'">Click for weather</button>
      <div id="result${i}"></div>
      </div>
      </div>
     </div>`
  }
})
.catch((er)=>{
  console.log("er")

});


function check(x,i){
  console.log(i)
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=61239994214cf8044798ba8a623d8e3e")
  .then((b)=>b.json())
  .then((bdata)=>{
    var e = bdata.weather[0].description
    console.log(e)
    document.getElementById(i).innerHTML=e
  })


}