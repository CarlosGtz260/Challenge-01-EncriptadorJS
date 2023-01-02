
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


