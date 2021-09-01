"use strict"
import {randomMinMax,  randomMess, randomName,  randomAvatar,randomId, randomUrl, randomRandom } from "./util.js"

let names = ["Петя", "Галя", "Валя", "Вася", "Нина", "Катя", "Димон", "Алекс", "Саня"]
let mess = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"]

let numb = [1, 2, 3, 4, 5, 6]

let idNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let comm = [{
  id: randomId(25, idNumb),
  avatar:  randomAvatar(6, numb),
  message:  randomMess(6, mess),
  name: randomName(9, names) ,
}]

let icon =new Array(25)
icon.fill()
console.log(icon)
let avatars = icon.map(el=>({
  desc : {
    id:randomId(25, idNumb) ,
    description: "Это аватар!",
    url: randomUrl(25, idNumb),
    likes: randomMinMax(15, 200) ,
    comments: randomRandom(10, comm),
  }
  
}))




