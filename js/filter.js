const filterForm = document.querySelector(".img-filters__form")
const imgFiltersContainer = document.querySelector(".img-filters")
const filterDefault = document.querySelector(".filter-default")
const filterRandom = docment.querySelector(".filter-random")
const filterPopular = document.querySelector(".filter-discussed")


export function filtering(responce){
  imgFiltersContainer.classList.remove("hidden")
  let imgFiltered = responce
  filterForm.addEventListener("click", imgFilter)
 
  
  function imgFilter(evt){
    if(evt.target.id === "filter-default"){
      filterDefault.classList.add("img-filters__button--active")
      filterRandom.classList.remove("img-filters__button--active")
      filterPopular.classList.remove("img-filters__button--active")
    }
    if(evt.target.id === "filter-random"){
      filterDefault.classList.remove("img-filters__button--active")
      filterRandom.classList.add("img-filters__button--active")
      filterPopular.classList.remove("img-filters__button--active")
      imgFiltered = responce.slice(0, 10)
    }
    if(evt.target.id === "filter-discussed"){
      filterDefault.classList.remove("img-filters__button--active")
      filterRandom.classList.remove("img-filters__button--active")
      filterPopular.classList.add("img-filters__button--active")
    }
  }
}


