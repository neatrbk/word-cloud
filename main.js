//document.getElementById('text-input').value = "test test test test fun tun tun a the this";

(function() {
     //test data
     document.getElementById("text-input").value = "test test test test test go go go apple apple apple apple";
     document.getElementById("size-input").value = 3; 

    let state = {
        text: null,
        size: null,
        wordCount: {}
    };  

    let goButton = document.getElementById("text-submit");
    let textInput = document.getElementById("text-input");
    let sizeInput = document.getElementById("size-input");

    let startApp = () => {
     
            state.text = textInput.value;
            state.size = sizeInput.value;

            if(!state.text) {
                alert("you need to put some text in!");
                throw("no text was entered");
            }

            state.wordcount = getWordCount(state.text); 
            console.log(state);
            buildCloud(state.wordcount, '#cloudContainer', state.size);
        }

    goButton.addEventListener("click", startApp);

    textInput.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            startApp();
        }
    });

    sizeInput.addEventListener('keydown', (e) => {
        let re = /^\d+$/

        if(!re.test(e.char) ) {
           //flagError("We can only accept numbers homie"); 
        }

        if(e.key = "Enter") {
            startApp();
        }
        else {
            state.size = this.value;
        }
    });


})();