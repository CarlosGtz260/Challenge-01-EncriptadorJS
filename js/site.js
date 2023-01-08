const resultDiv = 
    "<div class='result-container'>"+
        "<textarea id='outputText'></textarea>"+
    "</div>"+
    "<div class='button-container'>"+
        "<button id='btnCopy' onclick='copy()' order='2'>Copiar</button>"+
    "</div> ";

function eliminarDiacriticos(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}


function encrypt(text){
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");    
    return text;
}


function decrypt(encrypted){
    encrypted = encrypted.replace(/enter/g, "e");   
    encrypted = encrypted.replace(/imes/g, "i");   
    encrypted = encrypted.replace(/ai/g, "a");   
    encrypted = encrypted.replace(/ober/g, "o");   
    encrypted = encrypted.replace(/ufat/g, "u");   
    return encrypted;
}

function init(type){
    var inputText = eliminarDiacriticos(document.querySelector("#inputText").value);
    var outputText = "";
    if(inputText != "" && inputText != undefined){
        if(type == 0){
            outputText = encrypt(inputText);
        }else{
            outputText = decrypt(inputText);
        }
        showResult(outputText);
    }
}


function showResult(outputText){
    const previewDiv = document.getElementById('preview');
    if(previewDiv != null && previewDiv != undefined){
        previewDiv.remove();
        insertElement("outputMsg", resultDiv);
    }
    var outputTextArea =  document.querySelector("#outputText");
    outputTextArea.value = outputText;
}

function insertElement(parentId,element){
    const parent = document.getElementById(parentId);
    parent.innerHTML = element;
}

function copy(){
      // Get the text field
    var copyText =  document.getElementById("outputText");
    if(copyText!= null && copyText!= undefined){
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("Texto copiado: " + copyText.value);
    }

}



