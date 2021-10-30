function d2bCode(){ 
    let input = prompt("Enter a who integer: ", "1234");
    let s="", bin="";
    let ans = "";
    while(input >= 1){
        s = input%2;
        input = parseInt(input/2)
        bin += s;
    }
    for(let i = bin.length - 1; i >= 0; i--){
        ans += bin[i];
    }
    document.getElementById("binaryoutput").innerHTML = ans.toString();

    
}
function b2dCode(){
    let input = prompt("Enter a binary value: ", "1010"); 
    let length = input.length;
    let exp = length - 1;
    let sum = 0;
    let v;
    for(let x = 0; x < length; x++){
        v = parseInt(input[x]);
        sum += v + Math.pow(2, exp);
        exp--;
    }
    document.getElementById("binaryoutput").innerHTML = sum.toString();

}

    function stringEncrypt(){
 
        let input = document.getElementById("userinput").value;
        let passCode = "password";

        if (input == null || input.length == 0 || input == ""){
            alert("Please enter a string to be encrypted");
            alert("Please try again");

        } else {
         let aesEncrypt = CryptoJS.AES.encrypt(input, passCode);
         let sha1Encrypt = CryptoJS.SHA1(input, passCode);
         let sha224Encrypt = CryptoJS.SHA224(input, passCode);
         let shaa256Encrypt = CryptoJS.SHA256(input, passCode);

         document.getElementById("aesenc").innerHTML = aesEncrypt.toString();
         document.getElementById("sha1enc").innerHTML = sha1Encrypt.toString();
         document.getElementById("sha224enc").innerHTML = sha224Encrypt.toString();
         document.getElementById("sha256enc").innerHTML = shaa256Encrypt.toString();
        }
    }

    function print(){
        let toPrint = document.getElementById("userinput").value;

        document.getElementById("printHere").innerHTML = toPrint.toString();
    }