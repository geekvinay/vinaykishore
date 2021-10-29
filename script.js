var navBtn = document.querySelector('.hamburger');
var navPane = document.querySelector('.navigation--page');
var navBar = document.querySelector('.navbar');
var imgAction = document.querySelectorAll('.img-action');
var counterImg = 0;
var addnInt = 1;


navBtn.addEventListener('click',function()
{
    navPane.classList.toggle('visible');
    navBar.classList.toggle('translucent-bg');
})

window.onload = function(){
    document.querySelector(".preloader").style.opacity = "0";
}

for(i=0;i<imgAction.length ;i++)
{
    imgAction[i].addEventListener('click',function()
    {
        counterImg += 1 ;
        console.log(counterImg);
        if(counterImg === 5 )
        {
            alert(`It hurts☹️. Please don't click me many times. Click the text below me`);
        }
        if(counterImg == 10 )
        {
            alert(`You've clicked me ${counterImg} times. Now I am angry 😤😤😤`);
        }
        if(counterImg == 15 )
        {
            alert(`It is ${counterImg}th time, Please stop 👊🤛🤜🙏`);
        }
        if(counterImg == 16 )
        {
            alert(`I'm hurt now. Acha Chalta hun...duao me yaad rakhna 😒🥺`);
        }
    })
}

navPane.addEventListener('click',function()
{
    navPane.classList.toggle('visible');
    navBar.classList.toggle('translucent-bg');
})