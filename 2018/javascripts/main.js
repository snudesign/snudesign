
/////size reset ///////////////////

let reset_all_size = function(){

  let td_height = parseInt($( window ).width() * 0.25) // 윈도우 값의 0.25만큼을 한 셀의 크기로 설정
  let table_width = td_height*4;  // 테이블은 4개의 셀 크기
  let titleTd_height = ($( window ).height()-100)%$(window).width();
  let titleTd_height_2 = ($( window ).height()-100);

  $("#top_title").css("width", $( window ).width());

  $("table").css("width",  table_width)

  $(".top_cell").css("width",  td_height)
                .css("height",  td_height)

  $("#googleMap").css("width",  '100%')
                .css("height",  '100%')

  $("td").css("width",  td_height)
        .css("height",  td_height)
  
  if ($( window ).height()>$( window ).width()*1.5){
    $("#moving").css("margin-top",  titleTd_height)
  }
  else{
    $("#moving").css("margin-top",  titleTd_height_2)
  }
}


/////제이쿼리 실행 ///////////////////

  $(document).ready(function(){

    reset_all_size();

    $( window ).resize(function() {
      reset_all_size();
    }) 


    $(".tumblbug_shot").click(function(){
      console.log("QQ");
      window.open("https://tumblbug.com/2018snud");
      
    })
 
      $(".menu").click(function(){
          var submenu = $(this).next("ul");

          // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
          if( submenu.is(":visible") ){
              submenu.slideUp();
          }else{
              submenu.slideDown();
          }
      }).mouseover(function(){
          $(this).next("ul").slideDown();
      });
    ///////sticky header/////
    window.onscroll = function() {stickyFunction()};

    var header = document.getElementById("myHeader");
    var sticky = document.getElementById("moving").offsetTop+100;

    function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
     }
}


});


/////menu button 스크롤 이동 ///////////////////

//console.log("sibal")
var menu_info = function (){
    window.scrollTo(0, $("#info").position().top-$('#myHeader').height()); // x, y
  }

  var menu_catalogue = function (){
    window.scrollTo(0, $("#catalogue").position().top-$('#myHeader').height()); // x, y
  }

  var menu_exhibition = function (){
    window.scrollTo(0, $("#exhibition").position().top-$('#myHeader').height()); // x, y
  }

  var menu_program = function (){
    window.scrollTo(0, $("#program").position().top-$('#myHeader').height()); // x, y
  }

  var menu_contact = function (){
    window.scrollTo(0, $("#contact").position().top-$('#myHeader').height()); // x, y
  }



/////scroll top button ///////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

