


var Show_keywords = function(el){
 
  var m = this;
  
  m.init = function(){
    m.codeletters = "■□⚑*☐▪︎▫︎◻︎◼︎◆◇⍁♦︎";//&#*+%?£@§$
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'connect',
      'collect',
      'snu design week',
      'degree show'
      //'VISUAL DESIGN & INDUSTRIAL DESIGN'
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
 
 }
 
 //console.clear();
 var keywords = new Show_keywords($('#show_keywords'));








 /////////////////// 카운트 다운 & 타이머 설정 ///////////////

 // Set the date we're counting down to
var countDownDate = new Date("Dec 6, 2018 10:00:00").getTime();

// Update the count down every 1 second
var countDown = setInterval(function() {
  //  console.log("e");
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var remain = distance;

    // Output the result in an element with id="demo"
   // document.getElementById("timer").innerHTML = days + " : " + hours + " : "
   // + minutes + " : " + seconds + " : " + remain;
    
    document.getElementById("d-day").innerHTML = "<p class='content_A' style='color:hsl(0, 0%, 30%);font-size:2rem'>thank you +<br>+see you next year!!</p>";
    document.getElementById("d-day-h").innerHTML = "<p class='content_section'>HOURS</p>" + "<p class='content_A'>"+hours+"</p>"; 
    document.getElementById("d-day-m").innerHTML = "<p class='content_section'>MINUTES</p>" + "<p class='content_A'>"+minutes+"</p>";
    document.getElementById("d-day-s").innerHTML = "<p class='content_section'>SECONDS</p>" + "<p class='content_A'>"+seconds+"</p>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
       // document.getElementById("timer").innerHTML = "OPEN!!";
    }
}, 77); //여기서 리셋 시간 결정하는 것임