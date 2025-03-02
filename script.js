var header = document.createElement("div");
header.style.width = "100%";
header.style.height = "70px";
header.style.background = "white";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
document.body.appendChild(header);

var logo = document.createElement("div");
logo.style.width = "10%";
logo.style.height = "70px";
logo.style.display = "flex";
logo.style.justifyContent = "center";
logo.style.alignItems = "center";
header.appendChild(logo);

var logt = document.createElement("span");
logt.style.fontSize = "25px";
logt.style.color = "black";
logt.innerHTML = "logo"
logo.appendChild(logt);

var imgbox = document.createElement("div");
imgbox.style.width = "10%";
imgbox.style.height = "70px";
imgbox.style.display = "flex";
imgbox.style.justifyContent = "center";
imgbox.style.alignItems = "center";
header.appendChild(imgbox);

var im = document.createElement("img");
im.setAttribute("src","images/menu.png");
imgbox.appendChild(im);

var aside = document.createElement("div");
aside.style.height = "500px";
aside.style.backgroundColor = "lightblue";
aside.setAttribute("class","container-fluid");
document.body.appendChild(aside);

var row = document.createElement("div");

var asidebox = document.createElement("div");
asidebox.style.width = "100%";
asidebox.style.height = "500px";
asidebox.style.display = "flex";
asidebox.style.justifyContent = "space-around";
asidebox.style.alignItems = "center";
asidebox.setAttribute("class","col-md-12");
aside.appendChild(asidebox);

var img = document.createElement("div");
img.style.width = "400px";
img.style.height = "500px";
img.style.backgroundImage = "url('images/ph1.webp')";
img.style.backgroundRepeat = "no-repeat";
img.style.backgroundSize = "100% 100%";
img.style.borderRadius = "20px";
img.style.opacity = "0.9";
asidebox.appendChild(img);

var turtle = document.createElement("div");
turtle.style.width = "500px";
turtle.style.height = "400px";
turtle.style.position = "relative";
asidebox.appendChild(turtle);

var butt = document.createElement("button");
butt.style.width = "120px";
butt.style.height = "40px";
butt.style.backgroundColor = "white";
butt.style.border = "none";
butt.innerHTML = "Follow";

butt.setAttribute("onclick","f()");
turtle.appendChild(butt);

var sp = document.createElement("div");
sp.style.width = "400px";
sp.style.height = "300px";
sp.style.display = "flex";
sp.style.justifyContent = "space-around";
sp.style.flexDirection = "column";
sp.style.alignItems = "center";
sp.setAttribute("id","b");

var spt = document.createElement("span");
spt.style.fontSize = "45px";
spt.style.color = "white";
spt.innerHTML = "Strategy Consultants";
sp.appendChild(spt);

var spts = document.createElement("span");
spts.style.fontSize = "25px";
spts.style.color = "white";
spts.innerHTML = "When an unknown printer took a galley of type";
sp.appendChild(spts);

function f() {
  turtle.appendChild(sp);
}


var article = document.createElement("div");
article.style.height = "610px";
article.style.backgroundColor = "white";
document.body.appendChild(article);

var articlebox = document.createElement("div");
articlebox.style.width = "100%";
articlebox.style.height = "610px";
articlebox.style.display = "flex";
articlebox.style.justifyContent = "space-around";
articlebox.style.flexDirection = "column";
articlebox.style.alignItems = "center";
articlebox.setAttribute("class","col-md-12");
article.appendChild(articlebox);

var tur = document.createElement("span");
tur.style.fontSize = "30px";
tur.style.color = "blue";
tur.style.fontWeight = "bold";
tur.innerHTML = "Our Services";
articlebox.appendChild(tur);

var fourbox = document.createElement("div");
fourbox.style.width = "77%";
fourbox.style.height = "250px";
fourbox.style.position = "relative";
fourbox.style.display = "flex";
fourbox.style.justifyContent = "space-around";
fourbox.style.alignItems = "center";
articlebox.appendChild(fourbox);

