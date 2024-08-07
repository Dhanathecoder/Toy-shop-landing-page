$(document).ready(function() {

    $('.toggle-nav').click(function() {
  
        $('.nav-list').toggleClass('active');
  
    });
  
  });
  
  $(document).ready(function() {
  
    // Function to toggle blinking animation
  
    function toggleBlinking($element) {
  
        $element.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
    }
  
  
    // Set interval to blink each light bulb
  
    $('.light-bulb').each(function(index) {
  
        setInterval(function() {
  
            toggleBlinking($('.light-bulb').eq(index));
  
        }, Math.random() * 2000 + 1000); // Randomize blinking intervals
  
    });
  
  });
  
  