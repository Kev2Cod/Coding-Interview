// function isPalindrome(value) {
//     let temp = ""

//     for (let i = value.length - 1; i >= 0; i--) {
//         temp = temp + value.charAt(i)
//     }
//     console.log(temp)
//     console.log(value === temp)
//     return value === temp

// }

// isPalindrome("kodok")

// Tampa menggunakan temporary
function isPalindrome(value) {
    for (let i = 0; i < value.length; i++) {
        // console.log(i, " : ", value.length - i - 1)

        let indexAwal = i;
        let indexAkhir = value.length - i - 1
        if (value.charAt(indexAwal) !== value.charAt(indexAkhir)) {
            console.log(false)
            return false
        }
    }

    console.log(true)

    return true
}

isPalindrome("kodok")