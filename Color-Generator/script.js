document.addEventListener("DOMContentLoaded", function(){

    const hueInput = document.getElementById("hue");
    const saturationInput = document.getElementById("saturation");
    const lightnessInput = document.getElementById("lightness");

    const hueValueSpan = document.getElementById("hueValue");
    const saturationValueSpan = document.getElementById("saturationValue");
    const lightnessValueSpan = document.getElementById("lightnessValue");

    const colorDisplay = document.querySelector(".color-display"); 

    const copyButton = document.getElementById("copyButton");

    hueInput.addEventListener('input', updateColor);
    saturationInput.addEventListener('input', updateColor);
    lightnessInput.addEventListener('input', updateColor);

    updateColor();

    function updateColor(){
        const hue = hueInput.value;
        const saturation = saturationInput.value;
        const lightness = lightnessInput.value;

        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        colorDisplay.style.backgroundColor = color;

        hueValueSpan.textContent = hue;
        saturationValueSpan.textContent = saturation;
        lightnessValueSpan.textContent = lightness;
    }

    copyButton.addEventListener("click", copyToClipboard);

    function copyToClipboard(){
        const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;
        console.log("Attempting to copy:", textToCopy);

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(function(){
                alert("The color is copied to Clipboard");
                console.log("Copy successful");
            }).catch(function(err){
                console.error("Unable to Copy the Data", err);
            });
        } else {
            console.warn("Clipboard API not supported or available");
            fallbackCopyTextToClipboard(textToCopy);
        }
    }

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            alert("Fallback: Copying text command was " + msg);
            console.log("Fallback: Copying text command was " + msg);
        } catch (err) {
            console.error('Fallback: Unable to copy', err);
        }

        document.body.removeChild(textArea);
    }
});
