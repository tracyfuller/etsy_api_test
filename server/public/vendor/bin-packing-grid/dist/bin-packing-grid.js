!function(){"use strict";function a(a,b){return document.defaultView.getComputedStyle(a,null).getPropertyValue(b)}function b(a){return a.map(function(a){return a.slice(0)})}function c(a,c,d,e,f,g){var i,j;if(c+f>g)return!1;for(a=b(a),j=d;d+e>j;j+=1)for(void 0===a[j]&&(a[j]=h()),i=c;c+f>i;i+=1){if(1===a[j][i])return!1;a[j][i]=1}return a}function d(a,c){function d(a,b){var d=document.createElement("div");Polymer.dom(c.root).appendChild(d),d.style.width=c.cellSize+"px",d.style.height=c.cellSize+"px",d.style.top=(c.cellSize+c.gutterSize)*a+"px",d.style.left=(c.cellSize+c.gutterSize)*b+"px",d.className="bin-packing-filler"}Polymer.dom(c.root).querySelectorAll(".bin-packing-filler").forEach(function(a){Polymer.dom(c.root).removeChild(a)});var e,f,g;for(g=b(a),g.reverse(),e=0;e<g.length;e+=1)for(f=0;f<c.columns;f+=1)0===g[e][f]&&(0===e?g[e][f]=!1:g[e-1][f]===!1?g[e][f]=!1:d(a.length-e-1,f))}function e(a,b){var e,f;f=[h()],e=Array.prototype.slice.call(a,0),e.forEach(function(a){var d,e,g,h,i,j,k=[];for(d=0;d<f.length;d+=1)for(e=0;e<b.columns;e+=1)if(0===f[d][e]&&(g=c(f,e,d,a.rows,a.cols,b.columns),g!==!1)){j=f[d].indexOf(1,e),k.push({grid:g,left:f[d].slice(e,j),y:d,x:e});break}return k.length>0?(k.sort(function(a,b){return a.grid.length<b.grid.length?-1:a.grid.length>b.grid.length?1:a.y<b.y?-1:a.y>b.y?1:a.x>b.x?-1:a.x<b.x?1:0}),i=k.shift(),a.item.setAttribute("top",i.y),a.item.setAttribute("left",i.x),void(f=i.grid)):(h=f.length,g=c(f,0,f.length,a.rows,a.cols,b.columns),f=g,a.item.setAttribute("top",h),void a.item.setAttribute("left",0))}),d(f,b)}function f(b){var c;b.style.width="auto",window.requestAnimationFrame(function(){c=parseInt(a(b,"width"),10),b.columns=Math.floor(c/(b.cellSize+b.gutterSize)),h=function(){return Array.apply(0,Array.call(0,b.columns)).map(function(){return 0})},b.style.width=b.columns*(b.cellSize+b.gutterSize)-b.gutterSize+"px",e(b.elements,b)})}var g,h,i;g=Function.prototype.call.bind(Array.prototype.map),Polymer({is:"bin-packing-grid",properties:{cellSize:{type:Number,value:100},gutterSize:{type:Number,value:5}},created:function(){this.elements=this.elements||[]},init:function(){var a,b=this;a=Polymer.dom(this).querySelectorAll("bin-packing-item"),this.elements=g(a,function(a){var b,c;return b=parseInt(a.getAttribute("cols"),10),c=parseInt(a.getAttribute("rows"),10),{area:b*c,cols:b,rows:c,item:a}}),i&&window.removeEventListener("resize",i),i=f.bind(0,b),window.addEventListener("resize",i),i()},ready:function(){this.init()}})}();