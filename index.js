$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

//   <div class="row mt-5 justify-content-center">
//   <div class="col-5" style="height: 12rem;">
//    <img src="./image/Ends.png" alt="..." style="width: 100%; height: 100%;" >
//   </div>