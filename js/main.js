
/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요서에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영행을 받는 요소들을 검색
const badeEL = document.querySelector('header .badges');

//페이지에 스크롤 이벤트 추가
//스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 준다)
window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // Badge 숨김
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badeEL, .4, {
      opacity : 0,
      display : 'none'
    });
  }else {
    // Badge 보여줌
    gsap.to(badeEL, .6, {
      opacity : 1,
      display: 'block'
    });
  }
}, 300));
// -.throttle(함수, 시간);



/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .6,
    opacity : 1
  });
});



/**
 * 슬라이드 요소 관리
 */
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  slidesPerView : 3, //한번에 보여줄 스라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역을 토글하는 버튼
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 슬라이드 영역 숨김 여부
let isHideRomotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHideRomotion = !isHideRomotion
  if(isHideRomotion) {
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y : size,
    repeat : -1, // 무한 반복
    yoyo : true, // 요요 같이 움직임
    ease : Power1.easeInOut,
    delay : random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook : .8, 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();