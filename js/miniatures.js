
import {avatars} from "./date.js"


export function clonPicture(incomingValue){
  
  const picture = document.getElementById("picture")
  .content

  const clonedPicture = picture.cloneNode(true);

  let pictureLikes= clonedPicture.querySelector(".picture__likes")
  let imgSrc = clonedPicture.querySelector(".picture__img")
 

  imgSrc.setAttribute("data-id", incomingValue.id)
  

  let someLikes = incomingValue.likes
  pictureLikes.innerText = someLikes

  // let someComments = incomingValue.comments
  // picturesComments.innerText = someComments

  let newUrl = incomingValue.url
  imgSrc.src = newUrl 

  console.log(incomingValue)

  const pictContainer = document.querySelector(".pictures")
  const fragment = document.createDocumentFragment();
 
  fragment.appendChild(clonedPicture)
  
  pictContainer.appendChild(fragment)
  
 return clonedPicture
}

let i ;
for(i = 0; i < 25; i++){
  let one = avatars[i]
  clonPicture(one)
}








