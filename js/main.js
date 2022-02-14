/*---------------------------------------------
   testimonial slider start
----------------------------------------------*/
function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){ // if the elements exist
        carouselOne.addEventListener('slide.bs.carousel', function () {
            const activeItem = this.querySelector(".active")
            document.querySelector(".js-testimonial-img").src = 
            activeItem.getAttribute("data-js-testimonial-img");
          })
    }
}
testimonialSlider()
/*---------------------------------------------
   testimonial slider start end
----------------------------------------------*/