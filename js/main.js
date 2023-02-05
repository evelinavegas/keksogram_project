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


