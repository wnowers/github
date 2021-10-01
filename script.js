


// part 1
function computeForce() {
    let mass = parseFloat(document.getElementById('mass').value);
    let accel = parseFloat(document.getElementById('accel').value);
    let force = mass * accel;
    document.getElementById('result').innerHTML = force;
 }


// part 2
function computeAvgVelocity() {
    let velo = parseFloat(document.getElementById('initialVelo').value);
    let time = parseFloat(document.getElementById('timeInSeconds').value);
    let accel = parseFloat(document.getElementById('acceler').value);
    let displ = (velo * time) - (accel * Math.pow(time, 2));
    document.getElementById('result2').innerHTML = displ.toString();

}


// part 3
function computePrincipal() {
    let sideA = prompt("Enter first number", "0");
         sideA = parseFloat(sideA);
    let sideB = prompt("Enter second number", "0");
        sideB = parseFloat(sideB);
    let sideC = prompt("Enter thirds number", "0");
        sideC = parseFloat(sideC);
    
    let discrim = (Math.pow(sideB, 2) - 4 * sideA * sideC);
    
    if (discrim > 0){
        firstTri = (-1 * sideB + Math.sqrt(discrim))/(2 * sideA);
        secondTri = (-1 * sideB - Math.sqrt(discrim))/(2 * sideA);
    } else if (discrim < 0){
        firstTri = (-1 * sideB + Math.sqrt(discrim * -1))/ (2 * sideA);
        secondTri = (-1 * firstTri);
    
        document.getElementById('result3').innerHTML = firstTri.toString();
    document.getElementById('result4').innerHTML = secondTri.toString();
    }
}

// part 4
function computePresentValue() {
    let payment = prompt("Enter annuity payment", "0");
        payment = parseFloat(payment);
    let rate = prompt("Enter interest rate", "0");
        rate = parseFloat(rate);
    let period = prompt("Enter number of periods", "0");
        period = parseFloat(period);
    let value = payment * 1 - (1/Math.pow(1 + rate, period)/rate);

    document.getElementById('result5').innerHTML = value.toString();



}