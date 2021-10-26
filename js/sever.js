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

  function funcGetDate(){
    async function getDate(){

      let responseGet = await fetch("https://23.javascript.pages.academy/kekstagram/data",
        {
          method: 'GET',
          credentials: 'same-origin',
        })
      let dataGet = await responseGet.json()
      return dataGet;
    }
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
        //  строка 45- 48 создание сообщения об успешной отправки
        let elem = document.createElement("div");
        let clone = success.content.cloneNode(true)
        elem.append(clone); 
        main.append(elem)
        debugger
        containerBidPhoto.style.visibility = "hidden"

        form.reset()
        uploadImage.value = ""
       
        // собітия при уже показаном сообщении об успехе ,чтобы его закрыть
        window.addEventListener("click", templateClick) 
        window.addEventListener("keydown", templateKey)

        function templateClick (event) {

            debugger
            if(levelEffectSlider.classList.contains("trueSlider")){
            
            }else{
              noUiSlider.create(levelEffectSlider,{
                range: {
                  "min": [0],
                  "max": [100]
                },
                start: [100],
                connect: true,
                direction: "ltr", 
                behaviour: 'tap-drag',
              })
            }
      
          if (event.target.className === "success__button"){
           
            elem.remove()
            window.removeEventListener("click", templateClick)
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