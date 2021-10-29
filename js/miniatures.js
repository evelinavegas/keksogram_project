
// import {avatars} from "./date.js"

import { big } from "./big_miniatures.js";


export function clonPicture(incomingValue){
  
  const picture = document.getElementById("picture")
  .content
 
  const clonedPicture = picture.cloneNode(true);

  let pictureLikes= clonedPicture.querySelector(".picture__likes")
  let imgSrc = clonedPicture.querySelector(".picture__img")
  let picturesComments = clonedPicture.querySelector(".picture__comments")

  imgSrc.setAttribute("data-id", incomingValue.id)
  

  let someLikes = incomingValue.likes
  pictureLikes.innerText = someLikes

  let someComments = incomingValue.comments.length
  picturesComments.innerText = someComments

  let newUrl = incomingValue.url
  imgSrc.src = newUrl 

  console.log(incomingValue)

  const pictContainer = document.querySelector(".pictures")
  const fragment = document.createDocumentFragment();
 
  fragment.appendChild(clonedPicture)
  
  pictContainer.appendChild(fragment)
  
 return clonedPicture
}
 export function renderPicture(value){
  let i ;
  for(i = 0; i < 25; i++){
    let one = value[i]
    clonPicture(one)

  }
  big(value)
}









