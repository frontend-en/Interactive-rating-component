const buttons = document.querySelectorAll('.card__button--number')
const submit = document.querySelector('.card__button-submit')
const card = document.querySelector('.card')

const buttonsContainer = document.querySelector('.card__button-group')
const thanksCard = document.querySelector('.thank-you')
const rating = document.querySelector('.thank-you__rating--number')

let choose = 0
let activeButton = null;

function handleChoose(evt) {
  if (evt.target.classList.contains('card__button--number')) {
    evt.preventDefault()
    choose = evt.target.textContent
    console.log(choose);
    if (activeButton !== null) {
      activeButton.classList.remove('active')
    }
    activeButton = evt.target
    activeButton.classList.add('active')
  }
}

function renderScore(evt) {
  evt.preventDefault()
  if (choose === 0) {
    alert('Please choose a rating')
  } else {
    thanksCard.classList.remove('hidden')
    card.classList.add('hidden')
    rating.textContent = choose
  }
}

buttonsContainer.addEventListener('click', handleChoose)
submit.addEventListener('click', renderScore)