const amount = document.querySelector('#amount')
const form = document.querySelector('form')

amount.addEventListener('input', event => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

form.addEventListener('submit', event => {
  event.preventDefault()
  const currency = form.querySelector('#currency').value
  const description = document.querySelector('#description')
  const result = document.querySelector('#result')
  const footer = document.querySelector('footer')

  if(currency === 'USD'){
    const conversion = Number(amount.value) * 5.43
    description.innerHTML = `US$ 1 = R$ 5,43`
    result.innerHTML = `${String(conversion).replace('.', ',')} Reais` 
    footer.style.display = 'block';
  }
})