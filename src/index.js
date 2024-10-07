const submit = document.querySelector('.card__button-submit')
const card = document.querySelector('.card')
const radioButtonsContainer = document.querySelector('.card__radio-group')
const thanksCard = document.querySelector('.thank-you')
const rating = document.querySelector('.thank-you__rating--number')

let choose = {
  value: 0,
}

function handleChoose() {
  choose.value = document.querySelector('input[name="number"]:checked').value
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

radioButtonsContainer.addEventListener('change', handleChoose)
submit.addEventListener('click', renderScore)