var whiteb  = document.createElement("div");
whiteb.style.width = "20%";
whiteb.style.height = "250px";
whiteb.style.backgroundColor = "white";
whiteb.style.borderRadius = "5px";
whiteb.style.padding = "15px";
whiteb.style.display = "flex";
whiteb.style.justifyContent = "space-around";
whiteb.style.flexDirection = "column";
whiteb.style.alignItems = "center";
whiteb.setAttribute("class","wb");
fourbox.appendChild(whiteb);

var ic1 = document.createElement("div");
ic1.style.width = "50px";
ic1.style.height = "50px";
ic1.style.backgroundImage = "url('images/ic4.png')";
ic1.style.backgroundRepeat = "no-repeat";
ic1.style.backgroundSize = "100% 100%";
whiteb.appendChild(ic1);

var bt = document.createElement("span");
bt.style.fontSize = "20px";
bt.style.color = "black";
bt.style.fontWeight = "bold";
bt.innerHTML = "About Us";
whiteb.appendChild(bt);

var smt = document.createElement("span");
smt.style.fontSize = "14px";
smt.style.color = "black";
smt.innerHTML = "When an unknown printer took a galley of type. It has survived not only five centuries";
whiteb.appendChild(smt);


var whiteb2 = document.createElement("div");
whiteb2.style.width = "20%";
whiteb2.style.height = "250px";
whiteb2.style.backgroundColor = "PaleTurquoise";
whiteb2.style.borderRadius = "5px";
whiteb2.style.padding = "15px";
whiteb2.style.display = "flex";
whiteb2.style.justifyContent = "space-around";
whiteb2.style.flexDirection = "column";
whiteb2.style.alignItems = "center";
whiteb2.setAttribute("class","wb2");
fourbox.appendChild(whiteb2);

var ic2 = document.createElement("div");
ic2.style.width = "50px";
ic2.style.height = "50px";
ic2.style.backgroundImage = "url('images/ic2.png')";
ic2.style.backgroundRepeat = "no-repeat";
ic2.style.backgroundSize = "100% 100%";
whiteb2.appendChild(ic2);

var bt1 = document.createElement("span");
bt1.style.fontSize = "20px";
bt1.style.color = "black";
bt1.style.fontWeight = "bold";
bt1.innerHTML = "Management";
whiteb2.appendChild(bt1);

var smt1 = document.createElement("span");
smt1.style.fontSize = "14px";
smt1.style.color = "black";
smt1.innerHTML = "When an unknown printer took a galley of type. It has survived not only five centuries";
whiteb2.appendChild(smt1);

var whiteb3  = document.createElement("div");
whiteb3.style.width = "20%";
whiteb3.style.height = "250px";
whiteb3.style.backgroundColor = "white";
whiteb3.style.padding = "15px";
whiteb3.style.borderRadius = "5px";
whiteb3.style.display = "flex";
whiteb3.style.justifyContent = "space-around";
whiteb3.style.flexDirection = "column";
whiteb3.style.alignItems = "center";
whiteb3.setAttribute("class","wb3");
fourbox.appendChild(whiteb3);

var ic3 = document.createElement("div");
ic3.style.width = "50px";
ic3.style.height = "50px";
ic3.style.backgroundImage = "url('images/ic3.png')";
ic3.style.backgroundRepeat = "no-repeat";
ic3.style.backgroundSize = "100% 100%";
whiteb3.appendChild(ic3);

var bt2 = document.createElement("span");
bt2.style.fontSize = "20px";
bt2.style.color = "black";
bt2.style.fontWeight = "bold";
bt2.innerHTML = "Marketing";
whiteb3.appendChild(bt2);

var smt2 = document.createElement("span");
smt2.style.fontSize = "14px";
smt2.style.color = "black";
smt2.innerHTML = "When an unknown printer took a galley of type. It has survived not only five centuries";
whiteb3.appendChild(smt2);

