

const uploadFile = document.getElementById("upload-file")
const blockOverlay = document.querySelector(".img-upload__overlay ")
const body = document.querySelector("body")
const form = document.querySelector(".img-upload__form")
const hashtagsText = document.querySelector(".text__hashtags")
const preview = document.querySelector(".img-upload__preview>img");
const formClose = document.getElementById("upload-cancel")
const imgTextContainer = document.querySelector(".img-upload__text")

hashtagsText.addEventListener("keyup", function(){
  
  this.value = this.value.replace(/[^#a-zA-Zа-яА-Я0-9]+ $/g, '');
})
 
hashtagsText.addEventListener("change", validForm)
 
const p = document.createElement("p")
imgTextContainer.append(p) 


function validForm(){
  debugger
 
    let arrayString = hashtagsText.value.split(" ")
    if(arrayString.length > 5){
      hashtagsText.classList.add("invalid") 
      const text = "Не больше 5-ти хэш-тегов";
      p.innerText = text 
    }
    for( let item of arrayString){
      if(item[0] !== "#"){     
        hashtagsText.classList.add("invalid")    
        const text = "Отсутствует знак #";
        p.innerText = text     
      }
      if(item.length < 2){
        hashtagsText.classList.add("invalid")
        const text = "Мин. длинна - 1 символ, не включая решетку";
        p.innerText = text
        
      }
      if (item.indexOf("#", 1) > 0) {
        hashtagsText.classList.add("invalid")
        const text = "Хэш-теги нужно разделить пробелами";
        p.innerText = text       
      
      }
      else if(item.length > 20){
        hashtagsText.classList.add("invalid")
        const text = "Слишком большой, до 20 символов";
        p.innerText = text
        
      }else {
        hashtagsText.classList.add("valid")
        hashtagsText.classList.remove("invalid")
      }
    } 
}


uploadFile.addEventListener("change", open)

export function open(evt){

  let sellectedFile = evt.target.files[0];
  let reader= new FileReader();
  reader.onload =function(evt){
    preview.src = evt.target.result
  }
  reader.readAsDataURL(sellectedFile)

  blockOverlay.classList.remove("hidden")
  body.classList.add("modal-open")

  formClose.addEventListener("click", closeClick)
  window.addEventListener("keydown", closeKey)
}

function closeClick(evt){
  evt.preventDefault()
  close()
  reset()
}

function closeKey(evt){
  let focusedElem = document.querySelector(":focus");
  if(evt.keyCode == 27  /*&& focusedElem ==  к чему равно/не равно, чтоб отменить обработчик Esc при фокусе ????*/){
    close()
    reset()
  }
}

function close(){
  blockOverlay.classList.add("hidden")
  body.classList.remove("modal-open")
}

function reset(){
  form.reset()
}

