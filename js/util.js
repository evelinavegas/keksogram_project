"use strict";


let mess = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"]
export function randomRandom(max){
   return Math.floor(Math.random() * max)
}


export function randomMinMax(min, max){
  return Math.random() * (max - min) + min;
}

export function randomMinMaxlusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomMess(max, mess){
  let messRandom = randomRandom(6);
  let resultMess = mess.slice(messRandom);
  return resultMess
}
export function randomName(max, namess){
  let nameRandom = randomRandom(9);
  let resultName = namess.slice(nameRandom);
  return resultName
}

export function randomId(max, idNumber){
  let randomNumb = randomMinMaxlusive(1, 25);
  let idRandom = idNumber.slice(randomNumb)
  return idRandom
}

export function randomUrl(max, urls){
  let randomUrl = randomMinMaxlusive(1, 25);
  let sliceUrl = urls.slice(randomUrl);
  let url = "photos/" + sliceUrl + ".jpg"
}

export function randomAvatar(min, numbers){
  let numberAvatar = randomMinMaxlusive(1, 6)
  let avatarRandom = "img/avatar-" + numberAvatar + ".svg"
  return avatarRandom
}