function encodeAndDecodeMessages() {
    let encodeText = document.getElementsByTagName('textarea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeText = document.getElementsByTagName('textarea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encoding);
    decodeBtn.addEventListener('click', decoding);
    function encoding() {
        let newText = "";
        for (const char of encodeText.value) {
            newText += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        decodeText.value = newText;
        encodeText.value = "";
        decodeBtn.disabled = false;
    }
    function decoding() {
        let newText = "";
        for (const char of decodeText.value) {
            newText += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        decodeText.value = newText;
        encodeText.value = "";
        decodeBtn.disabled = true;
    }

}