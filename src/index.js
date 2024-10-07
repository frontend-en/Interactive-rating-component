const submit = document.querySelector('.card__button-submit')
const card = document.querySelector('.card')
const radioButtonsContainer = document.querySelector('.card__radio-group')
const thanksCard = document.querySelector('.thank-you')
const rating = document.querySelector('.thank-you__rating--number')

let choose = {
  choose: 0,
}
let activeButton = null;

function handleChoose(evt) {
  if (evt.target.classList.contains('card__radio-new')) {
    evt.preventDefault()
    if (choose.value !== evt.target.textContent) {
      choose.value = evt.target.textContent
      console.log(choose);
    }

    if (activeButton !== null) {
      activeButton.classList.remove('active')
    }
    activeButton = evt.target
    activeButton.classList.add('active')
  }
}

function renderScore(evt) {
  evt.preventDefault()
  if (!choose.value) {
    alert('Please choose a rating')
  } else {
    thanksCard.classList.remove('hidden')
    card.classList.add('hidden')
    rating.textContent = choose.value
  }
}

radioButtonsContainer.addEventListener('click', handleChoose)
submit.addEventListener('click', renderScore)