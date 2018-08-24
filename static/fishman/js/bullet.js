
function Bullet(img, type)
{
	Sprite.call(this, img);
	
	var size=[
		null,
		{w: 23, h: 26, sx: 86, sy: 0},	//1
		{w: 25, h: 29, sx: 61, sy: 0},	//2
		{w: 27, h: 31, sx: 32, sy: 35},	//3
		{w: 29, h: 33, sx: 30, sy: 82},	//4
		{w: 30, h: 34, sx: 0, sy: 82},	//5
		{w: 32, h: 38, sx: 0, sy: 44},	//6
		{w: 31, h: 35, sx: 30, sy: 0}	//7
	];
	
	this.sx=size[type].sx;
	this.sy=size[type].sy;
	this.w=size[type].w;
	this.h=size[type].h;
	
	this.speed=7+count;
}

Bullet.prototype=new Sprite();
Bullet.prototype.constructor=Bullet;











