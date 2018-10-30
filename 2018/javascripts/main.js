
/////size reset ///////////////////

let reset_all_size = function(){

  let td_height = parseInt($( window ).width() * 0.2) // 윈도우 값의 0.2만큼을 한 셀의 크기로 설정
  let table_width = td_height*4;  // 테이블은 4개의 셀 크기

  $("#top_title").css("width", $( window ).width());

  $("table").css("width",  table_width)

  $(".top_cell").css("width",  td_height)
                .css("height",  td_height)

  $("#googleMap").css("width",  td_height*2)
                .css("height",  td_height*2)

  $("td").css("width",  td_height)
        .css("height",  td_height)
}


/////제이쿼리 실행 ///////////////////

  $(document).ready(function(){

    reset_all_size();

    $( window ).resize(function() {
      reset_all_size();
    }) 

  });


/////menu button 스크롤 이동 ///////////////////

  var menu1 = function (){
    window.scrollTo(0, $("#happy").position().top); // x, y
  }

  var menu5 = function (){
    window.scrollTo(0, $("#SAD").position().top); // x, y
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
