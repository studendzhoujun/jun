
function loadImages(json, fn)
{
	var count=0;	//完成
	var len=0;		//总共
	
	var result={};	//存结果
	
	for(var name in json)
	{
		var oImg=new Image();
		result[name]=oImg;
		
		len++;
		
		oImg.src=json[name];
		oImg.onload=function ()
		{
			count++;
			
			if(count==len)
			{
				fn(result);
			}
		};
	}
}

function d2a(n)
{
	return n*Math.PI/180;
}
function a2d(n)
{
	return n*180/Math.PI;
}

function rnd(n, m)
{
	return Math.floor(Math.random()*(m-n))+n;
}