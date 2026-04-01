for (x = 1; x <= 20; x++) {

    if (x % 3 === 0 || x % 5 === 0) {
        if (x % 3 === 0) {
            document.writeln("Fizz")
        }
        if (x % 5 === 0) {
            document.writeln("Buzz")
        }
    } else {
        document.writeln(x)
    }
    document.writeln("<br><br/>")
}