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


(lib.symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aobl2IQ3AAIAALtIw3AAg");
	this.shape.setTransform(54,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AobF3IAArtIQ3AAIAALtg");
	this.shape_1.setTransform(54,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol3, new cjs.Rectangle(-1,-1,110,77), null);


(lib.symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AlhFhQiIiIgJi9IgBgcQAAjPCSiSQCSiSDPAAIAcABQC9AJCICIQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol1, new cjs.Rectangle(0,0,100,100), null);


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


(lib.symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.movieClip_1 = new lib.symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AlhFhQiIiIgJi9IgBgcQAAjPCSiSQCSiSDPAAIAcABQC9AJCICIQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");
	this.shape.setTransform(918.2,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.movieClip_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol2, new cjs.Rectangle(0,0,968.2,100), null);


// stage content:
(lib.hoge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn1.addEventListener("click", onClick.bind(this));
		
		function onClick()
		{
			alert("button pressed");
			
			//3番目のcanvasのrootを html側で exportRoot3と命名してあるので、そちらの要素をjavascriptでいじる.
			exportRoot3.textbox.text = "Hello from canvas2";
		}
		this.stop();
	}
	this.frame_19 = function() {
		/* このフレームで停止
		 タイムラインは、このコードが挿入されたフレームで停止 / 一時停止します。
		ムービークリップのタイムラインの停止 / 一時停止にも使用できます。
		*/
		
		//this.play(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(2));

	// レイヤー 4
	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(461,188.5,1,1,0,0,0,63,36.5);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(21));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AlhFhQiIiIgKi9IAAgcQAAjPCSiSQCTiSDOAAIAcABQC9AJCJCIQCSCSAADPQAADPiSCSQiTCTjPAAQjOAAiTiTg");
	this.shape.setTransform(546.4,144.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(1));

	// レイヤー 3
	this.instance = new lib.symbol3();
	this.instance.parent = this;
	this.instance.setTransform(70,146.5,1,1,0,0,0,54,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:99.8,y:147.4},0).wait(1).to({x:129.6,y:148.2},0).wait(1).to({x:159.5,y:149.1},0).wait(1).to({x:189.3,y:149.9},0).wait(1).to({x:219.2,y:150.8},0).wait(1).to({x:249,y:151.6},0).wait(1).to({x:278.9,y:152.5},0).wait(1).to({x:308.7,y:153.3},0).wait(1).to({x:338.6,y:154.2},0).wait(1).to({x:368.4,y:155},0).wait(1).to({x:398.3,y:155.9},0).wait(1).to({x:428.1,y:156.7},0).wait(1).to({x:458,y:157.6},0).wait(1).to({x:487.8,y:158.4},0).wait(1).to({x:517.7,y:159.3},0).wait(1).to({x:547.5,y:160.1},0).wait(1).to({x:577.4,y:161},0).wait(1).to({x:607.2,y:161.8},0).wait(1).to({x:637.1,y:162.7},0).wait(1).to({x:666.9,y:163.5},0).wait(1));

	// レイヤー 1
	this.textbox2 = new cjs.Text("(｀・ω・´)", "bold 50px 'Meiryo'", "#FFFFFF");
	this.textbox2.name = "textbox2";
	this.textbox2.textAlign = "center";
	this.textbox2.lineHeight = 77;
	this.textbox2.lineWidth = 719;
	this.textbox2.parent = this;
	this.textbox2.setTransform(452.4,315.1);

	this.text = new cjs.Text("canvas2 ", "bold 50px 'Meiryo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 719;
	this.text.parent = this;
	this.text.setTransform(485.4,15.1);

	this.movieClip_1 = new lib.symbol2();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(496,50,1,1,0,0,0,484.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1},{t:this.text},{t:this.textbox2}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551.9,200,968.2,400);
// library properties:
lib.properties = {
	id: 'C442A06A5BD64DAE878B4CF5CCF04012',
	width: 1080,
	height: 400,
	fps: 24,
	color: "#0066CC",
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
an.compositions['C442A06A5BD64DAE878B4CF5CCF04012'] = {
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