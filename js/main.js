import {addPhoto} from './task2.js'

const countOffer = 25;
const countComment = 6;


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
const messageArray = new Array(35).fill(null).map((e, index)=> getComment(index));

const dataArray = new Array(countOffer).fill(null).map((e, index)=>getOffer(index));



function getComment(){
    let comments = [];
    for (let i = 0; i < getRandomCount(2, countComment); i++) {
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
getComment()

function getOffer(index) {
    let commentaries = getComment(getRandomCount(1, countOffer));
    return {
        id: index + 1,
        url: `./photos/${index + 1}.jpg`,
        description: getRandomValue(descriptions),
        likes: getRandomCount(15, 200),
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
const commentsCount = document.querySelector('.comments-count');
const body = document.querySelector('body')


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

function getIndexArray(index){
    commentsArr = dataArray[index].comment
    createComentsBlock(commentsArr) 
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

    bigPictureImg.src = dataArray[countBigPost].url;
    likesCount.innerText = dataArray[countBigPost].likes;
    socialCaption.innerText = dataArray[countBigPost].description;
    commentsCount.innerText = dataArray[countBigPost].comment.length;
    getIndexArray(countBigPost);
   
}))

buttonCancel.addEventListener('click',  (evt) => {
    closeBigPicture()    
});




