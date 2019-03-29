// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if(input === undefined) {
        return "Hello, World!";
    } if(input === true) {
        return "Hello, World!";
    } if(input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}