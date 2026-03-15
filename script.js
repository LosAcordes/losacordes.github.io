const a = document.getElementById("aud"),
      b = document.getElementById("btn"),
      bar = document.getElementById("bar"),
      t = document.getElementById("time"),
      fmt = s => Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2, '0');

b.onclick = () => { a.paused ? a.play() : a.pause(); b.innerText = a.paused ? "▶" : "❚❚"; };
a.onloadedmetadata = () => bar.max = a.duration;
a.ontimeupdate = () => { bar.value = a.currentTime; t.innerText = fmt(a.currentTime) + " / " + fmt(a.duration || 0); };
bar.oninput = () => a.currentTime = bar.value;
