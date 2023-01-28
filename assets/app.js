
function CalculateBmi(weight, height){

    if( weight > 0 && height > 0 ) {

    let value = weight / ((height/100)**2);
    return value.toFixed(2) 
}
}

function toCalculate(weight, height, result) {
    document.getElementById("result").innerHTML = CalculateBmi(weight, height)
    document.getElementById("standard").innerHTML = toCheck(CalculateBmi(weight, height))
}

function toCheck(result) {
    let value = '';

    if(result >=30) {
        value = "โรคอ้วนอันตราย"
    }else if(result >=25) {
        value = "โรคอ้วน"
        }else if(result >=23) {
            value = "น้ำหนักเกิน"      
            }else if(result >=18.5) {
                value = "น้ำหนักปกติเหมาะสม"   
    }else{
        value = "น้ำหนักต่ำกว่าเกณฑ์"
    }
    return value
}


// var result = function(CalculateBmi) {
//     CalculateBmi.result = CalculateBmi.result 
//     console.log(result)
// }