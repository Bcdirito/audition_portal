// Runtime 92 ms, Memory Usage 35.8 mb

function reverseInt(x){
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    const absValStr = String(Math.abs(x))
    const arr = absValStr.split("")
    let finalVal = ""
    let finalNum;
    let i = 1
    while (i <= arr.length){
        finalVal += arr[arr.length - i]
        i++
    }
    finalNum = Number(finalVal)
    if (x > 0 && finalNum < max){
        return finalNum
    } else if (x < 0 && -finalNum > min) {
        return -finalNum
    } else {
        return 0
    }
}
    