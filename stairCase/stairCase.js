function stairCase(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < (n - i - 1); j++) {
            process.stdout.write(" ")
        }
        for (let j = 0; j < n - (n - i - 1); j++) {
            process.stdout.write("#")
        }
        process.stdout.write("\n")
    }
}

stairCase(7)