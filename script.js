let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let textToSpeak = document.querySelector('textarea');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

function speakText() {
    speech.text = textToSpeak.value;
    speech.voice = voices[voiceSelect.value];
    window.speechSynthesis.speak(speech);
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});