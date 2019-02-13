// Runtime 72 ms, Memory Usage 34.5 mb

function validSquare(num) {
    let n = 1
    while (n * n <= num){
        if (n * n === num){
            return true
        } else if (n * n < num){
            n++
        }
    }
    return false
};
