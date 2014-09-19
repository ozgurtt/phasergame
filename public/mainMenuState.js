var game = game ? game : {};

game.MainMenuState = function(game){};

game.MainMenuState.prototype = {

	preload : function(){
		game.load.image('mainMenuBG', 'assets/mainMenu/bg.png');
		game.load.image('mainMenuButton', 'assets/mainMenu/button.png');},

	create : function(){
		game.add.sprite(0,0,'mainMenuBG');
		var button = game.add.sprite(325,450,'mainMenuButton');
		button.inputEnabled = true;
		button.events.onInputDown.add(this.toGame, this)
	},

	update : function(){;},

	toGame : function(){
		game.state.start('game', true, true);
	}
};

game.state.add('mainMenu', game.MainMenuState);
