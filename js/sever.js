import {big} from "./big_miniatures.js"
import {open} from "./valid.js"
import {clonPicture} from "./miniatures.js"

const form = document.getElementById("upload-select-image")

const main = document.querySelector(".mainm")
const success = document.getElementById("success")
const uploadImage = document.getElementById("upload-file")
const err = document.getElementById("error")
const btnCloseReset = document.getElementById("upload-cancel")
const containerBidPhoto = document.querySelector(".img-upload__overlay")
let levelEffectSlider = document.querySelector(".effect-level__slider")


export function allFunction(){
window.addEventListener("load", funcGetDate)
  function funcGetDate(){
    async function getDate(){
      debugger
      let responseGet = await fetch("https://23.javascript.pages.academy/kekstagram/data",
        {
          method: 'GET',
          credentials: 'same-origin',
        })
      let dataGet = await responseGet.json()
      return dataGet;
    }
    getDate().then(function(resp){  
      console.log(resp)
      
      big(resp)
 
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
        let elem = document.createElement("div");
        let clone = success.content.cloneNode(true)
        elem.append(clone); 
        main.append(elem)
       
       containerBidPhoto.classList.add("hidden")

        form.reset()
        uploadImage.value = ""

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
      else {
        let elem = document.createElement("div");
        let clone = err.content.cloneNode(true)
        elem.append(clone);  
        main.append(elem)

        form.reset()

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
    }
    status(responce)
  }
  

  btnCloseReset.addEventListener("click", ()=>{
    form.reset()
  })

}

allFunction()