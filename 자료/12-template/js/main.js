const frame = document.querySelector('section');
const lists = frame.querySelectorAll('article');
const deg = 45;
for(let i=0; i < lists.length; i++){
    let pic = lists[i].querySelector('.pic');
    let play = lists[i].querySelector('.play');
    let pause = lists[i].querySelector('.pause');
    let load = lists[i].querySelector('.load');

    lists[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;

    play.addEventListener('click', (e)=>{
        let isActive = e.currentTarget.closest('article').classList.contains('on');
        if(isActive){
            e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    });
    
    pause.addEventListener('click', (e)=>{
        let isActive = e.currentTarget.closest('article').classList.contains('on');
        if(isActive){
            e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
            e.currentTarget.closest('article').querySelector('audio').pause();
        }
    });
        
    load.addEventListener('click', (e)=>{
        let isActive = e.currentTarget.closest('article').classList.contains('on');
        if(isActive){
            e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
            e.currentTarget.closest('article').querySelector('audio').load();
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    });

}

const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
let num =0;
prev.addEventListener("click",(e)=>{
    initMusic();
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    active == 0 ? active = lists.length-1 : active--;
    activation(active,lists);
});
next.addEventListener("click",(e)=>{
    initMusic();
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    active == lists.length-1 ? active = 0 : active++
    activation(active,lists);
});

let active = 0;
function activation(index, lists){
    for(let el of lists){
        el.classList.remove('on');
    }
    lists[index].classList.add("on");
}

const audio = frame.querySelectorAll('audio');

function initMusic(){
    for(let el of audio){
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove('on');
    }
}