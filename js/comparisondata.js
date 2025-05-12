const comparisonData = [
      {
        word: "Tokerau",
        segmented: "To + ke + rau",
        ipa: "/ tɔː.kɛh.ɾ͡dɑ̞ʊ̞ː /",
        without: "https://reorite.nz/audio/tokerau_without.mp3",
        with: "https://reorite.nz/audio/tokerau_with.mp3",
        notes: "Common mispronunciation of 'rau' — softened 'r' correction applied.<br><b>Accuracy rating before correction:</b> 40%<br><b>Accuracy rating after correction:</b> 95%"
      },
      {
        word: "Kahore",
        segmented: "Ka + ho + re",
        ipa: "/ kɑ.hɔː.ɾ͡dɛ̞h /",
        without: "audio/kahore_without.mp3",
        with: "audio/kahore_with.mp3",
        notes: "Vowel balance and light 'r' tuning required.<br><b>Accuracy rating before correction:</b> 40%<br><b>Accuracy rating after correction:</b> 95%"
      },
      {
        word: "Tino rangatiratanga",
        segmented: "/ Ti + no / Ra + nga + ti + ra + ta + nga /",
        ipa: "/ tiː.nɔː / .ɾ͡dɑ̞.ŋˤŋɑ.tiː.ɾ͡dɑ̞.tɑ.ŋˤŋɑ /",
        without: "audio/tino_without.mp3",
        with: "audio/tino_with.mp3",
        notes: "Complex r/ng clusters carefully preserved.<br><b>Accuracy rating before correction:</b> 44%<br><b>Accuracy rating after correction:</b> 96%"
      },
      {
        word: "Mātauranga",
        segmented: "Mā + tau + ra + nga",
        ipa: "/ mɑːː.tɑʊː.ɾ͡dɑ̞.ŋˤŋɑ /",
        without: "audio/matauranga_without.mp3",
        with: "audio/matauranga_with.mp3",
        notes: "Diphthong smoothing applied to tau.<br><b>Accuracy rating before correction:</b> 38%<br><b>Accuracy rating after correction:</b> 93%"
      },
      {
        word: "Pepeha",
        segmented: "Pe + pe + ha",
        ipa: "/ pɛh.pɛh.hɑ /",
        without: "audio/pepeha_without.mp3",
        with: "audio/pepeha_with.mp3",
        notes: "<br><b>Accuracy rating before correction:</b> 35%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Pāroa",
        segmented: "Pā + ro + a",
        ipa: "/ pɑːː.ɾ͡dɔ̞ːɑ̞ /",
        without: "audio/paroa_without.mp3",
        with: "audio/paroa_with.mp3",
        notes: "Long vowel marking critical on 'pā'.<br><b>Accuracy rating before correction:</b> 38%<br><b>Accuracy rating after correction:</b> 90%"
      },
      {
        word: "Tauranga",
        segmented: "Tau + ra + nga",
        ipa: "/ tɑʊː.ɾ͡dɑ̞.ŋˤŋɑ /",
        without: "audio/tauranga_without.mp3",
        with: "audio/tauranga_with.mp3",
        notes: "Soft diphthong joining + 'ng' nasalisation.<br><b>Accuracy rating before correction:</b> 37%<br><b>Accuracy rating after correction:</b> 93%"
      },
      {
        word: "Ngaruawahia",
        segmented: "Nga + rua + wa + hia",
        ipa: "/ ŋˤŋɑ.ɾ͡dʊ̞ːɑ̞.wɑ.hiːɑ /",
        without: "audio/ngaruawahia_without.mp3",
        with: "audio/ngaruawahia_with.mp3",
        notes: "Extended 'ng' onset smoothing.<br><b>Accuracy rating before correction:</b> 44%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Taitaekarepoua",
        segmented: "Tai + tae + ka + re + pou + a",
        ipa: "/ tɑiː.tɑɛh.kɑ.ɾ͡dɛ̞h.pɔːʊː.ɑ /",
        without: "audio/taitaekarepoua_without.mp3",
        with: "audio/taitaekarepoua_with.mp3",
        notes: "Complex diphthongs carefully stepped.<br><b>Accuracy rating before correction:</b> 18%<br><b>Accuracy rating after correction:</b> 93%"
      },
      {
        word: "Horowhenua",
        segmented: "Ho + ro + whe + nua",
        ipa: "/ hɔː.ɾ͡dɔ̞ː.fɛ.nʊːɑh /",
        without: "audio/horowhenua_without.mp3",
        with: "audio/horowhenua_with.mp3",
        notes: "Wh-sound stabilisation applied.<br><b>Accuracy rating before correction:</b> 48%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Ohaeawai",
        segmented: "O + hae + a + wai",
        ipa: "/ ɔː.hɑɛ.ɑh.wɑiː /",
        without: "audio/ohaeawai_without.mp3",
        with: "audio/ohaeawai_with.mp3",
        notes: "Vowel smoothing through breaks.<br><b>Accuracy rating before correction:</b> 40%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Haititaimarangai",
        segmented: "Hai + ti + tai + ma + ra + ngai",
        ipa: "/ hɑiː.tiː.tɑiː.mɑ.ɾ͡dɑ̞.ŋˤŋɑiː /",
        without: "audio/haititaimarangai_without.mp3",
        with: "audio/haititaimarangai_with.mp3",
        notes: "Heavy attention to 'ng' and 'ai' merging.<br><b>Accuracy rating before correction:</b> 7%<br><b>Accuracy rating after correction:</b> 94%"
      },
      {
        word: "Whangatauatia",
        segmented: "Wha + nga + tau + a + tia",
        ipa: "/ fɑ.ŋˤŋɑ.tɑʊː.ɑ.tiːɑ /",
        without: "audio/whangatauatia_without.mp3",
        with: "audio/whangatauatia_with.mp3",
        notes: "Ng and wh sequencing critical.<br><b>Accuracy rating before correction:</b> 29%<br><b>Accuracy rating after correction:</b> 94%"
      },
      {
        word: "Kia ora",
        segmented: "/ Kia / o + ra /",
        ipa: "/ kiːɑ / ɔː.ɾ͡dɑ̞ /",
        without: "audio/kiaora_without.mp3",
        with: "audio/kiaora_with.mp3",
        notes: "Already reasonably close — minor tuning.<br><b>Accuracy rating before correction:</b> 92%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Amorangi",
        segmented: "A + mo + ra + ngi",
        ipa: "/ ɑ.mɔː.ɾ͡dɑ̞.ŋˤŋiː /",
        without: "audio/amorangi_without.mp3",
        with: "audio/amorangi_with.mp3",
        notes: "Personal name sensitivity on 'ra'.<br><b>Accuracy rating before correction:</b> 30%<br><b>Accuracy rating after correction:</b> 97%"
      },
      {
        word: "Kaikohe",
        segmented: "Kai + ko + he",
        ipa: "/ kɑiː.kɔː.hɛh /",
        without: "audio/kaikohe_without.mp3",
        with: "audio/kaikohe_with.mp3",
        notes: "Mid vowel tuning.<br><b>Accuracy rating before correction:</b> 60%<br><b>Accuracy rating after correction:</b> 98%"
      },
      {
        word: "Taumata­whakatangihanga­koauau­o­tamatea­turi­pukaka­piki­maunga­horo­nuku­pokai­whenua­ki­tana­tahu",
        segmented: "Tau + ma + ta­ + wha + ka + ta + ngi + ha + nga + ­ko + au + au + ­o + ­ta + ma + tea + ­tu + ri­ + pu + ka + ka + ­pi + ki + ­mau + nga­ + ho + ro + ­nu + ku­ + po + kai + ­whe + nua + ­ki + ­ta + na­ + ta + hu",
        ipa: "/ tɑʊː.mɑ.tɑ.fɑ.kɑ.tɑ.ŋˤŋiː.hɑ.ŋˤŋɑ.kɔː.ɑʊː.ɑʊː.ɔː.tɑ.mɑ.tɛhɑ.tʊː..ɾ͡di̞ː.pʊː.kɑ.kɑ.piː.kiː.mɑʊː.ŋˤŋɑ.hɔː..ɾ͡dɔ̞ː.nʊː.kʊː.pɔː.kɑiː.fɛh.nʊːɑ.kiː.tɑ.nɑ.tɑ.hʊː/",
        without: "audio/taumata_without.mp3",
        with: "audio/taumata_with.mp3",
        notes: "Compound word.<br><b>Accuracy rating before correction:</b> 30%<br><b>Accuracy rating after correction:</b> 94%"
      },
      {
        word: "Māori months of the year",
        segmented: "N/A",
        ipa: "/ N/A /",
        without: "audio/months_without.mp3",
        with: "audio/months_with.mp3",
        notes: "Word combination.<br><b>Accuracy rating before correction:</b> -%<br><b>Accuracy rating after correction:</b> -%"
      }
    ];

    const listContainer = document.getElementById('comparisonList');

    comparisonData.forEach(item => {
      const block = document.createElement('div');
      block.className = 'comparison-block';
      block.innerHTML = `
        <div class="word-title">${item.word}</div>
        <div class="segment-line"><strong>Segmented:</strong> ${item.segmented}</div>
        <div class="ipa-line"><strong>IPA:</strong> ${item.ipa}</div>
        ${item.notes ? `<div class="notes"><strong>Notes:</strong> ${item.notes}</div>` : ''}
        <div class="button-row">
          <button onclick="playAudio('${item.without}')">🔊 Without Correction</button>
          <button class="button2" onclick="playAudio('${item.with}')">🔊 With Reo Rite</button>
        </div>
        
      `;
      listContainer.appendChild(block);
    });

    function playAudio(file) {
      const audio = new Audio(file);
      audio.play();
    }
