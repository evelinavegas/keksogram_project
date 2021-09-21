"use strict"

import {randomAvatar, randomArray, randomMinMaxInclusive } from "./util.js"


let names = ["Петя", "Галя", "Валя", "Вася", "Нина", "Катя", "Димон", "Алекс", "Саня"]
let mess = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"]

let numb = [1, 2, 3, 4, 5, 6]

  
function numberOfComments (n){
  let comm = new Array(n).fill()
  let mapComm = comm.map((el, index) => ({
    id: index,
    avatar:  randomAvatar(6, numb),
    message:  randomArray( mess),
    name: randomArray( names) ,
  }))

 return mapComm 
}


let photo =new Array(25)
photo.fill()
console.log(photo)
export let avatars = photo.map((el, index) =>{
 let photoUrl = index + 1; 
  
 const desc = {
    id: index ,
    description: "Это аватар!",
    url: "../photos/" + photoUrl + ".jpg",
    likes: randomMinMaxInclusive(15, 200) ,
    comments: numberOfComments(randomMinMaxInclusive(2, 20))
  }
  return desc
})
 
console.log(avatars)


