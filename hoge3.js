(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ttttttt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.aaaaa = new cjs.Text("canvas3", "bold 50px 'Meiryo'", "#990000");
	this.aaaaa.name = "aaaaa";
	this.aaaaa.lineHeight = 77;
	this.aaaaa.lineWidth = 404;
	this.aaaaa.parent = this;
	this.aaaaa.setTransform(-35.9,-132);

	this.timeline.addTween(cjs.Tween.get(this.aaaaa).wait(1));

}).prototype = getMCSymbolPrototype(lib.ttttttt, new cjs.Rectangle(-37.9,-134,408,79), null);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.text = new cjs.Text("btn", "bold 50px 'Meiryo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(61.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9ECQi4hrAAiXQAAiWC4hrQC5hrEEAAQEFAAC4BrQC5BrAACWQAACXi5BrQi4BrkFAAQkEAAi5hrg");
	this.shape.setTransform(63,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn1, new cjs.Rectangle(0,-6,126,79), null);


// stage content:
(lib.hoge3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* クリックして Web ページに移動
		特定のシンボルインスタンス上でクリックすると、新しいブラウザーウィンドウに URL がロードされます。
		
		手順 :
		1. http://www.adobe.com を目的の URL アドレスに置き換えます。
		   二重引用符 ("") は付けたままにします。
		*/
		
		this.btn1.addEventListener("click", onClick);
		
		function onClick() {
			alert("canvas 3button pressed");
			
			//3番目のcanvasのrootを html側で exportRoot3と命名してあるので、そちらの要素をjavascriptでいじる.
			exportRoot2.textbox2.text = "Hello from canvas2";
		}
		this.stop();
		console.log("hoge3.root");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18));

	// レイヤー 1
	this.textbox = new cjs.Text("(｀・ω・´)", "bold 50px 'Meiryo'");
	this.textbox.name = "textbox";
	this.textbox.lineHeight = 77;
	this.textbox.lineWidth = 407;
	this.textbox.parent = this;
	this.textbox.setTransform(73.1,177);

	this.instance = new lib.ttttttt();
	this.instance.parent = this;
	this.instance.setTransform(245.1,69.1,1,1,0,0,0,166.1,-94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.textbox}]}).wait(18));

	// レイヤー 2
	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(275.5,337.5,1,1,0,0,0,63,36.5);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(581,229.6,441,344.5);
// library properties:
lib.properties = {
	id: 'CBBF19A71876422F84EBC103533D0506',
	width: 1080,
	height: 400,
	fps: 24,
	color: "#00FF66",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CBBF19A71876422F84EBC103533D0506'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;