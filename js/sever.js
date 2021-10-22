import {big} from "./big_miniatures.js"
import {open} from "./valid.js"
import {clonPicture} from "./miniatures.js"

const submitForm = document.getElementById("upload-submit")
const form = document.getElementById("upload-select-image")
const miniatureContainer = document.querySelector(".pictures.container")
const main = document.querySelector(".mainm")
const success = document.getElementById("success")
const err = document.getElementById("error")
const btnCloseReset = document.getElementById("upload-cancel")

export function allFunction(){

  async function getDate(){

    let responseGet = await fetch("https://23.javascript.pages.academy/kekstagram/data",
      {
        method: 'GET',
        credentials: 'same-origin',
      })
    let dataGet = await responseGet.json()
    return dataGet;
  }
     
  form.addEventListener("submit", senDate)

  async function senDate(evt){
    evt.preventDefault();
    const formData  = new FormData(form);
    let responce = await fetch("https://23.javascript.pages.academy/keksobooking", {
      method: 'POST',
      body:formData
    });

    function status(response){
      if(response = "ok"){
        let elem = document.createElement("div");
        let clone = success.content.cloneNode(true)
        elem.append(clone); 
        main.append(elem)

        form.reset()

        window.addEventListener("click", templateClick) 
        window.addEventListener("keydown", templateKey)

        function templateClick (event) {
          if (event.target.className === "successs"){
            elem.style.display = "none"
            document.location.reload();
          }else if(event.target.className === "success__button"){
            elem.style.display = "none"
          }
        }

        function templateKey (ev){      
          if (ev.keyCode == 27){
            elem.style.display = "none"
            document.location.reload();
          }
        }
      } 
      else {
        let elem = document.createElement("div");
        let clone = err.content.cloneNode(true)
        elem.append(clone);  
        main.append(elem)

        window.addEventListener("click", templateClock) 
        window.addEventListener("keydown", templateKey)

        function templateClock (event) {
          if (event.target.className === "error"){
            elem.style.display = "none"
          } else if(event.target.className === "error__button"){
            elem.style.display = "none"
          }
        }

        function templateKey (ev){
          if (ev.keyCode == 27){
            elem.style.display = "none"
          }
        }

      }
    }
    status(responce)
  }
  

  btnCloseReset.addEventListener("click", ()=>{
    form.reset()
  })

}

allFunction()