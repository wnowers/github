function genPassword(){
    let setLength = document.getElementById("passLength").value;
    let withUpper = document.getElementById("uppercheck");
    let withLower = document.getElementById("lowercheck");
    let withNumber = document.getElementById("numbercheck");

    let password = "";
    let lowerlets = "abcdefghijklmnopqrstuvwxyz";
    let letsLength = lowerlets.length;
    let upperlets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let upperLength = upperlets.length;

    let randNum = "0123456789";
    let randNumLength = randNum.length;
    
    while(password.length < setLength) {
        if(withUpper.checked){
            for(let i = 1; i < Math.round(setLength/2); i++){
                password += upperlets.charAt(parseInt(Math.random() * upperLength));
            }
           }
         if (withLower.checked && password.length < setLength){
             for(let i = 1; i < Math.round(setLength/2); i++){
                password += lowerlets.charAt(parseInt(Math.random() * letsLength));
             }
          }       
          if (withNumber.checked && password.length < setLength){
              for(let i = 1; i < Math.round(setLength/2); i++){
                password += randNum.charAt(parseInt(Math.random() * randNumLength));
              }
          }
         document.getElementById("printHere").innerHTML = password.toString();
    }
           
} // end function