var powerFunc0;
var powerFuncR;
var powerFuncL;
var powerFuncD;
var powerFuncU;
var speed = 200
var speedAngry = 190
window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');
	var angryLength
	var timeLet
	var angrySide
	var aLengthRandom
	var ang
var stopD
var stopR
var stopU
var stopL
var stopMove
var stopMove2
var clearExtr
	//var test1 = document.getElementById("test1")
	var test2 = document.getElementById("test2")
	var test3 = document.getElementById("test3")
	var test4 = document.getElementById("test4")
	var test5 = document.getElementById("test5")
var button1 = document.getElementById("but1")
var button2 = document.getElementById("but2")
var button3 = document.getElementById("but3")
var button4 = document.getElementById("but4")
var button0 = document.getElementById("but0")
	var elems = document.getElementsByTagName("img")
	var divTeg = document.getElementById("divTeg")
	var test3a = document.getElementById("test3a")
	var dsetLeft = Number(test1.dataset.left)
	var dsetTop = Number(test1.dataset.top)
var testMove = 3
var maskGreen = document.getElementById("maskGreen")
var maskRed = document.getElementById("maskRed")
var maskE = maskEffect()
var le = document.getElementById("level")
	var lev1
	var lev2 = 0
var angryBorderLeft = document.getElementById("angryBorderLeft")
var angryBorderRight = document.getElementById("angryBorderRight")
var angryBorderTop = document.getElementById("angryBorderTop")
var angryBorderBottom = document.getElementById("angryBorderBottom")

	var circleGreen1 = document.getElementById("circleGreen1")
	var circleGreen2 = document.getElementById("circleGreen2")
	var butopen = document.getElementById("butopen")
	var abLeft = 10
	var abTop = 10
	var circleMoveTime = 2000
	var angryBlockTime = 10000
	var next
	var next2
	var elems1
	var stopPusk
	var stopAngryBorder
var stopAngryBlock
var arrBlackLeft = []
var arrBlackTop = []
var arrBlackNum = 6
var angrcheck = 1
	ctx.beginPath() /* --СЕТКА-- */
	ctx.lineWidth = 1
	ctx.strokeStyle = "rgba(250,235,215,1)"
	for (var i = 0; i <=550; i=i+10) {
		ctx.moveTo(0,i)
		ctx.lineTo(350,i)
		ctx.moveTo(i,0)
		ctx.lineTo(i,550)
	}
	ctx.stroke()
	
	
	//circleGreen()
	/*window.setInterval(function() {
	    var min = 0
	    var max = 5
		var angryBlockArray = [50000, 120000, 160000, 30000, 100000, 130000]
		var rand = Math.floor(Math.random()*(max-min+1))+min
		angryBlockTime = angryBlockArray[rand]
		
	}, angryBlockTime+2000)*/
	
function pusk() {
	var now = (new Date).getTime();
  	if( next  &&  next > now) return;
  		next = now + circleMoveTime;
		circleMove()
	var circleMoveArray = [10000,7000]//[30000, 40000, 20000, 10000, 7000]
	var min = 0
	var max = 6
		circleGreen1.style.display = "inline"
				window.setTimeout(function() {
	    		circleGreen1.style.display = "none"
	    		circleGreen1.style.left = "-20px"
				circleGreen1.style.top = "-20px"
	    		}, 10000)
	    var rand = Math.floor(Math.random()*(max-min+1))+min;
	    circleMoveTime = circleMoveArray[rand];
	}
button0.onkeydown = press
	function press(event){
		
	var code = event.keyCode

	if(code==38){	
	powerFuncU()
	} else if(code==39){	
	powerFuncR()
	} else if(code==37){	
	powerFuncL()
	} else if(code==40){	
	powerFuncD()
}
}			

