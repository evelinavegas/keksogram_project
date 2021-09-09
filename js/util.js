"use strict";

// export function randomRandom(max){
//    return Math.floor(Math.random() * max)
// }

export function randomArray(array){
  let myArr = array[Math.floor(Math.random() * array.length)];
  return myArr;
}

export function randomMinMaxInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function randomAvatar(){
  let numberAvatar = randomMinMaxInclusive(1, 6)
  let avatarRandom = "img/avatar-" + numberAvatar + ".svg"
  return avatarRandom
}