function sockMerchant(ar) {
    let sockObj = {}

    for (let i = 0; i < ar.length; i++){
        if (sockObj[ar[i]]) {
            sockObj[ar[i]] += 1
        } else {
            sockObj[ar[i]] = 1
        }
    }

    let keys = Object.values(sockObj)
    let finalPairVal = 0
    for (let i = 0; i < keys.length; i++){
        if (keys[i] >= 2) {
            finalPairVal += Math.floor(keys[i] / 2)
        }
    }
    return finalPairVal
}