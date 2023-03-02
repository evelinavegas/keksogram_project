const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview ');

let scaleControlValue = scaleControl.value.replace(/(\%)/ , '');
const RANGE_SCALE = {
    min: 25,
    max: 100,
    step: 25,
}
export function getScale(){
    
    scaleControlSmaller.addEventListener('click', () => {
        if(scaleControlValue > RANGE_SCALE.min){
            scaleControlValue = scaleControlValue - RANGE_SCALE.step;
            imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
            scaleControl.value = `${scaleControlValue}%`
        }
    })

    scaleControlBigger.addEventListener('click', () => {
        if(scaleControlValue < RANGE_SCALE.max){
            scaleControlValue = scaleControlValue + RANGE_SCALE.step;
            imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
            scaleControl.value = `${scaleControlValue}%`
        }
    })
}

const effectLevelSlider = document.querySelector('.effect-level__slider');
const imgUploadEffects = document.querySelector('.img-upload__effects');
const effectLevel  = document.querySelector('.effect-level__value');

function createSlider(min, max, step, fixed){

    noUiSlider.create(effectLevelSlider, {
        start: max,
        tooltips: true,
        range: {
            'min': min,
            'max': max
        },
        format: {
            to: function (value) {
                return value.toFixed(fixed) ;
            },
            from: function (value) {
                return value.replace('', '');
            },
        },
        step: step
    });
}
const filters = {
    chrome: {
        name: 'grayscale',
        step: 0.1,
        min: 0,
        max: 1,
        fixed: 1,
        unit: ''
    },
    sepia: {
        name: 'sepia',
        step: 0.1,
        min: 0,
        max: 1,
        fixed: 1,
        unit: ''
    },
    invert: {
        name: 'invert',
        step: 1,
        min: 0,
        max: 100,
        fixed: 0,
        unit: '%'
    },
    blur: {
        name: 'blur',
        step: 0.1,
        min: 0,
        max: 3,
        fixed: 1,
        unit: 'px'
    },
    brightness: {
        name: 'brightness',
        step: 0.1,
        min: 1,
        max: 3,
        fixed: 1,
        unit: ''
    },
}

export function choiseEffect() {
    imgUploadEffects.addEventListener('input', (e) => {
        let effect = e.target.value;
        switch (effect) {
            case "chrome":                
                createEffect(filters.chrome.name, filters.chrome.min, filters.chrome.max, filters.chrome.step, filters.chrome.unit, filters.chrome.fixed)
                break;
            case "sepia":
                createEffect(filters.sepia.name,  filters.sepia.min, filters.sepia.max, filters.sepia.step, filters.sepia.unit, filters.sepia.fixed)
                break;
            case "marvin":
                createEffect(filters.invert.name, filters.invert.min, filters.invert.max, filters.invert.step, filters.invert.unit, filters.invert.fixed)
                break;
            case "phobos":
                createEffect(filters.blur.name, filters.blur.min, filters.blur.max, filters.blur.step, filters.blur.unit, filters.blur.fixed)
               
                break;
            case "heat":
                createEffect(filters.brightness.name, filters.brightness.min, filters.brightness.max, filters.brightness.step, filters.brightness.unit, filters.brightness.fixed)
                break;
            case "none":
                effectLevelSlider.noUiSlider.destroy()

                img.removeAttribute("style");
                break;

        }       
    })
}
const img = document.querySelector('.img-upload__preview img');

function createEffect(name, min, max, step, unit, fixed){
    if(effectLevelSlider.noUiSlider){
        effectLevelSlider.noUiSlider.destroy()

    }
    createSlider(min, max, step, fixed)
    img.removeAttribute("style");

        effectLevelSlider.noUiSlider.on('update', function () {
            
            const sliderValue = effectLevelSlider.noUiSlider.get();
            img.classList.add(`effects__preview--${name}`)
            const filterValue = `${name}(${sliderValue}${unit})`
            img.style.filter = filterValue;
            effectLevel.setAttribute('value', `filter: ${filterValue}`);
        })

}
export function removeEffect(){
    img.removeAttribute("style");
    imgUploadEffects.addEventListener('input', (e) => {
        e.target.value = imgUploadEffectsNone
    })
}