var whiteb4  = document.createElement("div");
whiteb4.style.width = "20%";
whiteb4.style.height = "250px";
whiteb4.style.backgroundColor = "PaleTurquoise";
whiteb4.style.borderRadius = "5px";
whiteb4.style.padding = "15px";
whiteb4.style.display = "flex";
whiteb4.style.justifyContent = "space-around";
whiteb4.style.flexDirection = "column";
whiteb4.style.alignItems = "center";
whiteb4.setAttribute("class","wb4");
fourbox.appendChild(whiteb4);

var ic4 = document.createElement("div");
ic4.style.width = "50px";
ic4.style.height = "50px";
ic4.style.backgroundImage = "url('images/ic1.png')";
ic4.style.backgroundRepeat = "no-repeat";
ic4.style.backgroundSize = "100% 100%";
whiteb4.appendChild(ic4);

var bt3 = document.createElement("span");
bt3.style.fontSize = "20px";
bt3.style.color = "black";
bt3.style.fontWeight = "bold";
bt3.innerHTML = "Our Projects";
whiteb4.appendChild(bt3);

var smt2 = document.createElement("span");
smt2.style.fontSize = "14px";
smt2.style.color = "black";
smt2.innerHTML = "When an unknown printer took a galley of type. It has survived not only five centuries";
whiteb4.appendChild(smt2);

var content = document.createElement("div");
content.style.height = "1100px";
content.style.backgroundColor = "lightblue";
content.setAttribute("class","container-fluid");
document.body.appendChild(content);


var contentbox = document.createElement("div");
contentbox.style.width = "100%";
contentbox.style.height = "1100px";
contentbox.style.position = "relative";
contentbox.style.display = "flex";
contentbox.style.justifyContent = "space-around";
contentbox.style.alignItems = "center";
contentbox.setAttribute("class","col-md-12");
content.appendChild(contentbox);

var whiteboox = document.createElement("div");
whiteboox.style.width = "400px";
whiteboox.style.height = "400px";
whiteboox.style.position = "relative";
whiteboox.style.right = "25%";
whiteboox.style.top = "-25%";
whiteboox.style.borderRadius = "60px";
whiteboox.style.backgroundColor = "white";
contentbox.appendChild(whiteboox);

var imgback = document.createElement("div");
imgback.style.width = "350px";
imgback.style.height = "320px";
imgback.style.backgroundImage = 'url("images/ph1.webp")';
imgback.style.backgroundRepeat = "no-repeat";
imgback.style.backgroundSize = "100% 100%";
imgback.style.borderRadius = "60px";
imgback.style.position = "absolute";
imgback.style.left = "6%";
imgback.style.top = "5%";
whiteboox.appendChild(imgback);

var boxtext = document.createElement("div");
boxtext.style.width = "350px";
boxtext.style.height = "320px";
boxtext.style.display = "flex";
boxtext.style.justifyContent = "space-around";
boxtext.style.flexDirection = "column";
boxtext.style.alignItems = "center";
boxtext.style.position = "absolute";
boxtext.style.top = "6%";
boxtext.style.left = "60%";
contentbox.appendChild(boxtext);

var spans = document.createElement("span");
spans.style.fontSize = "45px";
spans.style.color = "white";
spans.innerHTML = "Contact Us";
boxtext.appendChild(spans);

var smt = document.createElement("span");
smt.style.fontSize = "20px";
smt.style.color = "white";
smt.innerHTML = "When an unknown printer took a galley of type. It has survived not only five centuries";
boxtext.appendChild(smt);

var butt1 = document.createElement("button");
butt1.style.width = "120px";
butt1.style.height = "40px";
butt1.style.backgroundColor = "white";
butt1.style.border = "none";
butt1.innerHTML = "Follow";
boxtext.appendChild(butt1);

var minbox1 = document.createElement("div");
minbox1.style.width = "12%";
minbox1.style.height = "350px";
minbox1.style.display = "flex";
minbox1.style.justifyContent = "space-around";
minbox1.style.flexDirection = "column";
minbox1.style.alignItems = "center";
minbox1.setAttribute("class","a");
contentbox.appendChild(minbox1);

