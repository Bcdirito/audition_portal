// Runtime 100ms, Memory Usage 39.8MB
// Check outside in

function palindromeCheck(str) {
    if (str){
        // filter out punctuation and spaces
        // change all letters to lower case so they can match if same letter
        let filtStr = str.toLowerCase().match(/[a-zA-Z]/g) 
        // join into one string
        filtStr = filtStr.join("")
        if (filtStr.length % 2 === 0){
            let midIndex = (filtStr.length / 2) - 1
        } else {
            let midIndex = (filtStr.length - 1) / 2
        }
        // filter through the string
        for (let i = 0; i < filtStr.length; i++){
            // declare variable to check last index
            let l = i + 1
            // check if letters in opposite positions match
            if (filtStr[i] !== filtStr[filtStr.length - l]){
                // letters don't match, so string isn't palindrome
                return false
            }

        }
        // if run through whole process, it should be true.
        return true 
            
    } else {
        return false
    }  
}