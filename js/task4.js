const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
export const textHashtags = document.querySelector('.text__hashtags');
export const textDescription = document.querySelector('.text__description');
const closeFormBtn = document.querySelector('#upload-cancel');
const body = document.querySelector('body');


let error


export function checkHashteg() {
    textHashtags.addEventListener('input', () => {
        const hashtegValue = textHashtags.value;
        const hashtags = hashtegValue.split(' ');
        const MAX_TAG = 5;
        if(hashtags.length > 0){
            if(hashtags.length > MAX_TAG){
                error = 'Не менше 2 хештегів, та не більше 5';
                textHashtags.setCustomValidity(error)
            } else {
                textHashtags.setCustomValidity('');
            }
            syntaxTag(hashtags);
            const debugTag = [...new Set(hashtags)];

            noRepitTag(hashtags ,debugTag)
        }        
    })
}
export function checkDescription() {
    textDescription.addEventListener('input', () => {
        const descriptionValue = textDescription.value;
        const MAX_DESCR_LANGHT =140;
        console.log(descriptionValue.length)

        if(descriptionValue >= MAX_DESCR_LANGHT){
            textDescription.setCustomValidity('Максимальна кількість символів 140');
            textDescription.reportValidity()
        }
    })
}

function syntaxTag(arr){
    arr.forEach((item) => {  
        const RENGE_LENGHT_TAG ={min: 1, max: 20};
        const re = /^[#][A-Za-z0-9]*$/;

        if (item.charAt(0) !== '#'){
            error = 'Хештег повинен починатися з #'
            textHashtags.setCustomValidity(error);
            textHashtags.reportValidity();
        } else if (item.length >= RENGE_LENGHT_TAG.max){
            error = 'Максимальна довжина хештега 20'
            textHashtags.setCustomValidity(error);
            textHashtags.reportValidity();
        } else if(re.test(item) == false) {
            error = 'Використовуйте тільки букви та символи'
            textHashtags.setCustomValidity(error);
            textHashtags.reportValidity();
        } else if(item.length == RENGE_LENGHT_TAG.min){
            error = 'Не може містити тільки одні #'
            textHashtags.setCustomValidity(error);
            textHashtags.reportValidity();

        } else {
            textHashtags.setCustomValidity('');
        }
    })
}
function noRepitTag(arr1, arr2){
    const hashtagsLowerCase = arr1.map(i => i.toLowerCase());
    const debugTagLowerCase = arr2.map(i => i.toLowerCase());

    if (hashtagsLowerCase.length > debugTagLowerCase.length) {
        error = 'Теги не можуть повторюватися'
        textHashtags.setCustomValidity(error);

    } else {
        error = ''
    }
}

function closeForm() {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
}

closeFormBtn.addEventListener('click', () => closeForm())
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
        closeForm()
    }
})
function notCloseFormEsc(e) {
    if(e.key === "Escape"){
        textHashtags.focus()
        e.stopPropagation();
    }
}
export function closByEsc(element){
    element.addEventListener('keydown', (e) => notCloseFormEsc(e))
}

uploadFile.addEventListener('click', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
})