var smalltext = document.createElement("span")
smalltext.style.fontSize = "30px";
smalltext.style.color = "white";
smalltext.innerHTML = "About Us";
smalltext.style.fontWeight = "bold";
minbox1.appendChild(smalltext);

var smalltext1 = document.createElement("span")
smalltext1.style.fontSize = "15px";
smalltext1.style.color = "white";
smalltext1.innerHTML = "About Us";
smalltext1.style.fontWeight = "bold";
minbox1.appendChild(smalltext1);

var smalltext2 = document.createElement("span")
smalltext2.style.fontSize = "15px";
smalltext2.style.color = "white";
smalltext2.innerHTML = "About Us";
smalltext2.style.fontWeight = "bold";
minbox1.appendChild(smalltext2);

var smalltext3 = document.createElement("span")
smalltext3.style.fontSize = "15px";
smalltext3.style.color = "white";
smalltext3.innerHTML = "About Us";
smalltext3.style.fontWeight = "bold";
minbox1.appendChild(smalltext3);

var minbox2 = document.createElement("div");
minbox2.style.width = "12%";
minbox2.style.height = "350px";
minbox2.style.display = "flex";
minbox2.style.justifyContent = "space-around";
minbox2.style.flexDirection = "column";
minbox2.style.alignItems = "center";
minbox2.setAttribute("class","b");
contentbox.appendChild(minbox2);

var smalltext = document.createElement("span")
smalltext.style.fontSize = "30px";
smalltext.style.color = "white";
smalltext.innerHTML = "Strategy";
smalltext.style.fontWeight = "bold";
minbox2.appendChild(smalltext);

var smalltext1 = document.createElement("span")
smalltext1.style.fontSize = "15px";
smalltext1.style.color = "white";
smalltext1.innerHTML = "About Us";
smalltext1.style.fontWeight = "bold";
minbox2.appendChild(smalltext1);

var smalltext2 = document.createElement("span")
smalltext2.style.fontSize = "15px";
smalltext2.style.color = "white";
smalltext2.innerHTML = "About Us";
smalltext2.style.fontWeight = "bold";
minbox2.appendChild(smalltext2);

var smalltext3 = document.createElement("span")
smalltext3.style.fontSize = "15px";
smalltext3.style.color = "white";
smalltext3.innerHTML = "About Us";
smalltext3.style.fontWeight = "bold";
minbox2.appendChild(smalltext3);

var minbox3 = document.createElement("div");
minbox3.style.width = "12%";
minbox3.style.height = "350px";
minbox3.style.display = "flex";
minbox3.style.justifyContent = "space-around";
minbox3.style.flexDirection = "column";
minbox3.style.alignItems = "center";
minbox3.setAttribute("class","c");
contentbox.appendChild(minbox3);

var smalltext = document.createElement("span")
smalltext.style.fontSize = "30px";
smalltext.style.color = "white";
smalltext.innerHTML = "Industries";
smalltext.style.fontWeight = "bold";
minbox3.appendChild(smalltext);

var smalltext1 = document.createElement("span")
smalltext1.style.fontSize = "15px";
smalltext1.style.color = "white";
smalltext1.innerHTML = "About Us";
smalltext1.style.fontWeight = "bold";
minbox3.appendChild(smalltext1);

var smalltext2 = document.createElement("span")
smalltext2.style.fontSize = "15px";
smalltext2.style.color = "white";
smalltext2.innerHTML = "About Us";
smalltext2.style.fontWeight = "bold";
minbox3.appendChild(smalltext2);

var smalltext3 = document.createElement("span")
smalltext3.style.fontSize = "15px";
smalltext3.style.color = "white";
smalltext3.innerHTML = "About Us";
smalltext3.style.fontWeight = "bold";
minbox3.appendChild(smalltext3);

var section = document.createElement("div");
section.style.height = "900px";
section.style.backgroundColor = "white";
section.setAttribute("class","container-fluid");
document.body.appendChild(section);

