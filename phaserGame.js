var game;

var doNothing = function() {};

var mainMenu = function(game){};

mainMenu.prototype = {
    preload : function(){
    	game.load.image('mainMenuBG', 'assets/mainMenu/bg.png');
    	game.load.image('mainMenuButton', 'assets/mainMenu/button.png');},

    create : function(){
	game.add.sprite(0,0,'mainMenuBG');
	var button = game.add.sprite(325,450,'mainMenuButton');
	button.inputEnabled = true;
	button.events.onInputDown.add(this.toGame, this)},

    update : function(){;},
    toGame : function(){
	game.state.start('game', true, true);
}
};

var gameState = function(game){};

gameState.prototype = {
    preload:  function(){;},
    create :  function(){;},
    update :  function(){;}
};


(function () {
    // Create game instance and connect init, create and update methods
    game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload : doNothing, create : doNothing, update : doNothing});
    game.state.add('game', gameState, false);
    game.state.add('mainMenu', mainMenu, false);
    game.state.start('mainMenu', true, true);
})();
