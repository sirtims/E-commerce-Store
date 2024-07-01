
$(function(){
   let prevIndex = 0
   let currentIndex = 1
   let nextIndex = 2
   let lastIndex = $('#carousel').find('.carousel-item').length - 1;
   $('#carousel-arrow').on('click', '.previous', function(){
      
   })
   $('#carousel-arrow').on('click', '.next', updateState)
   let carouselRunning = true
   let interval = setInterval(function(){
      if(carouselRunning){
         showNextItem()
      }
   }, 4000)
   
   function showNextItem(){ // TO SHOW NEXT ITEM
      if(currentIndex === lastIndex){
         currentIndex = 0
      }
      else{
         currentIndex++
      }
      updateState(currentIndex)
   }
   // function showItem(event){ //BUTTON TO SHOW ITEMS
   //    let target 
   //    if($(event.target).hasClass('arrow')){
   //       target = $(event.target)
   //    } else{
   //       target = $(event.target).parent()
   //    }
   //    let index =  $('.arrow').index(target)
   //    updateState(index)
   // }
   function updateState(index){
      prevIndex = index ===0? lastIndex: index - 1
      currentIndex = index
      nextIndex = index === lastIndex? 0: index + 1
      updateCarouselPosition()
      setLeftClass()
   }
   function updateCarouselPosition(){
      $('#carousel').find('.previous').removeClass('previous')
      $('#carousel').find('.current').removeClass('current')
      $('#carousel').find('.next').removeClass('next')
      let allItems =$('#carousel').find(".carousel-item")
      $(allItems[prevIndex]).addClass('previous')
      $(allItems[currentIndex]).addClass('current')
      $(allItems[nextIndex]).addClass('next')
   }
   function showFromArrow(event){
      let index = $('#carousel-arrows arrow').index(event.target)
      updateState(index)
   }
   function setLeftClass (){

   }
});

/* 
 <section class="carousel-arrows">
              <img id ="carousel-arrows-left"  src="carousel\left-arrow.png" alt="">
              <img id ="carousel-arrows-right" src="carousel\right-arrow.png" alt="">

            </section>*/