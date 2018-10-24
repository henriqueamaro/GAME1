/*
    Jogo: exemplo 1
	Autor: Felipe
	Contato: 98352-6454

*/
//cria uma variavel para que o navegador entenda como voce quer que execute
var game = new Phaser.Game(1200, 600,Phaser.AUTO, '',
{
	preload: preload,
	create: create,
	update: update
});
//criando uma variavel 
var spriteH;

//carrega os arquivos do jogo
function preload(){
	
	game.load.spritesheet('star', 'star.png');
	game.load.spritesheet('dimd', 'dimd.png');
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.stage.backgroundColor = '#008B8B';
	
	
	/*a função abaixo cria um objeto a partir da função criada abaixo (nao possui na PHASER)
	
	  com esta função nao tem a necessidade de rescrever a função inteira varias vezes
	*/
	
	setPositionHorizontal(100, 50, 250);
	setPositionHorizontal(100, -60, 350);
	setPositionHorizontal(100, 0, 450);
	setPositionHorizontal(100, 0, 550);
	
	setPositionVertical(100, 50, 150);
	setPositionVertical(100, -60, 250);
	setPositionVertical(100, 0, 350);
	setPositionVertical(100, 0, 450);
}

function update(){
	var  starPosition = spriteH.position.x;
	
	if(starPosition > 350){
		spriteH.kill();
		setPositionHorizontal(100, 80, 170);
	    setPositionHorizontal(100, -30, 270);
	    setPositionHorizontal(100, 40, 370);
		setPositionHorizontal(100, 70, 470);
		
		setPositionVertical(100, 50, 140);
	    setPositionVertical(100, -60, 240);
	    setPositionVertical(100, 0, 340);
	    setPositionVertical(100, 0, 440);
	}
	
	
}

//função que não possue no ARQUIVO PHASER (criada)
function setPositionHorizontal(gravity, posX, posY){
	
	spriteH = game.add.sprite(posX, posY, 'star', 2);
	game.physics.arcade.enable(spriteH);
	game.physics.arcade.gravity.x = gravity;
	
	
	
}

function setPositionVertical(gravity, posX, posY){
	
	spriteH = game.add.sprite(posX, posY, 'dimd', 2);
	game.physics.arcade.enable(spriteH);
	game.physics.arcade.gravity.x = gravity;
	
	
	
}
	
