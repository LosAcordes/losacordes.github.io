const audio = document.getElementById("audio"),
      button = document.getElementById("button"),
      bar = document.getElementById("bar"),
      time = document.getElementById("time"),
      fmt = s => Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2, '0');

button.onclick = () => { audio.paused ? audio.play() : audio.pause(); button.innerText = audio.paused ? "▶" : "❚❚"; };
audio.onloadedmetadata = () => bar.max = audio.duration;
audio.ontimeupdate = () => { bar.value = audio.currentTime; time.innerText = fmt(audio.currentTime) + " / " + fmt(audio.duration || 0); };
bar.oninput = () => audio.currentTime = bar.value;
