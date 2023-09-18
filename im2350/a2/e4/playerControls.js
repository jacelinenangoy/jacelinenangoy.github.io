/* THESE ARE THE ELEMENTS CREATED DURING CLASS */

// this is the audio itself
let audioElement = document.getElementById("audioElement");
// the buttons for the controls
let playButton = document.getElementById("playButton");
let muteButton = document.getElementById("muteButton");
let stopButton = document.getElementById("stopButton");
// the progress element
let progressBar = document.getElementById("progressBar");
// the hero image
let heroImage = document.getElementById("heroImage");

audioElement.removeAttribute("controls");

document.getElementById("controlsWrapper").style.display = "flex";

audioElement.addEventListener('loadedmetadata', () => {
  progressBar.setAttribute('max', audioElement.duration);
});

audioElement.addEventListener("playing", () => {

  if (!progressBar.getAttribute('max')){
    progressBar.setAttribute('max', audioElement.duration);
  }
});



/* LOADING */

// this is the feedback to indicate when the audio is loading
audioElement.addEventListener("waiting", () => {
  progressBar.classList.add("timeline-loading");
});
audioElement.addEventListener("canplay", () => {
  progressBar.classList.remove("timeline-loading");
});



/* MEDIA FINISHED */

// when the media finishes we want to make sure that play icon switches back over from pause to indicate that the user can restart playback
audioElement.addEventListener("ended", () => {
  playButton.style.backgroundImage = "url('./icons/play.svg')";
});



/* PLAY/PAUSE */

// I want to be able to start and pause playback using the same toggle button
// Signifier - I want to click a button
// Affordance - I want to toggle between playing and pausing
// Feedback - I want to update the button logo to describe what will happen when I press it

function playPause(){
  if (audioElement.paused || audioElement.ended) {
    // if it isn't already playing make it play
    audioElement.play();
    // then make sure the icon on the button changes to pause indicating what it does if you click it
    playButton.style.backgroundImage = "url('./icons/pause.svg')";
    document.getElementById('audioPlayOverlay').style.display = "none";
  } else {
    // if it is already playing make it pause
    audioElement.pause();
    // then make sure the icon on the button changes to play indicating what it does if you click it
    playButton.style.backgroundImage = "url('./icons/play.svg')";
    document.getElementById('audioPlayOverlay').style.display = "block";
  }
}
// event 1 - clicking on the play button
playButton.addEventListener('click', playPause);

// event 2 - clicking on the hero image
heroImage.addEventListener('click', playPause);



/* TIMELINE */

// update the progress bar to display how much has already played and 
// let the user click the progress bar to scrub the audio to a specific place in the audio
audioElement.addEventListener('timeupdate', () => {
  // this statement is simple - we update the progress bar's value attribute with the currentTime property of the audio, because timeupdate runs everytime
  // currentTime is changed it'll update both as the audio plays and if we were to skip or stop the audio
  progressBar.value = audioElement.currentTime;
});
function scrubToTime(e){

  let x = e.clientX - (progressBar.getBoundingClientRect().left + window.scrollX);
  audioElement.currentTime = clampZeroOne(x / progressBar.offsetWidth) * audioElement.duration;
}
progressBar.addEventListener('mousedown', scrubToTime);
progressBar.addEventListener('mousedown', (e) => {
  // the behaviour here is to listen to the mousemove event (fired when the user moves their mouse) when the click is held down but then to stop listening to that 
  // event when the mouse click is released
  window.addEventListener('mousemove', scrubToTime);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', scrubToTime);
  });
});



/* MUTE/ UNMUTE */

// I want to adjust the audio off or on based on a toggle button of two images (mute and unmute)
// Signifier - I want to click a button
// Affordance - I want to toggle between mute and unmute
// Feedback - I want to update the button logo to describe the current state

function muteUnmute(){
    // check if working
    // console.log("mute/unmute is working");
    // audioElement.muted = true;
    // check if audio is muted
    if(audioElement.muted){
      // if muted is true, set to false
      audioElement.muted = false;
      // change icon
      muteButton.style.backgroundImage = "url('./icons/mute.svg')";
    } else{
      // if muted is false, set to true
      audioElement.muted = true;
      muteButton.style.backgroundImage = "url('./icons/unmute.svg')";
    }
}
muteButton.addEventListener('click', muteUnmute);


/* add the

I decided to add the loop element as audio players often will be played more than once*/





/* LOOP*/

// I want to adjust the audio to restart automatically when it ends
// Signifier - I want to click a button
// Affordance - I want to toggle between loop and not looping automatically
// Feedback - I want to update the button logo to describe the current state (same logo, different colour)


function loop(){
  if (audioElement.paused || audioElement.ended) {
    // if it isn't already playing make it play
    audioElement.play();
    // then make sure the icon on the button changes to pause indicating what it does if you click it
    playButton.style.backgroundImage = "url('./icons/loop.svg')";
    document.getElementById('audioPlayOverlay').style.display = "none";
  } else {
    // if it is already playing make it pause
    audioElement.pause();
    // then make sure the icon on the button changes to play indicating what it does if you click it
    playButton.style.backgroundImage = "url('./icons/pause.svg')";
    document.getElementById('audioPlayOverlay').style.display = "block";
  }
}
// event 1 - clicking on the play button
playButton.addEventListener('click', playPause);


// this is the loop function itself which automatically loops at the end of the song (restarts to 0 time)
audioElement.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, true);







/* HELPER FUNCTIONS */

function clampZeroOne(input){
  return Math.min(Math.max(input, 0), 1);
}

function logEvent(e){
  console.log(e);
}

fuction
