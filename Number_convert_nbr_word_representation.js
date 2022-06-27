//Write code to convert a given number into words. For example, if “1234” is given as input, output should be “one thousand two hundred thirty four”.

// JavaScript program to document.write a given number in
// words. The program handles numbers
// from 0 to 9999

// A function that document.writes
// given number in words
function convert_to_words(num) {

    // Get number of digits
    // in given number
    let l = num.length

    // Base cases
    if (l == 0) {
        document.write("empty string", "</br>")
        return
    }

    if (l > 4) {
        document.write("Length more than 4 is not supported", "</br>")
        return
    }

    // The first string is not used,
    // it is to make array indexing simple
    let single_digits = ["zero", "one", "two", "three",
        "four", "five", "six", "seven",
        "eight", "nine"
    ]

    // The first string is not used,
    // it is to make array indexing simple
    let two_digits = ["", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen",
        "nineteen"
    ]

    // The first two string are not used,
    // they are to make array indexing simple
    let tens_multiple = ["", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty",
        "ninety"
    ]

    let tens_power = ["hundred", "thousand"]

    // Used for debugging purpose only
    document.write(num, ":", " ")

    // For single digit number
    if (l == 1) {
        document.write(single_digits[num.charCodeAt(0) - 48], "</br>")
        return
    }

    // Iterate while num is not '\0'
    let x = 0
    while (x < num.length) {

        // Code path for first 2 digits
        if (l >= 3) {
            if (num.charCodeAt(x) - 48 != 0) {
                document.write(single_digits[num.charCodeAt(x) - 48], " ")
                document.write(tens_power[l - 3], " ")
                // here len can be 3 or 4
            }

            l -= 1
        }

        // Code path for last 2 digits
        else {

            // Need to explicitly handle
            // 10-19. Sum of the two digits
            // is used as index of "two_digits"
            // array of strings
            if (num.charCodeAt(x) - 48 == 1) {
                sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x + 1) - 48)
                document.write(two_digits[sum], "</br>")
                return
            }

            // Need to explicitly handle 20
            else if (num.charCodeAt(x) - 48 == 2 &&
                num.charCodeAt(x + 1) - 48 == 0) {
                document.write("twenty", "</br>")
                return
            }

            // Rest of the two digit
            // numbers i.e., 21 to 99
            else {
                i = num.charCodeAt(x) - 48
                if (i > 0)
                    document.write(tens_multiple[i], end = " ")
                else
                    document.write("", end = "")
                x += 1
                if (num.charCodeAt(x) - 48 != 0)
                    document.write(single_digits[num.charCodeAt(x) - 48], "</br>")
            }
        }
        x += 1
    }

}

// Driver Code
convert_to_words("9923") // Four Digits
convert_to_words("523") // Three Digits
convert_to_words("89") // Two Digits
convert_to_words("8") // One Digits
