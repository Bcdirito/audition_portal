// Runtime 108 ms, Memory Usage 35.8 mb

function reverseInt(x) {
    let i;
    x < 0 ? i = -1 : i = 1
    let revStr = String(Math.abs(x)).split("").reverse().join("")
    let revNum = Number(revStr) * i
    if(revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1){
      return 0  
    } else {
      return revNum   
    }
}