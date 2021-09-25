
import {avatars} from "./date.js"


const containerBigPicture = document.querySelector(".big-picture ")

const bigPictureUrl = containerBigPicture.querySelector(".big-picture__img>img")
const likesCount = containerBigPicture.querySelector(".likes-count")
const socialComments = containerBigPicture.querySelector(".social__comments")
const socialCaption = containerBigPicture.querySelector(".social__caption")
const socialCommentCount = containerBigPicture.querySelector(".social__comment-count")
const commentsLoader = containerBigPicture.querySelector(".comments-loader")
const body = document.querySelector("body")
const pictureCancel = containerBigPicture.querySelector(".big-picture__cancel")
const picture  = document.querySelectorAll(".picture")

export function big (){

  window.addEventListener("keydown", closeKeyPicture)
  pictureCancel.addEventListener("click", closeClickPicture)

  pict()
 
}

function pict(){
  for(let i = 0; i < picture.length; i++){
    picture[i].addEventListener("click", renderBigPhoto)
  }
}


function renderBigPhoto(evt){
  containerBigPicture.classList.remove("hidden")
  
  evt.target.dataset.id
  let num = Number(evt.target.dataset.id)
  
  let findPicture = avatars.find(element => element.id === num);
  

  socialCommentCount.classList.add("hidden")
  commentsLoader.classList.add("hidden")
  body.classList.add("modal-open")

  console.log(findPicture)

  let urlBigPhoto = findPicture.url
  bigPictureUrl.src = urlBigPhoto

  likesCount.innerText = findPicture.likes
  

  let stringComments = findPicture.comments.map(el => {
       return `<li class="social__comment" >
      <img class="social__picture" src = "${el.avatar}" alt = "${el.name}" width="35" height="35">
      <p class="social__text"> ${el.message}</p>
    </li>`
  }).join('');
  socialComments.innerHTML = stringComments

  let textDesc = findPicture.description
  socialCaption.innerText = textDesc
}




function closeClickPicture(evt){
    evt.preventDefault()
    close()
}

function closeKeyPicture(evt){
 if(evt.keyCode == 27){
  close()
  }
}
  
function close(){
  containerBigPicture.classList.add("hidden")
  socialCommentCount.classList.remove("hidden")
  commentsLoader.classList.remove("hiden")
  body.classList.remove("modal-open")
}
big()