var sectionbox = document.createElement("div");
sectionbox.style.width = "100%";
sectionbox.style.height = "900px";
sectionbox.style.position = "relative";
sectionbox.style.display = "flex";
sectionbox.style.justifyContent = "space-around";
sectionbox.style.alignItems = "center";
sectionbox.setAttribute("class","col-md-12");
section.appendChild(sectionbox);

var wbb = document.createElement("div");
wbb.style.width = "400px";
wbb.style.height = "400px";
wbb.style.backgroundColor = "white";
wbb.style.display = "flex";
wbb.style.justifyContent = "space-around";
wbb.style.padding = "10px";
wbb.style.flexDirection = "column";
wbb.style.position = "absolute";
wbb.style.left = "20%";
wbb.style.top = "-20%";
sectionbox.appendChild(wbb);

var smalltext = document.createElement("span")
smalltext.style.fontSize = "40px";
smalltext.style.color = "black";
smalltext.innerHTML = "About Company";
smalltext.style.fontWeight = "bold";
wbb.appendChild(smalltext);

var smalltext2 = document.createElement("span")
smalltext2.style.fontSize = "15px";
smalltext2.style.color = "black";
smalltext2.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
wbb.appendChild(smalltext2);

var butt = document.createElement("button");
butt.style.width = "140px";
butt.style.height = "40px";
butt.style.backgroundColor = "lightblue";
butt.style.borderRadius = "10px";
butt.style.color = "white";
butt.style.border = "none";
butt.innerHTML = "Read More";
wbb.appendChild(butt);

var wbb2 = document.createElement("div");
wbb2.style.width = "400px";
wbb2.style.height = "400px";
wbb2.style.backgroundImage = "url('images/men.jpg')";
wbb2.style.backgroundRepeat = "no-repeat";
wbb2.style.backgroundSize = "100% 100%";
wbb2.style.position = "absolute";
wbb2.style.left = "52%";
wbb2.style.top = "-20%";
sectionbox.appendChild(wbb2);

var textboldbox = document.createElement("div");
textboldbox.style.width = "27%";
textboldbox.style.height = "150px";
textboldbox.style.position = "absolute";
textboldbox.style.top = "25%";
textboldbox.style.left = "36%";
textboldbox.style.display = "flex";
textboldbox.style.alignItems = "center";
sectionbox.appendChild(textboldbox);

var spanbold = document.createElement("span");
spanbold.style.fontSize = "45px";
spanbold.style.color = "black";
spanbold.style.fontWeight = "bold";
spanbold.innerHTML = "Meet The Team Our Professionals";
textboldbox.appendChild(spanbold);

var treeboximg = document.createElement("div");
treeboximg.style.width = "60%";
treeboximg.style.height = "450px";
treeboximg.style.position = "absolute";
treeboximg.style.display = "flex";
treeboximg.style.justifyContent = "space-around";
treeboximg.style.alignItems = "center";
treeboximg.style.top = "47%";
sectionbox.appendChild(treeboximg);

var bluediv1 = document.createElement("div");
bluediv1.style.width = "28%";
bluediv1.style.height = "450px";
bluediv1.style.display = "flex";
bluediv1.style.justifyContent = "space-around";
bluediv1.style.flexDirection = "column";
bluediv1.style.alignItems = "center";
bluediv1.style.backgroundColor = "lightblue";
treeboximg.appendChild(bluediv1);


var i1 = document.createElement("div");
i1.setAttribute("class","i1");
bluediv1.appendChild(i1);

var boxmod1 = document.createElement("div");
boxmod1.setAttribute("class","bm1");
i1.appendChild(boxmod1);

var descb1 = document.createElement("span");
descb1.style.fontSize = "25px";
descb1.style.color = "white";
descb1.style.fontWeight = "bold";
descb1.innerHTML = "BOB CHARLIE";
descb1.style.paddingLeft = "20px";
boxmod1.appendChild(descb1);

var descbm1 = document.createElement("span");
descbm1.style.fontSize = "15px";
descbm1.style.color = "white";
descbm1.innerHTML =  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took";
descbm1.style.paddingLeft = "14px";
boxmod1.appendChild(descbm1);

