//main.js
console.log("Starting Game");

var doNothing = function(){};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload : doNothing, create : doNothing, update : doNothing});
