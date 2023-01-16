//随机数函数
function randomRange(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

//等待函数
function sleep(time){
 return new Promise((resolve) => setTimeout(resolve, time));
}

//背景音乐
const fireworks_music = new Audio('./audio/fireworks.mp3');
fireworks_music.loop = true;
fireworks_music.volume = 0.4;

//背景音乐
const music = new Audio('./audio/a036ade0f5225092e1dcdd64382413e9.mp3');
fireworks_music.loop = true;
fireworks_music.volume = 1;



//烟花随机发射
function again() {
	//定义元素
	var div=document.createElement("div");
	
	//定义水平位置
	var left=randomRange(-50, 50);
	
	//定义垂直位置
	var hight=randomRange(40, 90);
	
	//烟花大小
	var size=randomRange(4, 13);
	var fireworks_size=507/10*size;
	var firecracker_size=6/10*size;
	var fireworks_bottom=373/10*size/2;
	
	//烟花颜色
	var img = "./img/fireworks1.png"
	
	var color=randomRange(1, 4);
	if (color == 1)
	{
		img = "./img/fireworks1.png"
	}
	else if (color == 2)
	{
		img = "./img/fireworks2.png"
	}
	else
	{
		img = "./img/fireworks3.png"
	}

	//整合
	var info = `<div class="fireworks" id="test" style="left: 50%; margin-left: -${fireworks_size/2}px; margin-bottom: -${fireworks_bottom}px;"><img src="${img}" width="${fireworks_size}px"></div><div class="firecracker" style="left: 50%; margin-left: -${firecracker_size/2}px;"><img src="./img/firecracker.png" width="${firecracker_size}px"></div>`;
	
	div.className = "container";
	div.style = `left: ${left}%; --hight: ${hight}%;`
	div.innerHTML = info;
	document.getElementById("main").appendChild(div);
	
};


//放烟花
const startfire = async () => {
	var box = document.getElementById("main");
	box.innerHTML='<div class="container"><div class="fireworks" id="test" style="left: 50%; margin-left: -330px; margin-bottom: -242px;"><img src="./img/fireworks1.png" width="660px"></div><div class="firecracker" style="left: 50%; margin-left: -3.5px;"><img src="./img/firecracker.png" width="7px"></div></div><div class="main"><img src="img/cake.svg" class="cake" /><hr/><h1>祝你生日快乐！</h1><hr/><p>Happy Brithday！许个愿吧！<br/>祝你愿望成真！</p></div>';
	
	await sleep(1500);
	
	fireworks_music.play()
	
	await sleep(2500);
	
	
	music.play()
	for (var i=0; i<300; i++)
	{
		await sleep(200); again();
	};
}

//礼盒点击
const click = async () => {
	var gaizi=document.getElementById("gaizi");
	var gift=document.getElementById("gift-box");
	gaizi.classList.add('gaizi-open');
	gift.classList.add('gift-close');
	await sleep(3500);
	startfire()
}

//window.onload = startfire;



