
import {textHashtags, textDescription, checkHashteg, checkDescription, closByEsc} from './task4.js'


const countOffer = 25;
const countComment = 6;

const RENGE_LIKES = {
    min: 15,
    max: 200
};
const RENGE_COMMENT = {
    min: 0,
    max: 100
}
const descriptions = [
    'Фото, заряджене на позитив.',
    'Теплі спогади в холодну пору року.',
    'Впіймав дзен.',
    'Як довго ми робили цей кадр? Ваші пропозиції.'
];

const message = [
    'Все відмінно!',
    'Загалом все непогано. Але не всі.',
    'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
    'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
    'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
    'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
]

const nameArray = [
    'Йосип',
    'Матвій',
    'Адріан',
    'Юрій',
    'Юліан',
    'Уляна',
    'Валентина',
    'Тіна',
    'Устина',
    'Жанна'
];
// const messageArray = new Array(35).fill(null).map((e, index)=> getComment(index));

const dataArray = new Array(countOffer).fill(null).map((e, index)=>getOffer(index));



function getComment(min, max){
    let comments = [];
    for (let i = 1; i < getRandomCount(min, max); i++) {
        let comment = {
            id: i,
            avatar: getAvatar(countComment),
            message: getRandomValue(message),
            name: getRandomValue(nameArray)
        }
        comments.push(comment);
    }
    return comments;
}


function getOffer(index) {
    let commentaries = getComment(RENGE_COMMENT.min, RENGE_COMMENT.max);
    return {
        id: index + 1,
        url: `./photos/${index + 1}.jpg`,
        description: getRandomValue(descriptions),
        likes: getRandomCount(RENGE_LIKES.min, RENGE_LIKES.max),
        comment: commentaries
    }
}

function getRandomCount(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomValue(array) {
    const randomIndex = getRandomCount(1, array.length);
    const value = array[randomIndex];
    return value
}


function getAvatar(i) {
    const randomIndex = getRandomCount(1, i);
    const avatar =  `img/avatar-${randomIndex}.svg`
    return avatar
}

addPhoto(dataArray)

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const buttonCancel = document.querySelector('#picture-cancel');
const likesCount = document.querySelector('.likes-count');
const socialComments = document.querySelector('.social__comment');
let socialCommentsContainer = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const commentsCount = document.querySelector('.comment-count');
const body = document.querySelector('body');



let commentsArr = [];

const pictureLict = document.querySelectorAll('.picture');
pictureLict.forEach((data, index) => {
    data.setAttribute('data-id', index);
});



const commentsFragment = new DocumentFragment();


function createComents(data) {
    const socialCommentseNode = socialComments.cloneNode(true);

    socialCommentseNode.querySelector('.social__picture').src = data.avatar;
    socialCommentseNode.querySelector('.social__picture').alt = data.name;
    socialCommentseNode.querySelector('.social__text').innerText = data.message;

    commentsFragment.append(socialCommentseNode);


}
function createComentsBlock(array) {

    array.forEach((data) => createComents(data))
    socialCommentsContainer.innerHTML =('')

    socialCommentsContainer.append(commentsFragment)    
}



function closeBigPicture() {
    bigPicture.classList.add('hidden')
    body.classList.remove('modal-open');
    socialCommentsContainer.innerHTML = '';

}

pictureLict.forEach((e) => e.addEventListener('click', (evt) => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    const countBigPost = e.dataset.id;
    const arrayIndex = dataArray[countBigPost];
    bigPictureImg.src = arrayIndex.url;
    likesCount.innerText = arrayIndex.likes;
    socialCaption.innerText = arrayIndex.description;
    createLoaderComments(arrayIndex)
    
   
}))

buttonCancel.addEventListener('click',  () => {
    closeBigPicture()    
});

document.addEventListener('keydown',  (evt) => {
    if(evt.key === "Escape" ){
        closeBigPicture()
    }
})

// --- TASK_4 ---

textHashtags;
textDescription;

checkHashteg()
checkDescription()
closByEsc(textHashtags)
closByEsc(textDescription)

