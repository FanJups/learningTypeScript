var message = "Hello World TypeScriptt";
console.log(message);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World by Fan Jups!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
