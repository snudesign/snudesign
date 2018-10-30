$(document).ready(function(){

  // $(".interactive_cell").click(function(){
  //   $(this).toggleClass("fill_color");
  // }) 

  // window.scrollY는 스크롤은 화면의 맨위 지점을 찍음..
  var middle_pos1 = $(".flicker").position().top + $(".flicker").height()/2; // div의 중간값 찾기

  var range = 500;
  var size_h_window = window.innerHeight;

  console.log( "flicker", middle_pos1 );

  $("body").append( "<div id='start'> start </div>" );
  $("body").append( "<div id='end'> end </div>" );
  
  $("#start")
  .css('position',"absolute")
  .css('top',middle_pos1- size_h_window/2);

  $("#end")
  .css('position',"absolute")
  .css('top',middle_pos1);

  $(window).scroll(function() {
    console.log( window.scrollY );
  
    
    if( !$(".flicker").hasClass("animation_on") ) { // 없음

      if(window.scrollY > middle_pos1 - size_h_window/2 && window.scrollY < middle_pos1){
        $(".flicker").addClass("animation_on");
        console.warn("on");
      }
      else{
        $(".flicker").removeClass("animation_on");
        console.log("off");
      }
    }else{  // 있음. 아무일도 하지 않는다.

      console.log("none");

      if(window.scrollY <=  middle_pos1 - size_h_window/2 || window.scrollY >= middle_pos1){
        $(".flicker").removeClass("animation_on");
        }

    }


    /*
    var $el = $('.show-on-scroll');
    
    console.log()
    if($(this).scrollTop() >= 400) $el.addClass('shown');
    else $el.removeClass('shown');
      */
});

});

