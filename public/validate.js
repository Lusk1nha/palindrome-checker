const input = document.querySelector('.input--palindrome')
const resultContainer = document.querySelector('.result')

const Palindrome = (e) => {
  const el = ((e.target.value).toLowerCase()).split('').filter(Element => Element != " ")
  const result = el.join('').replace(/[^\w\s]/gi, '') == el.reverse().join('').replace(/[^\w\s]/gi, '')

  if ( result ) {
    resultContainer.innerHTML = 'É um Palíndromo'
    resultContainer.classList.add('palindrome')
    resultContainer.classList.remove('no-palindrome')

  } else {
    resultContainer.innerHTML = 'Não é um Palíndromo'
    resultContainer.classList.add('no-palindrome')
    resultContainer.classList.remove('palindrome')
  }
} 

input.addEventListener('input', Palindrome)

