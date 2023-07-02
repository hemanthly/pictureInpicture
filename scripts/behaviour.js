const video = document.querySelector('video');
const startPip = document.getElementById('startpip');

// Using screen capture api and pictureInPicutre API we could achieve this
var displayMediaOptions = {
  video: {
    cursor: "always",
  },
  audio: false,
};


async function recordScreen() {
  try {
    video.srcObject = await navigator.mediaDevices.getDisplayMedia(
      // displayMediaOptions
    );
    video.onloadedmetadata = () =>{
      video.play();
    }

  } catch (error) {
    console.log(error);
  }
}
recordScreen();

async function pip(){

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
  // console.log("sdfds");
}
function start(){
  video.play();
}
function stop(){
  video.pause();
}

