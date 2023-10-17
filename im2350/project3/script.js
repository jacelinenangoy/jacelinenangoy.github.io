/* this draggable section is utilising the code learnt from class  */

// create an array with all elements that have draggable class applied
let draggableElementList = Array.from(document.getElementsByClassName("Draggable"));
// for each element that is draggable add the event listener
for (const draggableElement of draggableElementList) {
  draggableElement.addEventListener("mousedown", dragStart);
}

// drag target is the element we are currently dragging
let dragTarget = null;
// keep track of where the element started and its current position
let dragStartX, dragStartY, dragObjLeft, dragObjTop;

function dragStart(e){
  console.log (e);
  dragTarget = e.target;
  // amount of pixels from the left side of the screen to the clicked element
  dragObjLeft = e.target.offsetLeft;
  // amount of pixels from the top side of the screen to the clicked element
  dragObjTop = e.target.offsetTop;
  // amount of pixels from the top side of the screen to the mouse cursor
  dragStartX = e.pageX;
  // amount of pixels from the top side of the screen to the mouse cursor
  dragStartY = e.pageY;
  // only added once dragging has started
  window.addEventListener("mousemove", dragMove);
  window.addEventListener("mouseup", dragEnd);
}

function dragMove(e){
  dragTarget.style.position = 'absolute';
  dragTarget.style.left = (dragObjLeft + (e.pageX - dragStartX) + "px");
  dragTarget.style.top = (dragObjTop + (e.pageY - dragStartY) + "px");
}

function dragEnd(){
  window.removeEventListener("mousemove", dragMove);
}

/* this function is used to refresh the page and reset the user's draggable elements (when the user clicks on the nav logo/ name) */
function refreshPage(){
  window.location.reload();
} 


/* these functions activates the nav popup element to be visible  */
/* keep in mind these don't have the blur effect unlike the below hideShow functions! */

function navAbout(){
  var abt = document.getElementById('abt');
  abt.classList.toggle('active')
}
function navProjects(){
  var projects = document.getElementById('projects');
  projects.classList.toggle('active')
}
function navArchive(){
  var archive = document.getElementById('archive');
  archive.classList.toggle('active')
}
function navContact(){
  var contact = document.getElementById('contact');
  contact.classList.toggle('active')
}



/* below is the code for the main interactive elements of the page! */
/* each button has it's own hideShow toggle function assigned so that it can detect and activate the corresponding project's popup, and set the visibility to visible */

function hideShow(){

  /* each toggle turns on a blur filter which is activated on the entire document (allows the popup on the top layer to be in focus) */
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  /* this section simply activates the appropriate popup element to be visible  */
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
}

/* the same function is then repeated for the rest of the other projects!  */
/* I just changed the number to 2, 3 and so on to ensure the right popup is matched with the right button  */

function hideShow2(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup2 = document.getElementById('popup2');
  popup2.classList.toggle('active')
}

function hideShow3(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup3 = document.getElementById('popup3');
  popup3.classList.toggle('active')
}

function hideShow4(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup4 = document.getElementById('popup4');
  popup4.classList.toggle('active')
}

function hideShow5(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup5 = document.getElementById('popup5');
  popup5.classList.toggle('active')
}

function hideShow6(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup6 = document.getElementById('popup6');
  popup6.classList.toggle('active')
}

function hideShow7(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup7 = document.getElementById('popup7');
  popup7.classList.toggle('active')
}

function hideShow8(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup8 = document.getElementById('popup8');
  popup8.classList.toggle('active')
}

function hideShow9(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')

  var popup9 = document.getElementById('popup9');
  popup9.classList.toggle('active')
}


