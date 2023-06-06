function copyThis (event) {
    var copyParent = event.target.parentNode;
    var copyElement =  copyParent.querySelector('a').textContent.trim().replace(/ /g,'');
    navigator.clipboard.writeText(copyElement);
    var spanCopied = copyParent.querySelector('.copy-span');
    spanCopied.style.opacity = "100";
    spanCopied.style.bottom = "40px";
    setTimeout(()=>{
        spanCopied.style.opacity = "0";
        spanCopied.style.bottom = "0"; 
    },2000);
}

var counterClickTalk = 0;

// On click change color of email and contacts
function colorContacts() {
    var emailRect = document.getElementById('hero-contact-4').getBoundingClientRect();
    var ball = document.getElementById('ball');
    var ballRect = ball.getBoundingClientRect();
    var talk = document.getElementById('talk');
    ball.style.animationName = 'none';
    ball.style.top = 0;
    var emailX = emailRect.right;
    var emailY = emailRect.top;
    var ballY = ballRect.top;
    ball.style.right = (emailX - 750) + 'px';
    ball.style.top = (emailY - ballY) + 'px';
    
    var heroContact1 = document.getElementById('hero-contact-1');
    var heroContact2 = document.getElementById('hero-contact-2');
    var heroContact3 = document.getElementById('hero-contact-3');
    var heroContact4 = document.getElementById('hero-contact-4');

    // Count if this is the first click or not
    counterClickTalk += 1;
    if (counterClickTalk < 2) {
        setTimeout(()=>{
            talk.classList.add('returned-color');
        },250); 
        setTimeout(()=>{
            ball.classList.remove('ball');
            heroContact4.classList.add('hero__a-active--blue');

            setTimeout(()=>{
                heroContact3.classList.add('hero__a-active--blue');
            },100);
            setTimeout(()=>{
                heroContact2.classList.add('hero__a-active--blue');
            },200);
            setTimeout(()=>{
                heroContact1.classList.add('hero__a-active--blue');
            },300);
        },600);
    } else if (counterClickTalk > 1 && counterClickTalk % 2 == 0) {
        setTimeout(()=>{
            heroContact4.classList.add('hero__a-active--red');
            heroContact4.classList.remove('hero__a-active--blue');
        },100);
        setTimeout(()=>{
            heroContact3.classList.add('hero__a-active--red');
            heroContact3.classList.remove('hero__a-active--blue');
        },200);
        setTimeout(()=>{
            heroContact2.classList.add('hero__a-active--red');
            heroContact2.classList.remove('hero__a-active--blue');
        },300);
        setTimeout(()=>{
            heroContact1.classList.add('hero__a-active--red');
            heroContact1.classList.remove('hero__a-active--blue');
        },400);
    } else if (counterClickTalk > 1 && counterClickTalk % 2 != 0) {
        setTimeout(()=>{
            heroContact4.classList.add('hero__a-active--blue');
            heroContact4.classList.remove('hero__a-active--red');
        },100);
        setTimeout(()=>{
            heroContact3.classList.add('hero__a-active--blue');
            heroContact3.classList.remove('hero__a-active--red');
        },200);
        setTimeout(()=>{
            heroContact2.classList.add('hero__a-active--blue');
            heroContact2.classList.remove('hero__a-active--red');
        },300);
        setTimeout(()=>{
            heroContact1.classList.add('hero__a-active--blue');
            heroContact1.classList.remove('hero__a-active--red');
        },400);
    }
}