powerFunc0 =function func0(){
  //button0.disabled = true
  button0.style.opacity = "0"
  butopen.style.opacity = "0"
/*stopAngryBlock = window.setInterval(function() {
	var now2 = (new Date).getTime();
  	if( next2  &&  next2 > now2) return;
		next2 = now2 + angryBlockTime;
		var min = 0
	    var max = 5
		var angryBlockArray =[110000, 110000] //[50000, 120000, 160000, 30000, 100000, 130000]
		var rand = Math.floor(Math.random()*(max-min+1))+min
		angryBlockTime = angryBlockArray[rand]
  		var stopAngryBlock2 = window.setInterval(angryBlock,200)
  		window.setTimeout(function() {
  			ctx3.clearRect(0,0,ctx3.canvas.width, ctx3.canvas.height)
  			clearInterval(stopAngryBlock)
  	}, 99000)
  }, angryBlockTime)*/
  stopAngryBlock = window.setInterval(angryBlock,speedAngry)
 stopPusk = window.setInterval(pusk, 6000)
clearExtr = window.setInterval(extr, 1)
  window.setTimeout(move, 1)
  if(angrcheck===1){
  angrcheck = 0
  window.setTimeout(angryAnima,1)
  }
 // window.setTimeout(circleGreen, 1)
  window.setInterval(circleGreen, 1) /*Движение зеленого круга*/
  stopFunc1 = window.setInterval(func1, 10000)
  stopFunc5 = window.setInterval(func5, 5000)
  stopFuncx = window.setInterval(funcx, 2)
  stopFunctest =window.setInterval(funcTest, 1)
  if(Number(button0.value)==0){
	stopR=window.setInterval(funcR1, 200)
	   button1.value = "0"
	   button2.value = "0"
	   button3.value = "0"
	   button4.value = "0"
	   button0.value = "1"
	//stopFunctest =window.setInterval(funcTest, 1000)
}}
function move() {

	stopMove = window.setInterval(function() {
	
	ctx2.clearRect(0,0,ctx2.canvas.width, ctx2.canvas.height)
		if(testMove===1){
			if (dsetLeft<342) {
			dsetLeft= dsetLeft + 10
			ctx2.beginPath()
			ctx2.rect(dsetLeft,dsetTop,11,11)
			ctx2.lineWidth = 2
			ctx2.fillStyle = "black"
			ctx2.fill()
			ctx2.strokeStyle = "red"
			ctx2.stroke()
			//test1.style.left = dsetLeft+"px"
			test1.dataset.left = dsetLeft
			} else if(dsetLeft>342){
			dsetLeft = 0
			maskE.red()
			} else if (dsetLeft<-2) {
			dsetLeft = 340
			maskE.red()
			} else if (dsetTop>542) {
			dsetTop = 0
			maskE.red()
			} else if (dsetTop<-2) {
			dsetTop = 550
			maskE.red()
			}
		} else if (testMove===2) {
			if (dsetLeft>-2) {
			dsetLeft= dsetLeft - 10
			//test1.style.left = dsetLeft+"px"
			ctx2.beginPath()
			ctx2.rect(dsetLeft,dsetTop,11,11)
			ctx2.lineWidth = 2
			ctx2.fillStyle = "black"
			ctx2.fill()
			ctx2.strokeStyle = "red"
			ctx2.stroke()
			/*} else {
			dsetLeft = 340
			maskE.red()
			}*/
			} else if(dsetLeft>342){
			dsetLeft = 0
			maskE.red()
			} else if (dsetLeft<-2) {
			dsetLeft = 340
			maskE.red()
			} else if (dsetTop>542) {
			dsetTop = 0
			maskE.red()
			} else if (dsetTop<-2) {
			dsetTop = 550
			maskE.red()
			}
		} else if (testMove===3) {
			if (dsetTop>-2) {
			dsetTop= dsetTop - 10
			//test1.style.top = dsetTop+"px"
			ctx2.beginPath()
			ctx2.rect(dsetLeft,dsetTop,11,11)
			ctx2.lineWidth = 2
			ctx2.fillStyle = "black"
			ctx2.fill()
			ctx2.strokeStyle = "red"
			ctx2.stroke()
			test1.dataset.top = dsetTop
			/*} else {
			dsetTop = 550
			maskE.red()
			}*/
			} else if(dsetLeft>342){
			dsetLeft = 0
			maskE.red()
			} else if (dsetLeft<-2) {
			dsetLeft = 340
			maskE.red()
			} else if (dsetTop>542) {
			dsetTop = 0
			maskE.red()
			} else if (dsetTop<-2) {
			dsetTop = 550
			maskE.red()
			}
		} else if (testMove===4) {
			if (dsetTop<542) {
			dsetTop= dsetTop + 10
			//test1.style.top = dsetTop+"px"
			ctx2.beginPath()
			ctx2.rect(dsetLeft,dsetTop,11,11)
			ctx2.lineWidth = 2
			ctx2.fillStyle = "black"
			ctx2.fill()
			ctx2.strokeStyle = "red"
			ctx2.stroke()
			test1.dataset.top = dsetTop
			/*} else {
			dsetTop = 0
			maskE.red()
			}*/
			} else if(dsetLeft>342){
			dsetLeft = 0
			maskE.red()
			} else if (dsetLeft<-2) {
			dsetLeft = 340
			maskE.red()
			} else if (dsetTop>542) {
			dsetTop = 0
			maskE.red()
			} else if (dsetTop<-2) {
			dsetTop = 550
			maskE.red()
			}
			}
	}, speed)
	
}

