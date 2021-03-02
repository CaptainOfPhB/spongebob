function querySelector(identifier) {
  return document.querySelector(identifier);
}

const player = querySelector('audio');
const button = querySelector('.music');
const paper = querySelector('#paper');
const style = querySelector('#style');

button.addEventListener('click', function handleClick() {
  if (player.paused) {
    player.play();
    button.classList.remove('pause');
    button.classList.add('play');
  } else {
    player.pause();
    button.classList.remove('play');
    button.classList.add('pause');
  }
});

let length = 1;
setTimeout(function writeCode() {
  paper.innerHTML = Prism.highlight(code.substring(0, length), Prism.languages.css);
  style.innerHTML = code.substring(0, length);
  paper.scrollTop = paper.scrollHeight;
  length += 1;
  if (length < window.code.length) {
    setTimeout(writeCode, 0);
  }
}, 0);
