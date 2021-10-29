import {big} from "./big_miniatures.js"
import {open} from "./valid.js"
import { renderPicture} from "./miniatures.js"

const form = document.getElementById("upload-select-image")

const main = document.querySelector(".mainm")
const success = document.getElementById("success")
const uploadImage = document.getElementById("upload-file")
const err = document.getElementById("error")
const btnCloseReset = document.getElementById("upload-cancel")
const containerBidPhoto = document.querySelector(".img-upload__overlay")
const errorButton = document.querySelector('.error__button');



export function allFunction(){
window.addEventListener("load", funcGetDate)

async function getDate(){
  
  let responseGet = await fetch("https://23.javascript.pages.academy/kekstagram/data",
      {
        method: 'GET',
        credentials: 'same-origin',
      })    
  let dataGet = await responseGet.json()
  return dataGet; 
}

function funcGetDate(){
    getDate().then(function(resp){  
      console.log(resp)
     renderPicture(resp)
    })
    .catch(function(error){
       errorLoaderWindow()
       
    })  
}
    
 
     
  form.addEventListener("submit", senDate)

  async function senDate(evt){
    evt.preventDefault();
    
    const formData  = new FormData(form);
    let responce = await fetch("https://23.javascript.pages.academy/kekstagram", {
      method: 'POST',
      body:formData
    });

    function status(response){
      if(response = "ok"){
        form.reset()
       successMess()
      } 
      else {
       errorMess(" Ошибка отправки фотографий", "Закрыть")
      }
    }
    status(responce)
  }
  

  btnCloseReset.addEventListener("click", ()=>{
    form.reset()
  })

}

allFunction()

function successMess(){
  let elem = document.createElement("div");
  let clone = success.content.cloneNode(true)
  elem.append(clone); 
  main.append(elem)
       
  containerBidPhoto.classList.add("hidden")

  window.addEventListener("click", templateClick) 
  window.addEventListener("keydown", templateKey)

  function templateClick (event) {       
    if (event.target.className === "success__button"){
       elem.remove()
     } 
  }

  function templateKey (ev){      
    if (ev.keyCode == 27){
       elem.style.display = "none"
    }
  }
}


function errorMess( errorMessage, errorButton){
  let elem = document.createElement('div');
  let clone = error.content.cloneNode(true);

  let newError = clone.querySelector('.error__title');
  let newErrorButton = clone.querySelector('.error__button');
  newError.innerText = errorMessage;
  newErrorButton.innerText = errorButton;

  containerBidPhoto.classList.add("hidden")

  elem.append(clone);
  main.append(elem);
 

  window.addEventListener("click", templateClick) 
  window.addEventListener("keydown", templateKey)

  function templateClick (event) {
    if(event.target.className === "error__button"){
      elem.style.display = "none"
    }
  }

  function templateKey (ev){
    if (ev.keyCode == 27){
      elem.style.display = "none"
    }
  }
}

function errorLoaderWindow(){
  const contentError = document.createElement("div");
  const titleContentError = document.createElement("p");
  const buttonContentError = document.createElement("a");

  titleContentError.innerText = "Ошибка загрузки страници"
  buttonContentError.innerText = "Перезагрузить страницу"
  buttonContentError.setAttribute("href", "#")

  containerBidPhoto.classList.add("hidden")


  contentError.setAttribute("class", "errorLoad")
  titleContentError.setAttribute("class", "titleErrorLoad")
  buttonContentError.setAttribute("class", "linkErrorLoad")

  contentError.append(titleContentError)
  contentError.appendChild(buttonContentError)
  main.append(contentError)
 

  buttonContentError.addEventListener("click", ()=>{
    document.location.reload()
  } )

}