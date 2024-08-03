const resultElement = document.getElementById("result");
let recognition;

function startConverting(){
    if('webkitSpeechRecognition' in window){
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}

function setupRecognition(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function(event){
        const {finalTranscript, interTranscript} = processResult(event.results);
        resultElement.innerHTML = finalTranscript + interTranscript;

        // Check for voice commands
        if (finalTranscript.toLowerCase().includes('start')) {
            startConverting();
            speak('Started');
        } else if (finalTranscript.toLowerCase().includes('stop')) {
            stopConverting();
            speak('Stopped');
        } else if (finalTranscript.toLowerCase().includes('clear')) {
            resultElement.innerHTML = '';
            speak('Cleared');
        } else if (finalTranscript.toLowerCase().includes('save')) {
            saveTranscript();
            speak('Saved');
        }
    }
}

function processResult(results){
    let finalTranscript = '';
    let interTranscript = '';

    for(let i = 0; i < results.length; i++){
        let transcript = results[i][0].transcript;
        transcript = transcript.replace("\n","<br>");

        if(results[i].isFinal){
            finalTranscript += transcript;
        } else {
            interTranscript += transcript;
        }
    }

    return {finalTranscript, interTranscript};
}

function stopConverting(){
    if(recognition){
        recognition.stop();
    }
}

function saveTranscript() {
    const text = resultElement.innerText;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcript.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

function toggleTheme() {
    const body = document.body;
    const sunIcon = document.querySelector('#themeSwitcher .fa-sun');
    const moonIcon = document.querySelector('#themeSwitcher .fa-moon');

    body.classList.toggle('dark-theme');
    
    // Toggle icon visibility
    if (body.classList.contains('dark-theme')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
}

