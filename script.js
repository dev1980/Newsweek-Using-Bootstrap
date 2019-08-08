window.onscroll = function () {
    if (window.innerWidth > 991) {
        myFunction();
    }
};

window.onresize = function () {
    toggle();
};


var nav = document.getElementById('navscroll');
var sticky = nav.offsetTop;
var date = document.getElementById('nav-date');
var shevron = document.getElementById('shevron');
var bars = document.getElementById('barsId');
var logo = document.getElementById('biglogoid');
var signin = document.getElementById('signin');
var signinA = document.getElementById('signinA');

function myFunction() {
    if (window.pageYOffset > sticky + 120) {
        small();
    } else {
        big();
    }
}


function toggle() {
    if (window.innerWidth < 991) {
        small();
    } else {
        big();
    }
}

function big() {
    nav.style.paddingTop = "50px";
    nav.style.paddingBottom = "10px";
    nav.style.maxWidth = "1310px";
    date.style.display = 'block';
    date.style.bottom = "50px";
    shevron.style.display = 'inline';
    bars.style.color = '#f72210';
    logo.style.width = "396px";
    logo.style.height = "60px";
    logo.style.left = "50%";
    logo.style.top = "15px";
    signin.style.fontSize = "18px";
    signin.style.bottom = "10px";
    signinA.style.padding = "8px";
}

function small() {
    nav.style.paddingTop = "3px";
    nav.style.paddingBottom = "3px";
    nav.style.maxWidth = "100%";
    date.style.display = 'none';
    bars.style.color = '#fff';
    logo.style.width = "132px";
    logo.style.height = "20px";
    logo.style.left = "100px";
    logo.style.top = "10px";
    signin.style.fontSize = "14px";
    signin.style.bottom = "0px";
    signinA.style.padding = "6px";
}
