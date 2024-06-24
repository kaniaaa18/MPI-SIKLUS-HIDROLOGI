window.addEventListener('load', function () {
    let musik = new Audio();
    musik.src = "bensound-smile.mp3";
    musik.loop = true; //loop secara otomatis
    musik.play();

    let mute = document.getElementById("mute");

    mute.addEventListener("click", function (event) {
      if (musik.muted) {
        musik.muted = false;    //jika musik sedang mute, aktifkan musik
        event.target.style.backgroundImage = "url('photo/volume-up-fill.svg')";
      } else {
        musik.muted = true;     //jika musik sedang play, nonaktifkan musik
        event.target.style.backgroundImage = "url('photo/volume-mute-fill.svg')";
      }
    });
  });