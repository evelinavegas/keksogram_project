

const uploadFile = document.getElementById("upload-file")
const blockOverlay = document.querySelector(".img-upload__overlay ")
const body = document.querySelector("body")
const form = document.querySelector(".img-upload__form")
const hashtagsText = document.querySelector(".text__hashtags")
const preview = document.querySelector(".img-upload__preview>img");
const formClose = document.getElementById("upload-cancel")
const textDescription = document.querySelector(".text__description")


// changing scale
const smallerScale = document.querySelector(".scale__control--smaller")
const biggerScale = document.querySelector(".scale__control--bigger")
const valueScale = document.querySelector(".scale__control--value")
let maxValue = 100;

// effect 
// Intensity of effect
let effectValue = document.querySelector(".effect-level__value")
let levelEffectSlider = document.querySelector(".effect-level__slider")
let radioEffects = document.querySelectorAll(".effects__radio")



hashtagsText.addEventListener("keyup", function(){
  this.value = this.value.replace(/[^#a-zA-Zа-яА-Я0-9]+ $/g, '');
})

textDescription.addEventListener("keyup", function(){
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я0-9]+ $/g, '');
})

 
hashtagsText.addEventListener("change", validForm)
 
function validForm(){
 
    let arrayString = hashtagsText.value.split(" ")
    if(arrayString.length > 5){
      hashtagsText.setCustomValidity("Не больше 5-ти хэш-тегов")
      hashtagsText.reportValidity()
    }
    for( let item of arrayString){
      if(item[0] !== "#"){   
        hashtagsText.setCustomValidity("Отсутствует знак #")
        hashtagsText.reportValidity()
      }
      if(item.length < 2){
        hashtagsText.setCustomValidity("Мин. длинна - 1 символ, не включая решетку")
        hashtagsText.reportValidity()
      }
      if (item.indexOf("#", 1) > 0) {
        hashtagsText.setCustomValidity("Хэш-теги нужно разделить пробелами")
        hashtagsText.reportValidity()
      }
      else if(item.length > 20){
        hashtagsText.setCustomValidity("Слишком большой, до 20 символов")  
        hashtagsText.reportValidity()
      }else {
        
      }
    } 
}




uploadFile.addEventListener("change", open)

export function open(evt){
  debugger
  let sellectedFile = evt.target.files[0];
  let reader= new FileReader();
  reader.onload =function(evt){  
    preview.src = evt.target.result
  }
  reader.readAsDataURL(sellectedFile)

  blockOverlay.classList.remove("hidden")
  body.classList.add("modal-open")

  formClose.addEventListener("click", closeClick)

  window.addEventListener("keydown", closeKey)
  
  hashtagsText.addEventListener("blur", () =>{
    window.addEventListener("keydown", closeKey)
  }, 
    true);

  hashtagsText.addEventListener("focus", ()=>{
      window.removeEventListener("keydown", closeKey)
  }, true)

  textDescription.addEventListener("blur", ()=>{
    window.addEventListener("keydown", closeKey)
  },
  true)

  textDescription.addEventListener("focus", ()=>{
    window.removeEventListener("keydown", closeKey)
  },
  true)

    //SCALE 
    // уменшение
    smallerScale.addEventListener("click", smaller)
    
  
    // увеличение
    biggerScale.addEventListener("click", bigger)
    
    // отображение в css
    function cssScale () {
      preview.style.transform = "scale" + "(" + valueScale.value + ")";
    };
  
     // отображение масштаба 
     function scaleDisplay(){
      valueScale.value = String(maxValue) + "%";
    }

    // EFFECTS
   const initSlider = document.querySelector(".trueSlider")
   if(!initSlider){
       noUiSlider.create(levelEffectSlider,{
          range: {
            "min": [0],
            "max": [100]
          },
          start: [100],
          connect: true,
          direction: "ltr", 
          behaviour: 'tap-drag',
        })
    levelEffectSlider.classList.add("trueSlider")
   }

    radioEffects.forEach(function(el){
      el.addEventListener("click", function(evt){
        filterCheck(evt.target.value) 
      })
    })

    effects()
    filterCheck()
}

function closeClick(evt){
  evt.preventDefault()
  close()
  reset()
}


function closeKey(evt){
  if(evt.keyCode == 27 ){
    close()
    reset()
  }
}

function close(){
  blockOverlay.classList.add("hidden")
  body.classList.remove("modal-open")
}

function reset(){
  form.reset()
}

function smaller(){   
  if(valueScale.value != "25%"){
    maxValue -= 25
    scaleDisplay()
    cssScale ()
  }
}
function bigger(){
  if(valueScale.value != "100%"){
    maxValue += 25
    scaleDisplay()
    cssScale ()
  }
}

function filterCheck(effect){
     
  if(effect === "none"){
    levelEffectSlider.style.display = "none"
  } else {
    levelEffectSlider.style.display = "block"
  }
  levelEffectSlider.noUiSlider.reset()
  preview.value = effect

  levelEffectSlider.noUiSlider.on("update", updateRange)

  function updateRange(value){
    let updateValue = effects(value, effect)
    preview.style.filter = updateValue
  }
}
    
function effects(value, effect){
   let max, formula, filterValue
   switch(effect){

    case "chrome": 
      max = 1
      formula = ((max * value) / 100).toFixed(2)
      filterValue = `grayscale(${formula})`
      break;
    case "sepia":
      max = 1
      formula = ((max * value) / 100).toFixed(2)
      filterValue = `sepia(${formula})`;
      break;
    case "marvin":
      formula = (value)
      filterValue = `invert(${formula})`;    
      break;
    case "phobos":
      max = 3
      formula = ((max * value) / 100).toFixed(1)
      filterValue = `blur(${formula}px)`;
      break;
    case "heat":
      max = 3
      formula = (((max * value) / 50) + 1).toFixed(1)
      filterValue = `brightness(${formula})`;
      break;
    case "none":
      formula = null
      filterValue = "none"
    }

  effectValue.value = formula
  return filterValue
}

