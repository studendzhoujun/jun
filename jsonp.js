'use strict';
function jsonp(json){
 // ---
	json=json||{};
	if(!json.url)return;
	json.date=json.date||{};
	json.cbName=json.cbName||'cb';

	json.date[json.cbName]='show'+Math.random();
	json.date[json.cbName]=json.date[json.cbName].replace('.','');

 //change
	var arr=[];
	for(var i in json.date){
		arr.push(i+'='+encodeURIComponent(json.date[i]));
	}
	var str=arr.join('&');
   
 //call back
   window[json.date[json.cbName]]=function(result){
                   json.success&&json.success(result);
                   oH.removeChild(oS);
                   window[json.date[json.cbName]]=null;
   };

   //create script
	var oS=document.createElement('script');
	oS.src=json.url+'?'+str;
	var oH=document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}