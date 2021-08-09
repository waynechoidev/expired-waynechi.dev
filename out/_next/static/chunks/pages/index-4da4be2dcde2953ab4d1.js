(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3290:function(t,i,s){"use strict";s.r(i),s.d(i,{default:function(){return d}});var e=s(5893),n=s(7294),a=s(1530),h=s.n(a);function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function r(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function c(t,i,s){return i&&r(t.prototype,i),s&&r(t,s),t}var u=function(){function t(i,s,e,n){o(this,t),this.x=e,this.y=n,this.fixedY=n,this.speed=.05,this.cur=i,this.max=s}return c(t,[{key:"update",value:function(){this.cur+=this.speed,this.y=this.fixedY+Math.sin(this.cur)*this.max}}]),t}(),f=function(){function t(){o(this,t)}return c(t,[{key:"resize",value:function(t,i){this.stageWidth=t,this.stageHeight=i,this.centerX=t/2,this.centerY=.11*i,this.init()}},{key:"init",value:function(){this.point=new u(0,5,this.stageWidth/6,this.centerY)}},{key:"draw",value:function(t){t.beginPath(),t.fillStyle="#000FFF",this.point.update();var i=new Image;i.src="images/boat.svg",t.drawImage(i,this.point.x,this.point.y,this.stageHeight/2,this.stageHeight/1.5),t.fill(),t.closePath()}}]),t}(),l=function(){function t(i,s,e){o(this,t),this.index=i,this.totalPoints=s,this.color=e,this.points=[]}return c(t,[{key:"resize",value:function(t,i){this.stageWidth=t,this.stageHeight=i,this.centerX=t/2,this.centerY=i/1.4,this.pointGap=this.stageWidth/(this.totalPoints-1),this.init()}},{key:"init",value:function(){this.points=[];for(var t=0;t<this.totalPoints;t++){var i=new u(this.index+t,15*Math.random(),this.pointGap*t,this.centerY);this.points[t]=i}}},{key:"draw",value:function(t){t.beginPath(),t.fillStyle=this.color;var i=this.points[0].x,s=this.points[0].y;t.moveTo(i,s);for(var e=0;e<this.totalPoints;e++){e<this.totalPoints&&this.points[e].update();var n=(i+this.points[e].x)/2,a=(s+this.points[e].y)/2;t.quadraticCurveTo(i,s,n,a),i=this.points[e].x,s=this.points[e].y}t.lineTo(i,s),t.lineTo(this.stageWidth,this.stageHeight),t.lineTo(this.points[0].x,this.stageHeight),t.fill(),t.closePath()}}]),t}(),v=function(){function t(){o(this,t),this.totalWaves=3,this.totalPoints=10,this.color=["rgba(0,199,235,0.2)","rgba(0,146,199,0.2)","rgba(0,87,158,0.2)"],this.waves=[];for(var i=0;i<this.totalWaves;i++){var s=new l(i,this.totalPoints,this.color[i]);this.waves[i]=s}}return c(t,[{key:"resize",value:function(t,i){for(var s=0;s<this.totalWaves;s++){this.waves[s].resize(t,i)}}},{key:"draw",value:function(t){for(var i=0;i<this.totalWaves;i++){this.waves[i].draw(t)}}}]),t}(),g=function(){function t(i){o(this,t),this.canvas=i.current,console.log(i),this.ctx=this.canvas.getContext("2d"),this.waveGroup=new v,this.boat=new f,this.resize(),requestAnimationFrame(this.animate.bind(this))}return c(t,[{key:"resize",value:function(){this.stageWidth=this.canvas.offsetWidth,this.stageHeight=this.canvas.offsetHeight,this.canvas.width=this.stageWidth,this.canvas.height=this.stageHeight,this.waveGroup.resize(this.stageWidth,this.stageHeight),this.boat.resize(this.stageWidth,this.stageHeight)}},{key:"animate",value:function(t){this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight),this.boat.draw(this.ctx),this.waveGroup.draw(this.ctx),requestAnimationFrame(this.animate.bind(this))}}]),t}();function d(){var t=(0,n.useRef)();return(0,n.useEffect)((function(){new g(t)})),(0,e.jsx)("div",{className:h().container,children:(0,e.jsx)("canvas",{ref:t,className:h().canvas})})}},3685:function(t,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3290)}])},1530:function(t){t.exports={container:"index_container__3XRMM",canvas:"index_canvas__BH3sG"}}},function(t){t.O(0,[774,888,179],(function(){return i=3685,t(t.s=i);var i}));var i=t.O();_N_E=i}]);