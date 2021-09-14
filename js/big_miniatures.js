
import {clonPicture} from "./miniatures.js"



let containerBigPicture = document.querySelector(".big-picture ")

function big (incPhoto){

  let bigPictureUrl = containerBigPicture.querySelector(".big-picture__img")
  let likesCount = containerBigPicture.querySelector(".likes-count")
  let commentsCount = containerBigPicture.querySelector(".comments-count")
  let socialComments = containerBigPicture.querySelector(".social__comments")
  let socialCaption = containerBigPicture.querySelector(".social__caption")
  let socialCommentCount = containerBigPicture.querySelector(".social__comment-count")
  let commentsLoader = containerBigPicture.querySelector(".comments-loader")
  let body = document.getElementsByTagName("body")
  let pictureCancel = containerBigPicture.querySelector(".big-picture__cancel")


  containerBigPicture.addEventListener("click", showPicture)
  window.addEventListener("keydown", closeKeyPicture)
  pictureCancel.addEventListener("click", closeClickPicture)

  function showPicture(evt){
    evt.preventDefault();
    let targetImg = evt.target

    containerBigPicture.classList.remove("hidden")
    socialCommentCount.classList.add("hidden")
    commentsLoader.classList.add("hiden")
    body.classList.add("modal-open")

    let urlBigPhoto = targetImg.url
    bigPictureUrl.src = urlBigPhoto

    likesCount.innerText = targetImg.likes

    let textComments= targetImg.comments.length
    commentsCount.innerText = textComments

    let textDesc = targetImg.desc.toString()
    socialCaption.innerText = textDesc

  }

  function closeKeyPicture(evt){
    evt.preventDefault();
    if(evt.keyCode == 27){
      containerBigPicture.classList.add("hidden")
      socialCommentCount.classList.remove("hidden")
      commentsLoader.classList.remove("hiden")
      body.classList.remove("modal-open")
    }
  }
  function closeClickPicture(evt){
    evt.preventDefault();
    if(evt.target.className == "big-picture__cancel"){
      containerBigPicture.classList.add("hidden")
      socialCommentCount.classList.remove("hidden")
      commentsLoader.classList.remove("hiden")
      body.classList.remove("modal-open")
    }

  }

}