var buts = document.createElement("button");
buts.style.width = "120px";
buts.style.height = "40px";
buts.style.backgroundColor = "white";
buts.style.color = "black";
buts.style.border = "none";
buts.style.borderRadius = "30px";
buts.innerHTML = "Follow";
boxmod1.appendChild(buts);


var bluediv2 = document.createElement("div");
bluediv2.style.width = "28%";
bluediv2.style.height = "450px";
bluediv2.style.display = "flex";
bluediv2.style.justifyContent = "space-around";
bluediv2.style.flexDirection = "column";
bluediv2.style.alignItems = "center";
bluediv2.style.backgroundColor = "lightblue";
treeboximg.appendChild(bluediv2);

var i2 = document.createElement("div");
i2.setAttribute("class","i2");
bluediv2.appendChild(i2);

var boxmod2 = document.createElement("div");
boxmod2.setAttribute("class","bm2");
i2.appendChild(boxmod2);

var descb2 = document.createElement("span");
descb2.style.fontSize = "25px";
descb2.style.color = "white";
descb2.style.fontWeight = "bold";
descb2.innerHTML = "LELE WITSON";
descb2.style.paddingLeft = "20px";
boxmod2.appendChild(descb2);

var descbm2 = document.createElement("span");
descbm2.style.fontSize = "15px";
descbm2.style.color = "white";
descbm2.innerHTML =  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took";
descbm2.style.paddingLeft = "14px";
boxmod2.appendChild(descbm2);

var buts = document.createElement("button");
buts.style.width = "120px";
buts.style.height = "40px";
buts.style.backgroundColor = "white";
buts.style.color = "black";
buts.style.border = "none";
buts.style.borderRadius = "30px";
buts.innerHTML = "Follow";
boxmod2.appendChild(buts);

var bluediv3 = document.createElement("div");
bluediv3.style.width = "28%";
bluediv3.style.height = "450px";
bluediv3.style.display = "flex";
bluediv3.style.justifyContent = "space-around";
bluediv3.style.flexDirection = "column";
bluediv3.style.alignItems = "center";
bluediv3.style.backgroundColor = "lightblue";
treeboximg.appendChild(bluediv3);

var i3 = document.createElement("div");
i3.setAttribute("class","i3");
bluediv3.appendChild(i3);

var boxmod3 = document.createElement("div");
boxmod3.setAttribute("class","bm3");
i3.appendChild(boxmod3);


var descb3 = document.createElement("span");
descb3.style.fontSize = "25px";
descb3.style.color = "white";
descb3.style.fontWeight = "bold";
descb3.innerHTML = "MARY BROWN";
descb3.style.paddingLeft = "20px";
boxmod3.appendChild(descb3);

var descbm3 = document.createElement("span");
descbm3.style.fontSize = "15px";
descbm3.style.color = "white";
descbm3.innerHTML =  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took";
descbm3.style.paddingLeft = "14px";
boxmod3.appendChild(descbm3);

var buts = document.createElement("button");
buts.style.width = "120px";
buts.style.height = "40px";
buts.style.backgroundColor = "white";
buts.style.color = "black";
buts.style.border = "none";
buts.style.borderRadius = "30px";
buts.innerHTML = "Follow";
boxmod3.appendChild(buts);

var blue = document.createElement("div");
blue.style.height = "500px";
blue.style.backgroundColor = "lightblue";
blue.setAttribute("class","container-fluid");
document.body.appendChild(blue);

var bluebox = document.createElement("div");
bluebox.style.width = "100%";
bluebox.style.height = "500px";
bluebox.style.position = "relative";
bluebox.style.display = "flex";
bluebox.style.justifyContent = "space-around";
bluebox.style.alignItems = "center";
bluebox.setAttribute("class","col-md-12");
blue.appendChild(bluebox);

var textboldbox1 = document.createElement("div");
textboldbox1.style.width = "27%";
textboldbox1.style.height = "150px";
textboldbox1.style.position = "absolute";
textboldbox1.style.top = "2%";
textboldbox1.style.left = "36%";
textboldbox1.style.display = "flex";
textboldbox1.style.alignItems = "center";
bluebox.appendChild(textboldbox1);

