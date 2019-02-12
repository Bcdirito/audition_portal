
// Runtime 96ms, Memory Usage 40.1MB

function palindromeCheck(str){
    if (str){
        let filtStr = s.toLowerCase().match(/[a-z0-9]/g)
        if (filtStr){
            return filtStr.join("") === filtStr.reverse().join("")
        } else {
            return false
        }  
    } else {
        return false
    }
}