const fizzbuzz = (num) => {
    let arr = [0]
    for(let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            arr.push('fizzbuzz')
        } else if(i % 5 === 0) {
            arr.push('buzz')
        } else if(i % 3 === 0) {
            arr.push('fizz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

module.exports = fizzbuzz
