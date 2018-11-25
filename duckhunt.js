 $(document).ready(function() {
       
//6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object
    function createDuck(){
      var $body = $('body');
      // 1. Can you create a <div> with the class "duck" and name it "$duck"
      var $duck = $('<div/>').addClass('duck');
      $body.append($duck);
      // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
      setInterval(function(){
        $duck.toggleClass('flap');
      }, 250); 
     // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
     // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
     // each time it creates a duck, it appears in a random location.
      topRandom =
       (Math.floor( Math.random() * window.innerHeight))+'px';
      leftRandom = 
      (Math.floor( Math.random() * window.innerWidth))+'px';
      $duck.css({
        'top' : `${topRandom}` ,
        'left' : `${leftRandom}`  })

      // 4. Try making the duck move to a different location after 1 second
      setInterval(function() {
        $duck.css(topRandom);
        $duck.css(leftRandom);
    }, 1000); 
    return $duck;
    } 

    //   // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
    for ( var i = 0; i <5; i++){
      createDuck();
  }
    var $img = $('<img/>').attr('src', 'images/shot.png');
    $(this).append($image);
    // var duckelement = document.createTextNode($duck);

    var $divs =  $('div');
    $divs.on('click' , function(){
      $duck.remove();
      $img.addClass();
    })
    
    });
