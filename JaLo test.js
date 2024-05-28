// index.js
function addCssLink(url) {
  const link = document.createElement('link')
  link.href = url
  link.type = 'text/css'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

window.addEventListener('load', () => {
  addCssLink('https://raw.githubusercontent.com/MonaLolisa/JaLoLeagueSkin/main/cleantheme.css')
})
