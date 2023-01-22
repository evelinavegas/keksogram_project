const countOffer = 25;

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
const messageArray = new Array(35).fill(null).map((e, index)=> getComent(index));

const dataArray = new Array(countOffer).fill(null).map((e, index)=>getOffer(index));

function getComent(index) {
    return {
        id: getRandomCount(1, 300),
        avatar:  getAvatar(),
        message: getRandomValue(message),
        name: getRandomValue(nameArray)
    }
}

function getOffer(index) {
    return {
        id: index + 1,
        url: `photos/${index + 1}.jpg`,
        description: getRandomValue(descriptions),
        likes: getRandomCount(15, 200),
        coment: getRandomValue(messageArray)
    }
}


function getRandomCount(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomValue(array) {
    const randomIndex = getRandomCount(0, array.length);
    const value = array[randomIndex];
    return value
}


function getAvatar() {
    const randomIndex = getRandomCount(1, 6);
    const avatar =  `img/avatar-${randomIndex}.svg`
    return avatar
}