function maskEffect() {						/*Анимация зеленый и красный фон*/
	return { green: function() {
		window.setTimeout(function() {
			maskGreen.style.opacity = "0.5"
		}, 1)
		window.setTimeout(function() {
			maskGreen.style.opacity = "0"
		}, 500)
		},
		red: function() {
		window.setTimeout(function() {
			maskRed.style.opacity = "0.5"
		}, 1)
		window.setTimeout(function() {
			maskRed.style.opacity = "0"
		}, 500)
		le.value = lev2 - 1
		lev2 = +le.value
		}
		}	
}



powerFuncL = function funcL(){
	if(testMove!==1&&dsetTop<=540&&dsetTop>=0){
 	testMove = 2
 	}
}


powerFuncD = function funcD(){
  	if (testMove!==3&&dsetLeft<=340&&dsetLeft>=0){
  	testMove = 4
  	}
}


powerFuncU = function funcU(){
	if(testMove!==4&&dsetLeft<=340&&dsetLeft>=0){
  	testMove = 3
  	}
}


powerFuncR = function funcR(){
	if(testMove!==2&&dsetTop<=540&&dsetTop>=0){
 	testMove = 1
  	}
}


function func1(){
  test3.style.opacity = "1"
  test3a.style.opacity = "1"
	var boxL = []
	var boxT = []
		for (var i=0, j=0; i<=34, j<=340; i++, j=j+10) {
			boxL[i]=j
		}
		for (var i2=0, j2=0; i2<=54, j2<=540; i2++, j2=j2+10) {
			boxT[i2]=j2
		}
			  var min = 0
			  var max = 54
	 var	 l = Math.floor(Math.random()*(max-min+1))+min
	 var  t = Math.floor(Math.random()*(max-min+1))+min
	 var	 l1 = Math.floor(Math.random()*(max-min+1))+min
	 var  t1 = Math.floor(Math.random()*(max-min+1))+min
		test3.style.left=boxL[l]+"px"
		test3.style.top =boxT[t]+"px"
		test3a.style.left=boxL[l1]+"px"
		test3a.style.top =boxT[t1]+"px"
}



