const $works = document.querySelectorAll('[data-parallax]')
const $window = window

$window.addEventListener('scroll', () => {
   $works.forEach(($el, idx) => {
     
     const parallaxVal = $el.dataset.parallax;
     const translateVal = parallaxVal*($window.pageYOffset - $window.innerHeight)/2
     const opacityVal = ($window.pageYOffset - $window.innerHeight)/250
     
     if (parallaxVal < 0) {
        $el.style.transform = "translateY(" + (translateVal > 0 ? 0 : translateVal) + "px)"
     } else {
        $el.style.transform = "translateY(" + (translateVal < 0 ? 0 : translateVal) + "px)"
     }
     $el.style.opacity = "0.99"　- opacityVal
     $el.style.transition = "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
   })

   const highlight = document.getElementById('highlight').style;
   highlight.opacity = ($window.pageYOffset - ($window.innerHeight * 1.5))/250 - "1"
})

