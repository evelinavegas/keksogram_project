

const uploadFile = document.getElementById("upload-file")
const blockOverlay = document.querySelector(".img-upload__overlay ")
const body = document.querySelector("body")
const form = document.querySelector(".img-upload__form")
const hashtagsText = document.querySelector(".text__hashtags")
const preview = document.querySelector(".img-upload__preview>img");
const formClose = document.getElementById("upload-cancel")
const textDescription = document.querySelector(".text__description")

hashtagsText.addEventListener("keyup", function(){
  
  this.value = this.value.replace(/[^#a-zA-Zа-яА-Я0-9]+ $/g, '');
})

textDescription.addEventListener("keyup", function(){
  
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я0-9]+ $/g, '');
})

 
hashtagsText.addEventListener("change", validForm)
 
function validForm(){
 
    let arrayString = hashtagsText.value.split(" ")
    if(arrayString.length > 5){
      hashtagsText.setCustomValidity("Не больше 5-ти хэш-тегов")
      hashtagsText.reportValidity()
    }
    for( let item of arrayString){
      if(item[0] !== "#"){   
        hashtagsText.setCustomValidity("Отсутствует знак #")
        hashtagsText.reportValidity()
      }
      if(item.length < 2){
        hashtagsText.setCustomValidity("Мин. длинна - 1 символ, не включая решетку")
        hashtagsText.reportValidity()
      }
      if (item.indexOf("#", 1) > 0) {
        hashtagsText.setCustomValidity("Хэш-теги нужно разделить пробелами")
        hashtagsText.reportValidity()
      }
      else if(item.length > 20){
        hashtagsText.setCustomValidity("Слишком большой, до 20 символов")  
        hashtagsText.reportValidity()
      }else {
        
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
  // если я вешаю обработчик на наш input, то вообще ничего не срабатывает, не событие focus,не blur....только при навешивании на windoq(это выход с помощью esc)!!!
  window.addEventListener("keydown", closeKey)
  
  hashtagsText.addEventListener("focus", function(even){
    // это тоже на работает
    if(evt.keyCode == 27 ){
      even.stopPropagation()
    }
  })
}

function closeClick(evt){
  evt.preventDefault()
  close()
  reset()
}



function closeKey(evt){
  // let focusedElem = document.querySelector(":focus");
  if(evt.keyCode == 27 ){
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

