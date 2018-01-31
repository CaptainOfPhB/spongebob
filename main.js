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
!function () {
    let container = document.querySelector('#code');
    let paper = document.querySelector('#paper');
    let style = document.querySelector('#style');
    let n = 1;
    let timer;
    timer = setTimeout(function WriteCode() {
        paper.innerHTML = code.substring(0, n);
        style.innerHTML = code.substring(0, n);
        paper.scrollTop = paper.scrollHeight;
        n += 1;
        if (n < code.length) {
            timer = setTimeout(WriteCode, 10);
        } else {
            setTimeout(container.classList.add('hide'),3000);
            if (confirm('要不要去我的 GitHub 看一看呀？')) {
                window.location.href = 'https://github.com/CaptainInPHW/spongebob';
            }
        }
    }, 10)
}();