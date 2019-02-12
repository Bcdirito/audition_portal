
// Runtime 96ms, Memory Usage 40.1MB

function palindromeCheck(str){
    if (str){
        // filter out all spaces and make all letters the same case
        let filtStr = s.toLowerCase().match(/[a-z]/g)
        // check if any letters left
        if (filtStr){
            return filtStr.join("") === filtStr.reverse().join("")
        } else {
            return false
        }  
    } else {
        return false
    }
}