var spanbold1 = document.createElement("span");
spanbold1.style.fontSize = "45px";
spanbold1.style.color = "white";
spanbold1.style.fontWeight = "bold";
spanbold1.innerHTML = "Featured clients";
textboldbox1.appendChild(spanbold1);

var sppan = document.createElement("div");
sppan.style.width = "50%";
sppan.style.height = "150px";
sppan.style.position = "absolute";
sppan.style.top = "25%";
sppan.style.left = "26%";
sppan.style.display = "flex";
sppan.style.justifyContent = "center";
sppan.style.alignItems = "center";

bluebox.appendChild(sppan);

var twotext = document.createElement("span");
twotext.style.fontSize = "25px";
twotext.style.color = "white";
twotext.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took,text ever since the";
sppan.appendChild(twotext);

var boxf = document.createElement("div");
boxf.style.width = "80%";
boxf.style.height = "120px";
boxf.style.display = "flex";
boxf.style.justifyContent = "space-around";
boxf.style.alignItems = "center";
boxf.setAttribute("class","boxf");
bluebox.appendChild(boxf);

var ic1 = document.createElement("span");
ic1.style.fontSize = "45px";
ic1.style.color = "white";
ic1.innerHTML = "CROLLA";
boxf.appendChild(ic1);

var ic1 = document.createElement("div");
ic1.style.width = "200px";
ic1.style.height = "200px";
ic1.style.backgroundImage = "url('images/binance.png')";
ic1.style.backgroundRepeat = "no-repaet";
ic1.style.backgroundSize = "100% 100%";
boxf.appendChild(ic1);

var ic1 = document.createElement("div");
ic1.style.width = "200px";
ic1.style.height = "200px";
ic1.style.backgroundImage = "url('images/evga.png')";
ic1.style.backgroundRepeat = "no-repaet";
ic1.style.backgroundSize = "100% 100%";
boxf.appendChild(ic1);

var ic1 = document.createElement("div");
ic1.style.fontSize = "45px";
ic1.style.color = "white";
ic1.innerHTML = "TESLA";
boxf.appendChild(ic1);

var footer = document.createElement("div");
footer.style.height = "800px";
footer.style.backgroundColor = "white";
footer.setAttribute("class","container-fluid");
document.body.appendChild(footer);

var footerbox = document.createElement("div");
footerbox.style.width = "100%";
footerbox.style.height = "800px";
footerbox.style.position = "relative";
footerbox.style.display = "flex";
footerbox.style.justifyContent = "space-around";
footerbox.style.alignItems = "center";
footerbox.setAttribute("class","col-md-12");
footer.appendChild(footerbox);

var textboldbox2 = document.createElement("div");
textboldbox2.style.width = "45%";
textboldbox2.style.height = "80px";
textboldbox2.style.position = "absolute";
textboldbox2.style.top = "1%";
textboldbox2.style.left = "15%";
textboldbox2.style.display = "flex";
textboldbox2.style.alignItems = "center";
footerbox.appendChild(textboldbox2);

var spanbold2 = document.createElement("span");
spanbold2.style.fontSize = "35px";
spanbold2.style.color = "black";
spanbold2.style.fontWeight = "bold";
spanbold2.innerHTML = "Looking for more information ?";
textboldbox2.appendChild(spanbold2);

var footimg = document.createElement("div");
footimg.style.width = "350px";
footimg.style.height = "350px";
footimg.style.backgroundImage = 'url("images/j.webp")';
footimg.style.backgroundRepeat = "no-repeat";
footimg.style.backgroundSize = "100% 100%";
footimg.style.borderRadius = "30px";
footimg.style.boxShadow =  "6px 4px 12px 0px rgba(0,0,0,0.75)";
footimg.style.position = "absolute";
footimg.style.left = "20%";
footimg.style.top = "10%"
footerbox.appendChild(footimg);

