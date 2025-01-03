var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

var helloFunction = createHelloWorld(); // Call the outer function to get the inner function
console.log(helloFunction()); // Call the inner function to get "Hello World"
