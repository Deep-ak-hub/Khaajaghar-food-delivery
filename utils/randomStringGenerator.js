const randomStringGenerator = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const len = chars.length
    let random = ""
    for(let i = 0; i < length; i++) {
        let position = Math.ceil(Math.random() * (len -1))
        random += chars[position]
    }
    return random
}

module.exports = {randomStringGenerator}