var audio=document.querySelector("audio"),lyrics=document.querySelector("#lyrics"),lyricsData=[{text:"At the time",time:15},{text:"The whisper of birds",time:18},{text:"Lonely before the sun cried",time:27},{text:"Fell from the sky",time:32},{text:"Like water drops",time:33},{text:"Where I'm now? I don't know why",time:41},{text:"Nice butterflies in my hands",time:47},{text:"Too much light for twilight",time:54},{text:"In the mood for the flowers love",time:59},{text:"That vision",time:67},{text:"Really strong, blew my mind",time:72},{text:"Silence Let me see what it was",time:78},{text:"I only want to live in clouds",time:83},{text:"Where I'm now? I don't know why",time:91},{text:"Nice butterflies in my hands",time:97},{text:"Too much light for twilight",time:104},{text:"In the mood for the flowers love",time:108},{text:"At the time",time:144},{text:"The whisper of birds",time:148},{text:"Lonely before the sun cried",time:153},{text:"Fell from the sky",time:158},{text:"Like water drops",time:164},{text:"Where I'm now? I don't know why",time:169},{text:"Nice butterflies in my hands",time:176},{text:"Too much light for twilight",time:183},{text:"In the mood for the flowers",time:188},{text:"Love.",time:140}];function updateLyrics(){var t,e=Math.floor(audio.currentTime),i=lyricsData.find(t=>e>=t.time&&e<t.time+6);i?(t=Math.min(1,(e-i.time)/.1),lyrics.style.opacity=t,lyrics.innerHTML=i.text):(lyrics.style.opacity=0,lyrics.innerHTML="")}function ocultarTitulo(){var t=document.querySelector(".titulo");t.style.animation="fadeOut 3s ease-in-out forwards",setTimeout(function(){t.style.display="none"},3e3)}setInterval(updateLyrics,1e3),setTimeout(ocultarTitulo,216e3);