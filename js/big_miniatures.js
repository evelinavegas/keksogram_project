
import {clonPicture} from "./miniatures.js"
import {avatars} from "./date.js"


let containerBigPicture = document.querySelector(".big-picture ")


export function big (){

  let bigPictureUrl = containerBigPicture.querySelector(".big-picture__img>img")
  let likesCount = containerBigPicture.querySelector(".likes-count")
  let socialComments = containerBigPicture.querySelector(".social__comments")
  let socialCaption = containerBigPicture.querySelector(".social__caption")
  let socialCommentCount = containerBigPicture.querySelector(".social__comment-count")
  let commentsLoader = containerBigPicture.querySelector(".comments-loader")
  let body = document.querySelector("body")
  let pictureCancel = containerBigPicture.querySelector(".big-picture__cancel")
  let picture  = containerBigPicture.querySelectorAll(".picture")


  
  window.addEventListener("keydown", closeKeyPicture)
  

  body.addEventListener("click", renderBigPhoto)


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



  pictureCancel.addEventListener("click", closeClickPicture)

  function closeClickPicture(evt){
    evt.preventDefault()
    debugger
    pictureCancel.removeEventListener("click", renderBigPhoto)
    
      containerBigPicture.classList.add("hidden")
      socialCommentCount.classList.remove("hidden")
      commentsLoader.classList.remove("hiden")
      body.classList.remove("modal-open")
    

  }

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