module.exports = {
  fruit: "apple",
  vegetable: "lettuce",
  howMuch: function cost() {
    console.log("My favorite thing to eat is " + this.fruit);
    var privateVar = function(){
      myPrivateVar = 25
     }
  }
}

