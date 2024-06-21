// let scrollHeader=function(){}
let scrollHeader = () => {
    let header = document.querySelector('#header')
    // console.log(scrollY)
    // console.log(pageYOffset)
    // 조건문? 조거문이 참일때실행:거짓일때실행
    pageYOffset >= 50 ?
        header.classList.add('bg-header') :
        header.classList.remove('bg-header');
}

// window.addEventListener('scroll',function(){})
window.addEventListener('scroll', scrollHeader)

//배경테마 변경
let themeButton = document.querySelector('#change-theme')
let iconTheme = 'ri-sun-line' // ri-apps-2-line
let darkTheme = 'dark-theme'

let getCurrentTheme = () => {
    // .classList.contains(클래스명) --> 클래스명을 가지고 있는가 (true/false)
    let result = document.body.classList.contains(darkTheme) ? 'dark' : 'light' /* 참:거짓; */
    return result;
}
let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme) ? "ri-apps-2-line" : "ri-sun-line";
    return result;
}
//웹스토어 값 셋팅
// localStorage.setItem(키:값)==> 웹스토어에 값을 입력한다
// localStorage.getItem()==> 웹스토어에 값을 가져온다

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    // toggle키 --> 실행과 반실행을 가지고 있음
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');
console.log(selectedTheme);

if (selectedTheme) {
    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme);
    } else {
        document.body.classList.remove(darkTheme);
    }

    if (selectedIcon == "ri-apps-2-line") {
        themeButton.classList.add(iconTheme)
    } else {
        themeButton.classList.remove(iconTheme)
    }
};

//////////////////////////////

//모바일에서 메뉴 부분 
let navToggle = document.querySelector('#nav_toggle');
let navMenu = document.querySelector('#nav_menu');
let navClose = document.querySelector('#nav_close');

navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
})
navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
})

////////////////////////////////////
//scroll up

let scrollup = () => {
    // let scrollY=scrollY //scroll Y값을 가져오는 방법

    let scrollUp = document.querySelector('#scrollup')
    pageYOffset >= 50 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


// 전체화면 애니, 각영역으로 이동, 메뉴
// let scrollActive=function(){}
let scrollActive = () => {
    // let scrollY=pageYOffset
    let scrollYY = scrollY

    let sections=document.querySelectorAll(".section[id]")// section태그중 id가 있는것

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight; // 각 section의 높이값
        let sectionTop = current.offsetTop - 80; // 각 section의 전체문서에서의 top의 위치

        let sectionId = current.getAttribute("id")
        // console.log(sectionId);

        let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
        if (scrollYY > sectionTop && scrollYY <= sectionTop + sectionHeight) {
            //scroll 의 y값이 section의 탑값보다 크다면 또는
            //scroll 의 y값이 section의 탑값과 section의 높이를 합친것보다 작거나 같다면
            sectionClass.classList.add("action-link")
        } else {
            sectionClass.classList.remove("action-link")
        }
    })
}
// window.addEventListener("scroll",function(){scrollActive()})
window.addEventListener("scroll", scrollActive)

// 영역별 애니메이션

ScrollReveal().reveal('.home_data, .home_img, .about_data, .about_img, .popular_card, .recently_data, .recently_img, .home_leaf-1, .recently_leaf-1, .home_leaf-2, .about_leaf, .recently_leaf-2,.footer_description,.footer_content,.footer_info', {
    distance: '60px',
    origin: 'top',
    duraduration: 2500,
    delay: 400,
    reset: true,
});
ScrollReveal().reveal('.home_data', {
    origin: 'bottom',
});
ScrollReveal().reveal('.about_data, .recently_data, .home_leaf-1, .recently_leaf-1', {
    origin: 'left',
});
ScrollReveal().reveal('.about_img, .recently_img, .home_leaf-2, .about_leaf, .recently_leaf-2', {
    origin: 'right',
});
ScrollReveal().reveal('.popular_card, .footer_social', {
    origin: 'top',
    interval: 400,
});