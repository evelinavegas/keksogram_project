import {avatars} from "./date.js"

let one = avatars[0]

export function clonPicture(incomingValue){
  const picture = document.getElementById("picture")
  .content

  const clonedPicture = picture.cloneNode(true);

  let pictureLikes= clonedPicture.querySelector(".picture__likes")
  let picturesComments = clonedPicture.querySelector(".picture__comments")
  let imgSrc = clonedPicture.querySelector(".picture__img")
  

  let someLikes = incomingValue["desc"].likes
  pictureLikes.innerText = someLikes

  let someComments = incomingValue["desc"].comments
  picturesComments.innerText = someComments

  let newUrl = incomingValue["desc"].url
  debugger
  `<img src="${newUrl}">`
 console.log(incomingValue)
 return clonedPicture
}

clonPicture(one)

const pictContainer = document.querySelector(".pictures")
const fragment = document.createDocumentFragment();
fragment.appendChild(clonPicture())
pictContainer.appendChild(fragment)

