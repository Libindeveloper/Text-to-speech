var speech = new SpeechSynthesisUtterance();
var text = document.getElementById("text")

function speak() {

    if (text.value == "")

        alert("Please Enter your texts..")


    speech.text = text.value;
    speech.rate = 1;
    speech.value = 50;
    speech.pitch = 10;

    window.speechSynthesis.speak(speech);
}
function clr() {
    text.value = "";
}