function funcTest(){			/*Анимация взрыва*/
 
	var aaa3 = test3a.style.left
	    aaa3 = Number(aaa3.slice(0,-2))
	
	var aaa3a = test3a.style.top
	    aaa3a = Number(aaa3a.slice(0,-2))
	    
	var yyy = dsetLeft
	    
	
	var yyy3 = test3.style.left
	    yyy3 = Number(yyy3.slice(0,-2))
	
	var zzz = dsetTop
	
	
	var zzz3 = test3.style.top
	    zzz3 = Number(zzz3.slice(0,-2))
	
	if(yyy==yyy3 && zzz==zzz3 && Number(test3.style.opacity)==1){ /*||(abLeft===dsetLeft&&abTop===dsetTop)){*/
			lev1=Number(le.value)
			test5.style.left= yyy+"px"
		  	test5.style.top = zzz+"px"
		  	test5.style.visibility = ""
		  	
			setTimeout(function(){
				test5.style.visibility = "hidden"
				lev2= lev1+1
			  	le.value=lev2
			 	funcNew()
			 },1000)	
			 	
			test3.style.opacity = "0"
			
	}
	if ( yyy==aaa3 && zzz==aaa3a && Number(test3a.style.opacity ==1)){
			lev1=Number(le.value)
			test5.style.left= yyy+"px"
		  	test5.style.top = zzz+"px"
		  	test5.style.visibility = ""
		  	
			setTimeout(function(){
				test5.style.visibility = "hidden"
				lev2= lev1+1
			  	le.value=lev2
				funcNew()
			 },1000)	
			 
			test3a.style.opacity = "0"
	}
}



function circleGreen(){					/*Зеленый круг*/
    
	var aaa3 = circleGreen2.style.left
	    aaa3 = Number(aaa3.slice(0,-2))
	
	var aaa3a = circleGreen2.style.top
	    aaa3a = Number(aaa3a.slice(0,-2))
	    
	var yyy = dsetLeft
	   
	
	var yyy3 = circleGreen1.style.left
	    yyy3 = Number(yyy3.slice(0,-2))
	
	var zzz = dsetTop
	
	var zzz3 = circleGreen1.style.top
	    zzz3 = Number(zzz3.slice(0,-2))

	if(yyy==yyy3 && zzz==zzz3 && Number(circleGreen1.style.opacity)==1){
			lev1=Number(le.value)
			test5.style.left= yyy+"px"
		    test5.style.top = zzz+"px"
		    test5.style.visibility = ""
			setTimeout(function(){
				test5.style.visibility = "hidden"
				lev2= lev1+5
			    le.value=lev2
			    for (var i = 0; i < 3; i++) {
			    	funcNew()
			    }
				},1000)	
			    
			circleGreen1.style.opacity = "0"
			maskE.green()
	}
	
	if ( yyy==aaa3 && zzz==aaa3a && Number(circleGreen2.style.opacity ==1)){
			lev1=Number(le.value)
			test5.style.left= yyy+"px"
		    test5.style.top = zzz+"px"
		    test5.style.visibility = ""
			setTimeout(function(){
				test5.style.visibility = "hidden"
				lev2= lev1+10
			  	le.value=lev2
				funcNew()
			  	},1000)	
			  	
			circleGreen2.style.opacity = "0"
	}
}


function circleMove() { 					/*Движение зеленого круга*/
		circleGreen1.style.opacity = "1"
        circleGreen2.style.opacity = "1"
	    var boxL = []
	    var boxT = []
		for (var i=0, j=0; i<=34, j<=340; i++, j=j+10) {
			boxL[i]=j
			  }
		for (var i2=0, j2=0; i2<=54, j2<=540; i2++, j2=j2+10) {
			boxT[i2]=j2
		}
			  var min = 0
			  var max = 54
	     var l = Math.floor(Math.random()*(max-min+1))+min
	     var t = Math.floor(Math.random()*(max-min+1))+min
	     var l1 = Math.floor(Math.random()*(max-min+1))+min
	     var t1 = Math.floor(Math.random()*(max-min+1))+min
		circleGreen1.style.left=boxL[l]+"px"
		circleGreen1.style.top =boxT[t]+"px"
		//circleGreen2.style.left=boxL[l1]+"px"
		//circleGreen2.style.top =boxT[t1]+"px"
}


