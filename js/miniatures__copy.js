
import {avatars} from "./date.js"

//  let one = avatars[0]



  const pictContainer = document.querySelector(".pictures")
  const fragment = document.createDocumentFragment();

  function clonPicture(incomingValue){
  
    const picture = document.getElementById("picture")
    .content
  
    const clonedPicture = picture.cloneNode(true);
  
    let pictureLikes= clonedPicture.querySelector(".picture__likes")
    let picturesComments = clonedPicture.querySelector(".picture__comments")
    let imgSrc = clonedPicture.querySelector(".picture__img")
    
  
    let someLikes = incomingValue.likes
    pictureLikes.innerText = someLikes
  
    let someComments = incomingValue.comments.length
    picturesComments.innerText = someComments
  
    let newUrl = incomingValue.url
    imgSrc.src = newUrl 
    debugger
   console.log(incomingValue)
   

   for(let i = 0; i < clonedPicture.length ; i++){
     fragment.appendChild(clonedPicture[i])
   }
    pictContainer.appendChild(fragment)
    return clonedPicture
  }  

