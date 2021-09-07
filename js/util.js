"use strict";

// export function randomRandom(max){
//    return Math.floor(Math.random() * max)
// }

export function randomArray(array){
  let myArr = array[Math.floor(Math.random() * array.length)];
  return myArr;
}

export function randomMinMaxlusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export function randomMess(mess){
//   let messRandom = randomRandom(6);
//   let resultMess = mess.slice(messRandom);
//   return resultMess
// }

// export function randomName(namess){
//   let nameRandom = randomRandom(9);
//   let resultName = namess.slice(nameRandom);
//   return resultName
// }

export function randomId(idNumber){
  let randomNumb = randomMinMaxlusive(1, 25);
  let idRandom = idNumber.slice(randomNumb)
  return idRandom
}

export function randomUrl(urls){
  let randomUrl = randomMinMaxlusive(1, 25);
  let sliceUrl = urls.slice(randomUrl);
  let url = "photos/" + sliceUrl + ".jpg"
  return url
}

export function randomAvatar(){
  let numberAvatar = randomMinMaxlusive(1, 6)
  let avatarRandom = "img/avatar-" + numberAvatar + ".svg"
  return avatarRandom
}