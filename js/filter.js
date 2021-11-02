import { renderPicture } from "./miniatures.js"

const filterForm = document.querySelector(".img-filters__form")
const imgFiltersContainer = document.querySelector(".img-filters")


export function filtering(responce){
debugger
  imgFiltersContainer.classList.remove("img-filters--inactive")

  filterForm.addEventListener("click", (evt)=>{
    imgFilter(evt, responce)
  })
}

function imgFilter(evt, responce){

  const filterDefault = document.getElementById("filter-default")
  const filterPopular = document.getElementById("filter-discussed")
  const filterRandom = document.getElementById("filter-random")

  const imgItem = document.querySelectorAll(".picture")
  clearImg(imgItem)

  if(evt.target.id === "filter-default"){
    filterDefault.classList.add("img-filters__button--active")
    filterRandom.classList.remove("img-filters__button--active")
    filterPopular.classList.remove("img-filters__button--active")
    const arr = responce.sort(function(a, b){   
      return a.id - b.id
    }) 
    renderPicture(arr)  
  }
  if(evt.target.id === "filter-random"){
    filterDefault.classList.remove("img-filters__button--active")
    filterRandom.classList.add("img-filters__button--active")
    filterPopular.classList.remove("img-filters__button--active")
    const arr = shuffle(responce).slice(0, 10)
    debugger
    renderPicture(arr)
  }
  if(evt.target.id === "filter-discussed"){
    filterDefault.classList.remove("img-filters__button--active")
    filterRandom.classList.remove("img-filters__button--active")
    filterPopular.classList.add("img-filters__button--active")
    const arr = responce.sort(function(a, b){   
      return b.comments.length - a.comments.length
    }) 
    renderPicture(arr) 
  }
}

function clearImg(imgs){
  
  imgs.forEach(function (elem) {
       elem.remove();
  })
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}