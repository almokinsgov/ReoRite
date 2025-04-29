document.addEventListener("DOMContentLoaded", function () {
  const data = {
  "Tokerau": {
    segmented: "To + ke + rau",
    phonetic: "Tor + keh + roh* [Rolled /r/]",
    phoneticAlt: "Toh + keh + doh (very soft d like order)",
    ipa: "tɔːkɛdəʊ",
    english: "(to)re + (ke)n + (row)* [Rolled /r/]",
    englishAlt: "(tor)n + (ke)n + (ro)pe* [Rolled /r/]" ,
    audio: "https://reorite.nz/audio/tokerau.mp3",
    ssml: "<speak>tɔːkɛdəʊ</speak>"
  },
  "Ohaeawai": {
    segmented: "O + hae + a + wai",
    phonetic: "Aw + high + ah + why",
    phoneticAlt: "or + hi + ah + why",
    ipa: "ohaeawai",
    english: "(or) + (hi) + (ah) + (why)",
    englishAlt: "(o)ar + (hi)gh + (a)rgon + (whi)te",
    audio: "https://reorite.nz/audio/ohaeawai.mp3",
    ssml: "<speak>ohaeawai</speak>"
  },
  "Kaikohe": {
    segmented: "Kai + ko + he",
    phonetic: "Kigh + kaw + heh",
    ipa: "kaikohe",
    english: "(ki)te + (co)re + (he)n",
    audio: "https://reorite.nz/audio/kaikohe.mp3",
    ssml: "<speak>kaikohe</speak>"
  }
};

  const wordSelect = document.getElementById("wordSelect");
  const infoBox = document.getElementById("wordInfo");

  wordSelect.addEventListener("change", function () {
    const value = this.value;
    if (value && data[value]) {
      const wordData = data[value];
      document.getElementById("wordHeader").innerText = value;
document.getElementById("wordDetail").innerText = value;
document.getElementById("segmented").innerText = wordData.segmented;
document.getElementById("phonetic").innerText = wordData.phonetic;
document.getElementById("ipa").innerText = wordData.ipa;
document.getElementById("english").innerText = wordData.english;
document.getElementById("ssml").innerText = wordData.ssml;

// Show/hide phoneticAlt
if (wordData.phoneticAlt) {
  document.getElementById("phoneticAlt").innerText = wordData.phoneticAlt;
  document.getElementById("phoneticAltRow").style.display = "block";
} else {
  document.getElementById("phoneticAltRow").style.display = "none";
}

// Show/hide englishAlt
if (wordData.englishAlt) {
  document.getElementById("englishAlt").innerText = wordData.englishAlt;
  document.getElementById("englishAltRow").style.display = "block";
} else {
  document.getElementById("englishAltRow").style.display = "none";
}

      infoBox.style.display = "block";
      window.currentAudio = wordData.audio;
    } else {
      infoBox.style.display = "none";
    }
  });

  window.playAudio = function () {
    if (window.currentAudio) {
      const audio = new Audio(window.currentAudio);
      audio.play();
    }
  };
});
