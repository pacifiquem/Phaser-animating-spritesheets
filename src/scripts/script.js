let config = {
    type: Phaser.AUTO,
    parent: 'phaser-animating-spritesheets',
    width: 320,
    height: 480,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

var capguy;
var background;

function preload()
{
    this.load.multiatlas('cityscene', 'assets/sprites.json', 'assets');
}

function create ()
{
    background = this.add.sprite(0, 0, 'cityscene', 'background.png');

    capguy = this.add.sprite(0, 220, 'cityscene', 'dude1.png');
    capguy.setScale(0.5, 0.5);

    var frameNames = this.anims.generateFrameNames('cityscene', {
        start: 1, end: 8, zeroPad: 4,
        prefix: 'dude', suffix: '.png'
    });

    this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
    capguy.anims.play('walk');

}


function update(time, delta){
    capguy.x += delta/8;
    if(capguy.x > 320)
    {
        capguy.x = 0;
    }
}