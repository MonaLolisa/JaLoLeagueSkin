// index.js
function addCssLink(url) {
  const link = document.createElement('link')
  link.href = url
  link.type = 'text/css'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

window.addEventListener('load', () => {
  addCssLink('https://raw.githack.com/MonaLolisa/JaLoLeagueSkin/main/cleantheme.css')
})

/* apply the acrylic effect */
window.Effect.apply('unified', { color: "#000000DA" });

/* Code to edit the lobby info panel, leftmost panel, top of friend list */
observer.subscribeToElementCreation('lol-parties-game-info-panel', (element) => {
    shadow_dom.lobby_panel_css(element)

})

/* Code to edit the lobby invite notification, leftmost panel, top of friend list */
observer.subscribeToElementCreation('lol-parties-game-invite', (element) => {
    shadow_dom.lobby_invite_css(element)

})
