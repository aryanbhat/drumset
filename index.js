for(var i =0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click",clickrec);
}

function clickrec(){
    var text = this.innerHTML;
    playaudio(text);
    btnAnimation(text);
}
document.addEventListener("keydown",function(event){
  playaudio(event.key);
  btnAnimation(event.key);
})
function playaudio(text){
  if(text === "w"){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
  }
  if(text === "a"){
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
  }
  if(text === "s"){
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
  }
  if(text === "d"){
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
  }
  if(text === "j"){
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
  }
  if(text === "k"){
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
  }
  if(text === "l"){
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
  }
  else{
    console.log(text);
  }
}
function btnAnimation(keypressed){
  document.querySelector("." + keypressed).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+keypressed).classList.remove("pressed");
  },100);
}