function func5(){				/*Создание координат двигающихся двух огненых блоков*/
	
	var boxL = []
	var boxT = []
	for (var i=0, j=0 ;i<=34, j<=340; i++, j=j+10){
		  boxL[i]=j
		 
	}
	for (var i2=0, j2=0; i2<=54, j2<=540; i2++, j2=j2+10) {
		boxT[i2]=j2
	}
			  var min = 0
			  var max = 34
			  var max1 = 49
			  
		var l = Math.floor(Math.random()*(max-min+1))+min
		var t = Math.floor(Math.random()*(max1-min+1))+min
		var l1 = Math.floor(Math.random()*(max-min+1))+min
		var t1 = Math.floor(Math.random()*(max1-min+1))+min
		if ((boxL[l]<(dsetLeft+40)&&boxT[t]<(dsetTop+40))&&(boxL[l]>(dsetLeft-40)&&boxT[t]>(dsetTop-80))) {
			func5()
		} else if ((boxL[l1]<(dsetLeft+40)&&boxT[t1]<(dsetTop+40))&&(boxL[l1]>(dsetLeft-40)&&boxT[t1]>(dsetTop-80))) {
			func5()
		} else {
		test4.style.opacity = "1"
		test2.style.opacity = "1"
		test4.style.left=boxL[l]+"px"
		test4.style.top =boxT[t]+"px"			
		test2.style.left=boxL[l1]+"px"
		test2.style.top =boxT[t1]+"px"
		}
}


function funcx(){ 					/*Функция геймовер если попасть в блок*/
	var elems0 = Number(elems.length)
	var elems1 = Number(elems.length)-1
	
	var xxx = test2.style.left
		xxx = Number(xxx.slice(0,-2))
	
	var xxx3 = test2.style.top
		xxx3 = Number(xxx3.slice(0,-2))
	
	var yyy = dsetLeft
	
	var yyy3 = test4.style.left
		yyy3 = Number(yyy3.slice(0,-2))
	
	var zzz = dsetTop
	
	var zzz3 = test4.style.top
		zzz3 = Number(zzz3.slice(0,-2))
		
	for(var i=7 ;i<elems0; i++){
	var eL = elems[i].style.left
	var eT = elems[i].style.top
	var eL1 = String(eL)
	var eT1 = String(eT)
	var eL2 = eL1.slice(0,-2)
	var eT2 = eT1.slice(0,-2)
	if( yyy==Number(eL2) && (zzz==Number(eT2) || zzz==Number(eT2)+10 || zzz==Number(eT2)+20 ||zzz==Number(eT2)+30)){
		reset()
	}}
	 if(yyy==yyy3 && (zzz==zzz3 || zzz==zzz3+10 || zzz==zzz3+20 || zzz==zzz3+30)){
		reset()
	}
	if(yyy==xxx && (zzz==xxx3 || zzz == xxx3+10 || zzz==xxx3+20 || zzz==xxx3+30)){
		reset()
}}



