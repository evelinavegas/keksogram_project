

const uploadFile = document.getElementById("upload-file")
const blockOverlay = document.querySelector(".img-upload__overlay ")
const body = document.querySelector("body")
const uploadCancel = document.getElementById("upload-cancel")
const form = document.querySelector(".img-upload__form")
const hashtagsText = document.querySelector(".text__hashtags")
const preview = document.querySelector(".img-upload__preview>img");
const formClose = document.getElementById("upload-cancel")
const imgTextContainer = document.querySelector(".img-upload__text")

hashtagsText.addEventListener("keyup", function(){
  // аааа, с регуляркой не могу совладать
  this.value = this.value.replace(/^#([a-zA-Za-яА-Я0-9]){1,20}/g, '');
})
 
hashtagsText.addEventListener("change", validForm)

function validForm(evt){
  let array  = hashtagsText.value.split(" ");
    for(item of array){
      if(item[0] !== "#"){
        hashtagsText.classList.add("invalid")
      }
      if(item.lenght == 1){
        const span = document.createElement("span")
        const text = "Мин. длинна - 1 символ, не включая решетку";
        span.innerText = text
        imgTextContainer.append(span)
      }
      if(item.lenght > 20){
        const span = document.createElement("span")
        const text = "Слишком большой, до 20 символов, без решетки";
        span.innerText = text
        imgTextContainer.append(span)
      }
    }
}


uploadFile.addEventListener("change", open)

export function open(evt){
 
  debugger
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

