"use strict";$(document).ready((function(){var e=$(".slide1").toArray();var r=$(".slide2").toArray();$(".next").on("click",(function(){$(".next").css("pointer-events","none");$(".prev").css("pointer-events","none");var t=0;var n=$(e).last().width();for(var a=0;a<e.length-1;a++){var i=e[a];t+=$(i).width();movePicture($(i),n)}movePicture($(e).last(),-t);e=createNewArray(e,1);var o=0;var v=$(r).last().width();for(var c=0;c<r.length-1;c++){var s=r[c];o+=$(s).width();movePicture($(s),v)}movePicture($(r).last(),-o);r=createNewArray(r,1)}));$(".prev").on("click",(function(){$(".prev").css("pointer-events","none");$(".next").css("pointer-events","none");var t=0;var n=$(e).first().width();for(var a=1;a<e.length;a++){var i=e[a];t+=$(i).width();movePicture($(i),-n)}movePicture($(e).first(),t);e=createNewArray(e,0);var o=0;var v=$(r).first().width();for(var c=1;c<r.length;c++){var s=r[c];o+=$(s).width();movePicture($(s),-v)}movePicture($(r).first(),o);r=createNewArray(r,0)}))}));function movePicture(e,r){e.animate({left:"+=".concat(r)},350,"swing",(function(){$(".next").css("pointer-events","auto");$(".prev").css("pointer-events","auto")}))}function createNewArray(e,r){var t=[];if(r==1){t[0]=e.pop();for(var n=1;n<=e.length;n++){t[n]=e[n-1]}}else{for(n=0;n<e.length-1;n++){t[n]=e[n+1]}t[e.length-1]=e[0]}return t}