var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-area");
var outputdiv = document.querySelector("#output-div");

// console.log(btnTranslate);
var url = "https://api.funtranslations.com/translate/minion.json";
// var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

console.log(url);


console.log(outputdiv);
function clickHandler() {
    //console.log(textInput.value); 
    //console.log("clicked");
    // alert("you clicked ");
    var inputText = textInput.value;
    var finalURL = constructURL(inputText);
    // fetch(finalURL)
    //     .then(response => response.json())
    //     .then(json => {
    //         translateOutput.innerText = json.contents.translated;
    //     })
    //     .catch(() => alert("some error occured"))
    fetch(finalURL).then(response => response.json()).then(json =>
    // console.log(json))
    {   //outputdiv.innerText = textInput.value;
         outputdiv.innerText = json.contents.translated;
    }).catch(() => alert("some error occured"));

    //outputdiv.innerText = "  xyz is banana translation of " + textInput.value;
    //outputdiv.innerText= "The translation of "+textInput.value+"krishna";
}
btnTranslate.addEventListener("click", clickHandler)
function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    // return  encodedURI=encodeURI(url+"?text="+inputText)
    console.log(encodedURI);
    return `${url}?text=${encodeURI}`;
}



