function rotLeft(a, d) {
    // get array slice that will be rotated to the end
    // start at the beginning
    let arr1 = a.slice(0, d)

    // get array slice that will be rotated to the beginning
    let arr2 = a.slice(d, a.length)
    
    // concat the two arrays into one array matching the original length
    return arr2.concat(arr1)
}
