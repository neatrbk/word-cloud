//document.getElementById('text-input').value = "test test test test fun tun tun a the this";

(function() {

    let state = {
        text: null,
        size: null
    };  

    let goButton = document.getElementById("text-submit");
    let textInput = document.getElementById("text-input");
    let sizeInput = document.getElementById("size-input");

    let startApp = () => {
            let text = textInput.value;
            let wordcount = {};

            if(!text) {
                alert("you need to put some text in!");
                throw("no text was entered");
            }

            wordcount = getWordCount(text); 
            buildCloud(wordcount, '#cloudContainer');
        }

    goButton.addEventListener("click", startApp);

    textInput.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            startApp();
        }
    });

    sizeInput.addEventListener('keydown', )


})();