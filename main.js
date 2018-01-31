!function () {
    let flag = true;
    let player = document.querySelector('.music');
    player.addEventListener('click',function () {
        if (flag) {
            document.querySelector('audio').pause();
            player.classList.remove('play');
            player.classList.add('pause');
            flag = false;
        } else {
            document.querySelector('audio').play();
            player.classList.remove('pause');
            player.classList.add('play');
            flag = true;
        }
    })
}();