function funcNew(){ 				/*Создание координат черных блоков*/
	
	var elems0 = Number(elems.length)
		elems1 = Number(elems.length)
	
	
	var boxL = []
	var boxT = []
	for (var i=0, j=0 ;i<=34, j<=340; i++, j=j+10){
		boxL[i]=j
	}
	for (var i2=0, j2=0; i2<=54, j2<=540; i2++, j2=j2+10) {
		boxT[i2]=j2
	}
			  var min = 0
			  var max = 34
			  var max1 = 49
			  
		   var l = Math.floor(Math.random()*(max-min+1))+min
		var t = Math.floor(Math.random()*(max1-min+1))+min
		if ((boxL[l]<(dsetLeft+40)&&boxT[t]<(dsetTop+40))&&(boxL[l]>(dsetLeft-40)&&boxT[t]>(dsetTop-80))) {
			funcNew()
		} else {
		var img = document.createElement("img")
			divTeg.appendChild(img)
	elems[elems0].setAttribute("src","www.howtogeek.com/wp-content/uploads/2012/12/Plain-Black-Wallpaper.png")
  elems[elems0].setAttribute("style","width:10px; height:40px;left:0px;top:0px;right:;bottom:;opacity:;background-color:black;border:0;")
		//elems[elems0].setAttribute("id", "passport"+elems1)
		
		elems[elems1].style.left=boxL[l]+"px"
		elems[elems1].style.top =boxT[t]+"px"			
		arrBlackNum = arrBlackNum + 1
		var arrBlackNumStr = String(arrBlackNum)
		var newstr = String(boxL[l]).concat(String(boxT[t]+arrBlackNumStr))
		var newstr1 = String(boxL[l]).concat(String(boxT[t]+10+arrBlackNumStr))
		var newstr2 = String(boxL[l]).concat(String(boxT[t]+20+arrBlackNumStr))
		var newstr3 = String(boxL[l]).concat(String(boxT[t]+30+arrBlackNumStr))
		
		arrBlackLeft.push(newstr,newstr1,newstr2,newstr3)
		
		}
			
	   
	   
		/*	
	divTeg.setAttribute("src","www.howtogeek.com/wp-content/uploads/2012/12/Plain-Black-Wallpaper.png")*/
	  //divTeg.setAtribute("style","")
}


function reset(){

 
//var div = document.getElementsByTagName("div")

	    clearInterval(stopU)
		clearInterval(stopD)
		clearInterval(stopR)
		clearInterval(stopL)
		clearInterval(stopFuncx)
		clearInterval(stopFunc1)
		clearInterval(stopFunctest)
		clearInterval(stopFunc5)
		clearInterval(stopMove)
		clearInterval(stopPusk)
		clearInterval(stopAngryBlock)
		/*
		clearTimeout(stopAngryBorder)
		clearInterval(stopAngryBlock2)*/
		circleGreen1.style.left = "-20px"
		lev2= 0
	    le.value=lev2
		dsetLeft = 170
		dsetTop = 250
		abLeft = -10
		abTop = -10
		test2.style.left = "-20px"
		test4.style.left = "-20px"
		test3.style.left = "-20px"
		test3a.style.left = "-20px"
		ctx2.clearRect(0,0,ctx2.canvas.width, ctx2.canvas.height)
		ctx3.clearRect(0,0,ctx3.canvas.width, ctx3.canvas.height)
		alert("Game Over")
		arrBlackLeft.length=0
		button0.removeAttribute("disabled")
 		 button0.style.opacity = "1"
 		 butopen.style.opacity = "0.5"
		for (var i = 1 , a = 8; i <= elems.length; i++) {
			
		//var passport = document.getElementById("passport"+ i)
		divTeg.removeChild(elems[7])
		}
	
		
		
		
		 button1.value = "1"
	   button2.value = "1"
	   button3.value = "1"
	   button4.value = "1"
	   button0.value = "0"
	   }
	   