var footdesc = document.createElement("div");
footdesc.style.width = "350px";
footdesc.style.height = "320px";
footdesc.style.backgroundColor = "rgba(192,192,192,0.3)";
footdesc.style.position = "absolute";
footdesc.style.borderRadius = "30px";
footdesc.style.boxShadow = "6px 4px 12px 0px rgba(0,0,0,0.75)";
footdesc.style.left = "20%";
footdesc.style.top = "55%";
footdesc.style.display = "flex";
footdesc.style.justifyContent = "space-around";
footdesc.style.flexDirection = "column";
footdesc.style.alignItems = "center";
footerbox.appendChild(footdesc);

var foottext = document.createElement("span");
foottext.style.fontSize = "25px";
foottext.style.color = "black";
foottext.innerHTML = "Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
footdesc.appendChild(foottext);

var buts = document.createElement("button");
buts.style.width = "120px";
buts.style.height = "40px";
buts.style.backgroundColor = "lightblue";
buts.style.color = "white";
buts.style.border = "none";
buts.style.borderRadius = "30px";
buts.innerHTML = "Follow";
footdesc.appendChild(buts);

var textboldbox4 = document.createElement("div");
textboldbox4.style.width = "25%";
textboldbox4.style.height = "80px";
textboldbox4.style.position = "absolute";
textboldbox4.style.top = "1%";
textboldbox4.style.left = "60%";
textboldbox4.style.display = "flex";
textboldbox4.style.alignItems = "center";
footerbox.appendChild(textboldbox4);

var spanbold4 = document.createElement("span");
spanbold4.style.fontSize = "35px";
spanbold4.style.color = "black";
spanbold4.style.fontWeight = "bold";
spanbold4.innerHTML = "Contact Us";
textboldbox4.appendChild(spanbold4);

var contbox = document.createElement("div");
contbox.style.width = "500px";
contbox.style.height = "650px";
contbox.style.backgroundColor = "rgba(192,192,192,0.3)";
contbox.style.position = "absolute";
contbox.style.borderRadius = "40px";
contbox.style.left = "50%"
contbox.style.display = "flex";
contbox.style.justifyContent = "space-around";
contbox.style.flexDirection = "column";
contbox.style.alignItems = "center";
footerbox.appendChild(contbox);

var inp1 = document.createElement("span");
inp1.style.fontSize = "25px";
inp1.style.color = "black";
inp1.innerHTML = "Name:";
contbox.appendChild(inp1);

var input1 = document.createElement("input");
input1.style.width = "90%";
input1.style.height = "40px";
input1.style.color = "black";
input1.style.border = "none";
contbox.appendChild(input1);

var inp2 = document.createElement("span");
inp2.style.fontSize = "25px";
inp2.style.color = "black";
inp2.innerHTML = "Email:";
contbox.appendChild(inp2);

var input2 = document.createElement("input");
input2.style.width = "90%";
input2.style.height = "40px";
input2.style.color = "black";
input2.style.border = "none";
contbox.appendChild(input2);

var inp3 = document.createElement("span");
inp3.style.fontSize = "25px";
inp3.style.color = "black";
inp3.innerHTML = "Password:";
contbox.appendChild(inp3);

var input3 = document.createElement("input");
input3.style.width = "90%";
input3.style.height = "40px";
input3.style.color = "black";
input3.style.border = "none";
contbox.appendChild(input3);

var textareadesc = document.createElement("span");
textareadesc.style.fontSize = "25px";
textareadesc.style.color = "black";
textareadesc.innerHTML = "Descripion:";
contbox.appendChild(textareadesc);

var textarea = document.createElement("textarea");
textarea.style.width = "90%";
textarea.style.height = "250px";
textarea.style.color = "black";
textarea.style.resize = "none";
textarea.style.border = "none";
contbox.appendChild(textarea);

var buts = document.createElement("button");
buts.style.width = "120px";
buts.style.height = "40px";
buts.style.backgroundColor = "lightblue";
buts.style.color = "white";
buts.style.border = "none";
buts.style.borderRadius = "30px";
buts.innerHTML = "Sign Up";
contbox.appendChild(buts);

