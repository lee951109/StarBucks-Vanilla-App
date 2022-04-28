
/*
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

// 뱃지 파트
const badeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // 배지 숨김
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badeEL, .4, {
      opacity : 0,
      display : 'none'
    });
  }else {
    // 배지 보여줌
    gsap.to(badeEL, .6, {
      opacity : 1,
      display: 'block'
    });
  }
}, 300));
// -.throttle(함수, 시간);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .6,
    opacity : 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})