function extr() {						/*Функция геймовер если попасть в красные блоки по бокам*/
	if(dsetLeft<ang&&angrySide===1&&timeLet===1){
		   reset()
	} else if (dsetLeft>(340-ang)&&angrySide===2&&timeLet===1) {
		   reset()
	} else if (dsetTop<ang&&angrySide===3&&timeLet===1) {
		   reset()
	} else if (dsetTop>(540-ang)&&angrySide===4&&timeLet===1) {
		   reset()
	} else if ((dsetLeft<ang&&angrySide===5&&timeLet===1)||(dsetLeft>(340-ang)&&angrySide===5&&timeLet===1)||(dsetTop<ang&&angrySide===5&&timeLet===1)||(dsetTop>(540-ang)&&angrySide===5&&timeLet===1)) {
		   reset()
	} else if ((dsetLeft<ang&&angrySide===6&&timeLet===1)||(dsetLeft>(340-ang)&&angrySide===6&&timeLet===1)) {
		   reset()
	} else if ((dsetTop<ang&&angrySide===7&&timeLet===1)||(dsetTop>(540-ang)&&angrySide===7&&timeLet===1)) {
		   reset()
	} else if ((dsetLeft<ang&&angrySide===8&&timeLet===1)||(dsetTop<ang&&angrySide===8&&timeLet===1)) {
		   reset()
	} else if ((dsetLeft>(340-ang)&&angrySide===9&&timeLet===1)||(dsetTop>(540-ang)&&angrySide===9&&timeLet===1)) {
		   reset()
	}
}

function angryAnima() { 					/*Функция красных блоков по бокам*/
		angrySide
	var angrySideMin = 1
	var angrySideMax = 9
		angryLength = [10,20,30,40,50,60,70,80,90]
	var angryLengthMin = 0
	var angryLengthMax = 9
	var angryTimeout = 10000
	var aClearTimeout = 15000
	var aSetClear
		timeLet = 0
		
		aLengthRandom = Math.floor(Math.random()*(angryLengthMax-angryLengthMin+1))+angryLengthMin
	
	var aSideRandom = Math.floor(Math.random()*(angrySideMax-angrySideMin+1))+angrySideMin
	ang = 100-angryLength[aLengthRandom]
	angrySide = aSideRandom

	stopAngryBorder = window.setTimeout(function name() {
	    

		var aClear =  function() {
			window.setTimeout(function() {
			timeLet = 0
			angryBorderLeft.style.left = "-100px"
			angryBorderRight.style.right = "-100px"
			angryBorderTop.style.top = "-100px"
			angryBorderBottom.style.bottom = "-100px"
			}, aClearTimeout)}
		var aSetTime = function() {
			if (timeLet===1) {
			aSetClear = window.setTimeout( angryAnima, 20000)
		}}
		
		if (ang<dsetLeft-40&&ang<dsetTop-40&&(350-ang)>dsetLeft+40&&(550-ang)>dsetTop+40) {
		switch (angrySide) {
			case 1: 
			angryBorderLeft.style.left = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 2: 
			angryBorderRight.style.right = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 3: 
			angryBorderTop.style.top = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 4: 
			angryBorderBottom.style.bottom = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 5: 
			angryBorderLeft.style.left = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderRight.style.right = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderTop.style.top = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderBottom.style.bottom = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 6: 
			angryBorderLeft.style.left = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderRight.style.right = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 7: 
			angryBorderTop.style.top = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderBottom.style.bottom = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 8: 
			angryBorderLeft.style.left = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderTop.style.top = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
			case 9: 
			angryBorderRight.style.right = "-"+ angryLength[aLengthRandom]+"px"
			angryBorderBottom.style.bottom = "-"+ angryLength[aLengthRandom]+"px"
			timeLet = 1
			aClear()
			aSetTime()
			break;
		
		}} else {
			timeLet = 0
		    clearInterval(aSetClear)
			angryAnima()
		}
		
	}, angryTimeout)
	

}


