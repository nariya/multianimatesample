# multianimatesample
Adobe Animate multi canvas sample


===========
almost FREE. 



see fuga.html
original Adobe Animate CC files are
- hoge.xfl
- hoge2.xfl
- hoge3.xfl
and originary generated files are
- hoge.html
- hoge.js
- hoge2.html
- hoge2.js
- hoge3.html
- hoge3.js

if you compare 
hoge.html + hoge2.html + hoge3.html, and fuga.html, you can understand what I did.

basical idea is "to use multiple exportRoot".
For each canvas, you should create "Stage".

From each canvas, you should create each stages, and for each stages, you should add each exportRoot.

And each "Library" for each XFL files are different. To manage that, you can use "Composition", like below.

	var comp =AdobeAn.getComposition("824BA9F098894E8684AE3429307AC0B0");
	var comp3=AdobeAn.getComposition("CBBF19A71876422F84EBC103533D0506");
	var comp2=AdobeAn.getComposition("C442A06A5BD64DAE878B4CF5CCF04012");

Basically each XFL file has each "composition id", but if you COPY FROM OTHER XFL file, id will be same.(It means even if you want to use similar XFL files, you should create each XFL file, and after that you shoul copy each symbols and library item by your hand.)

And of course javascript files are in same namespace, you can access from one xfl to another xfl.
in "fuga.html", if you click "btn" symbol, you can see other text will change on another canvas.




Let's enjoy!



chatwork apiをpythonから叩く
とりあえず作ったので公開.
まだメッセージ送信しか無いがとりあえずは動く.


===========
License
    WTFPL 2.0 http://www.wtfpl.net/

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
