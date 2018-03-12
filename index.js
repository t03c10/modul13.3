process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/node-ver':
                process.stdout.write('Node version is: ' + process.versions.node + '\n');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sys-lang':
                process.stdout.write('System language is ' + process.env.lang + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                process.exit();
        }
    }
});