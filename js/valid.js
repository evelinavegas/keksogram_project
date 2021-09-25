

const uploadFile = document.getElementById("upload-file")
const blockOverlay = document.querySelector(".img-upload__overlay ")
const body = document.querySelector("body")
const uploadCancel = document.getElementById("upload-cancel")
const form = document.querySelector(".img-upload__form")

uploadFile.addEventListener("change", open)

function open(evt){
  evt.preventDefault()

  blockOverlay.classList.remove("hidden")
  body.classList.add("modal-open")
}




function closeClick(evt){
  evt.preventDefault()
  close()
  reset()
}

function closeKey(evt){
  if(evt.keyCode == 27){
    close()
    reset()
  }
}

function close(){
  blockOverlay.classList.add("hidden")
  body.classList.remove("modal-open")
}

function reset(){
  form[0].reset()
}