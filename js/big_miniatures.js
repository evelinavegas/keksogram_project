
import {clonPicture} from "./miniatures.js"
import {avatars} from "./date.js"


let containerBigPicture = document.querySelector(".big-picture ")

export function big (){

  let bigPictureUrl = containerBigPicture.querySelector(".big-picture__img>img")
  let likesCount = containerBigPicture.querySelector(".likes-count")
  let commentsCount = containerBigPicture.querySelector(".comments-count")
  let socialComments = containerBigPicture.querySelector(".social__comments")
  let socialCaption = containerBigPicture.querySelector(".social__caption")
  let socialCommentCount = containerBigPicture.querySelector(".social__comment-count")
  let commentsLoader = containerBigPicture.querySelector(".comments-loader")
  let body = document.querySelector("body")
  let pictureCancel = containerBigPicture.querySelector(".big-picture__cancel  cancel")
  let socialText =  containerBigPicture.querySelector(".social__text")


  
  window.addEventListener("keydown", closeKeyPicture)
  

  window.addEventListener("click", renderBigPhoto)


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

    let textComments= findPicture.comments
    let stringComments = textComments.map(el => {
      // по сути нам нужно в li засовывать img, в нем присвоить src = findPicture.comments.avatar , в alt = findPicture.comments.name , width="35" height="35"..... а в P(class = social__text) = findPicture.comments.message

      // `<img src = "findPicture.comments.avatar" alt = "findPicture.comments.name" width="35" height="35">`

      // socialText.innerText = findPicture.comments.message
      
    //   return `<img src = ${findPicture.comments.avatar} 
    //   >`
    // }).join('');
    commentsCount.innerText = stringComments

    let textDesc = findPicture.description
    socialCaption.innerText = textDesc
  }






  // pictureCancel.addEventListener("click", closeClickPicture)

  // function closeClickPicture(evt){
  
  //   if(evt.target.className == "big-picture__cancel"){
      
  //     containerBigPicture.style.display = "none"
  //     containerBigPicture.classList.add("hidden")
  //     socialCommentCount.classList.remove("hidden")
  //     commentsLoader.classList.remove("hidden")
  //     body.classList.remove("modal-open")
  //   }

  // }

  function closeKeyPicture(evt){
   
    if(evt.keyCode == 27){
      containerBigPicture.classList.add("hidden")
      socialCommentCount.classList.remove("hidden")
      commentsLoader.classList.remove("hiden")
      body.classList.remove("modal-open")
    }
  }
  

}
big()