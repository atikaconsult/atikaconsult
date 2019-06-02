// rot13 : a Caesar cipher
// Encodes and decodes strings into the ROT13 format (rotation of the 26 characters of the alphabet by 13 positions).
String.prototype.rot13 = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
};