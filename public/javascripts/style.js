


  (function () {
    var words = ["User Experience Designer","Web Developer","User Interface Designer","Project Manager","Creative Thinker" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();