function angryBlock() {						/*Преследующий блок*/
var newstr = String(abLeft).concat(String(abTop))
var newstr0
var indexstr 
var checkLeft = false

for (var i = 7; i < elems.length; i++) {
   	if (checkLeft===false){
    newstr0 = newstr.concat(String(i))
    indexstr = i
    
    checkLeft = arrBlackLeft.some(function(elem) {
	if (elem===newstr0){ 
	test5.style.left= abLeft+"px"
		    test5.style.top = abTop+"px"
		    test5.style.visibility = ""
			setTimeout(function(){
				test5.style.visibility = "hidden"
				
			    },1000)	
		
	elems[i].style.left = "-100px"
	elems[i].style.left = "-100px"
	elems[i].style.opacity = "0"
	} else { 
	return false}
	});
    
}
}

ctx3.clearRect(0,0,ctx3.canvas.width, ctx3.canvas.height)
if (abLeft < dsetLeft&&abTop<dsetTop){
	abLeft = abLeft + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft === dsetLeft&&abTop< dsetTop){
				abTop = abTop + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft > dsetLeft&&abTop===dsetTop) {
				abLeft = abLeft - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft > dsetLeft&&abTop>dsetTop) {
				abLeft = abLeft - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft === dsetLeft&&abTop> dsetTop) {
				abTop = abTop - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft < dsetLeft&&abTop> dsetTop) {
				abTop = abTop - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft <dsetLeft&&abTop===dsetTop) {
				abLeft = abLeft + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft > dsetLeft&&abTop< dsetTop) {
				abTop = abTop + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "red"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft ===dsetLeft&&abTop===dsetTop) {
			lev1=Number(le.value)
			test5.style.left= abLeft+"px"
		  	test5.style.top = abTop+"px"
		  	test5.style.visibility = ""
		  
			setTimeout(function(){
				test5.style.visibility = "hidden"
			  },1000)	
			
			  reset()
				
				clearInterval(clearExtr)
				
			}
			
			/*if (abLeft < dsetLeft&&abTop!==dsetTop){
	abLeft = abLeft + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "black"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft > dsetLeft&&abTop!==dsetTop){
				abLeft = abLeft - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "black"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft === dsetLeft&&abTop> dsetTop) {
				abTop = abTop - 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "black"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			} else if (abLeft === dsetLeft&&abTop< dsetTop) {
				abTop = abTop + 10
			ctx3.beginPath()
			ctx3.rect(abLeft,abTop,11,11)
			ctx3.lineWidth = 2
			ctx3.fillStyle = "black"
			ctx3.fill()
			ctx3.strokeStyle = "red"
			ctx3.stroke()
			}*/
}


}
var funcSet0 = funcSet()
var element2 = 1
var element3 = 1
var elementBox = 1
function funcSet() {
  return {
  width: function(elem) {
  element2 = Number(elem.value)
  divTeg.style.webkitTransform = "scale("+element2 +"," +element3+")"; },
  height: function(elem) {
  element3 = Number(elem.value)
  divTeg.style.webkitTransform = "scale("+element2+ ","+element3+")"; },
  topedge: function(elem) {
  var element4 = Number(elem.value)
  divTeg.style.top = element4+"%"},
  setbutLeft: function() {
  var but = document.getElementById("box-but-set")
  but.style.left = "0px"
  but.style.right = ""
  but.style.margin = ""
  },
  setbutRight: function() {
  var but = document.getElementById("box-but-set")
  but.style.left = ""
  but.style.right = "0px"
  but.style.margin = ""
  },
  setbutBottom: function() {
  var but = document.getElementById("box-but-set")
  
  but.style.left = "0px"
  but.style.right = "0px"
  but.style.margin = "auto"
  but.style.textAlign = "center"
  },
  close: function() {
  var settings = document.getElementById("settings")
  settings.style.left = "-250px"
  },
  open: function() {
  var settings = document.getElementById("settings")
  settings.style.left = "0px"
  },
  heightBut: function(elem) {
  var elementBut = Number(elem.value)
  var but = document.getElementById("box-but-set")
  but.style.webkitTransform = "scale(1 ," +elementBut+")";
  },
  setspeed: function(elem,elem1) {
  speed = Number(elem)
  speedAngry = Number(elem1)
  }
  
  }
}
/*function funcSet(elem) {
  var elem2 = Number(elem.value)
  divTeg.style.webkitTransform = "scale("+elem2 +", 1)";
}*/