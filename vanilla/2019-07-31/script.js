'use strict'

const virt = document.getElementById('virtual')

virt.innerHTML = `
<button onclick="console.log('pub')">Virt</button>
`

const p = document.querySelector('p')

p.addEventListener('click', function() {
  alert('paragraph!')
})
