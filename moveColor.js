function Sport(obj){
		  if(!obj)return;
          this.obj=obj;
          this.type='linear';  //linear  ......
          this.speed=4;
          this.left=0;
          this.top=0;
	}
	Sport.prototype.tanmove=function(iTarget){
		var _this=this;
             setInterval(function(){
             	_this.speed+=(iTarget-_this.left)/5;
             	_this.speed*=0.7;
             	_this.left+=_this.speed;
             	_this.obj.style.left=_this.left+'px';
             },16)
	};

	function ChangeColor(){
		Sport.apply(this,arguments);
		

	};
	ChangeColor.prototype=new Sport();
	ChangeColor.prototype.constructor=ChangeColor;
	var oldmove=ChangeColor.prototype.tanmove;
	ChangeColor.prototype.color=function(color,iTarget){
		oldmove.call(this,iTarget)
		this.color=color;
		this.obj.style.background=this.color;
	};