(()=>{var t={906:(t,e,s)=>{const l=s(432);t.exports=class{constructor(){this.board=[],this.ships=[],this.misses=[],this.hits=[],this.allOcean=!1}createArr=()=>{for(let t=0;t<10;t++){let t=new Array(10).fill("");this.board.push(t)}};placeShip=(t,e)=>{let s=Math.abs(t[0]-e[0]);if(0!==s){for(let e=0;e<s;e++)if(""!==this.board[t[0]+e][t[1]])throw new Error;for(let e=0;e<=s;e++)this.board[t[0]+e][t[1]]=`ship${this.ships.length}`;this.ships.push(new l(s+1))}let a=Math.abs(t[1]-e[1]);if(0!==a){for(let e=0;e<=a;e++)if(""!==this.board[t[0]][t[1]+e])throw new Error;for(let e=0;e<=a;e++)this.board[t[0]][t[1]+e]=`ship${this.ships.length}`;this.ships.push(new l(a+1))}};recieveAttack=t=>{if(""!==this.board[t[0]][t[1]]){let e=this.board[t[0]][t[1]];e=Number(e.charAt(e.length-1)),this.ships[e].hit(),this.allSunk(),this.hits.push(t)}else this.misses.push(t)};allSunk=()=>{let t=!0;for(const e of this.ships)e.sunk||(this.allOcean=!1,t=!1);t&&(this.allOcean=!0)}}},211:t=>{t.exports=class{constructor(){this.illegalMoves=[],this.nextMoves=[],this.checked=[],this.counter=0}attack=(t,e)=>{e.recieveAttack(t)};randomAttack=t=>{if(t.hits.length>this.counter){if(t.hits[this.counter][1]+1<10&&t.hits[this.counter][1]+1>0){let e=[];e.push(t.hits[this.counter][0]),e.push(t.hits[this.counter][1]+1);let s=!0;for(let t=0;t<this.illegalMoves.length;t++)this.illegalMoves[t][0]===e[0]&&this.illegalMoves[t][1]===e[1]&&(s=!1);s&&(console.log(e,1),this.nextMoves.push(e),this.illegalMoves.push(e))}if(t.hits[this.counter][0]+1<10&&t.hits[this.counter][0]+1>0){let e=[];e.push(t.hits[this.counter][0]+1),e.push(t.hits[this.counter][1]);let s=!0;for(let t=0;t<this.illegalMoves.length;t++)this.illegalMoves[t][0]===e[0]&&this.illegalMoves[t][1]===e[1]&&(s=!1);s&&(console.log(e,2),this.nextMoves.push(e),this.illegalMoves.push(e))}if(t.hits[this.counter][0]-1<10&&t.hits[this.counter][0]-1>0){let e=[];e.push(t.hits[this.counter][0]-1),e.push(t.hits[this.counter][1]);let s=!0;for(let t=0;t<this.illegalMoves.length;t++)this.illegalMoves[t][0]===e[0]&&this.illegalMoves[t][1]===e[1]&&(s=!1);s&&(console.log(e,3),this.nextMoves.push(e),this.illegalMoves.push(e))}if(t.hits[this.counter][1]-1<10&&t.hits[this.counter][1]-1>0){let e=[];e.push(t.hits[this.counter][0]),e.push(t.hits[this.counter][1]-1);let s=!0;for(let t=0;t<this.illegalMoves.length;t++)this.illegalMoves[t][0]===e[0]&&this.illegalMoves[t][1]===e[1]&&(s=!1);s&&(console.log(e,4),this.nextMoves.push(e),this.illegalMoves.push(e))}this.counter++}if(0!==this.nextMoves.length)console.log(this.nextMoves[0],5),this.attack(this.nextMoves[0],t),this.nextMoves.shift();else{let e=[],s=!0;e.push(this.getRandom11()),e.push(this.getRandom11());for(let t=0;t<this.illegalMoves.length;t++)this.illegalMoves[t][0]===e[0]&&this.illegalMoves[t][1]===e[1]&&(s=!1);s?(this.illegalMoves.push(e),this.attack(e,t)):this.randomAttack(t)}};getRandom11=()=>Math.floor(10*Math.random())}},432:t=>{t.exports=class{constructor(t){this.length=t,this.hits=0,this.sunk=!1}hit=()=>{this.hits=this.hits+1,this.ocean()};ocean=()=>{this.hits>=this.length?this.sunk=!0:this.sunk=!1}}}},e={};function s(l){var a=e[l];if(void 0!==a)return a.exports;var o=e[l]={exports:{}};return t[l](o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var l in e)s.o(e,l)&&!s.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";s(432);var t=s(906),e=s.n(t),l=s(211),a=s.n(l);let o=new(e()),i=0;o.createArr();let h=new(e());h.createArr();let r=new(a()),n=[],c=[];const d=function(){const t=document.querySelector(".pwrapper"),e=document.querySelector(".cwrapper");return{displayBoards:()=>{let s=[];for(let t=0;t<10;t++){let e=document.createElement("div");e.textContent=String.fromCharCode(t+65),e.classList.add("label"),e.classList.add("vert"),s.push(e)}let l=document.createElement("div");l.classList.add("row"),l.classList.add("labelRow");for(let t=0;t<s.length;t++)l.appendChild(s[t]);t.appendChild(l);for(let e=0;e<10;e++){let s=document.createElement("div");s.classList.add("row");let l=document.createElement("div");l.textContent=e+1,l.classList.add("label"),s.appendChild(l);for(let t=0;t<10;t++){let l=document.createElement("div");l.dataset.one=e,l.dataset.two=t,o.board[e][t]?(l.style.backgroundColor="#ADD8E6",l.dataset.hit=!0):(l.style.backgroundColor="gray",l.dataset.hit=!1),l.classList.add("cell"),n.push(l),s.appendChild(l)}t.appendChild(s)}let a=[];for(let t=0;t<10;t++){let e=document.createElement("div");e.textContent=String.fromCharCode(t+65),e.classList.add("label"),e.classList.add("vert"),a.push(e)}let r=document.createElement("div");r.classList.add("row"),r.classList.add("labelRow");for(let t=0;t<a.length;t++)r.appendChild(a[t]);e.appendChild(r);for(let t=0;t<10;t++){let s=document.createElement("div");s.classList.add("row");let l=document.createElement("div");l.textContent=t+1,l.classList.add("label"),s.appendChild(l);for(let e=0;e<10;e++){let l=document.createElement("div");l.dataset.one=t,l.dataset.two=e,l.style.backgroundColor="gray",c.push(l),h.board[t][e]?l.addEventListener("click",(()=>{l.style.backgroundColor="#FF7F7F",5===i&&f(l.dataset.one,l.dataset.two)}),{once:!0}):l.addEventListener("click",(()=>{l.style.backgroundColor="white",5===i&&f(l.dataset.one,l.dataset.two)}),{once:!0}),l.classList.add("cell"),s.appendChild(l)}e.appendChild(s)}},clearBoard:()=>{t.replaceChildren(),e.replaceChildren()}}}();function u(){for(let t=0;t<c.length;t++)c[t].style.pointerEvents="none"}function p(){for(let t=0;t<c.length;t++)c[t].style.pointerEvents="auto"}function g(t){return Math.floor(Math.random()*t)}function v(t){let e=g(2)+1;if(1===e){let e=!0;for(;e;)try{let s=g(11-t),l=g(11),a=s+t-1;h.placeShip([s,l],[a,l]),e=!1}catch{}}else if(2===e){let e=!0;for(;e;)try{let s=g(11-t),l=g(11),a=s+t-1;h.placeShip([l,s],[l,a]),e=!1}catch{}}}function f(t,e){u(),h.recieveAttack([Number(t),Number(e)]),h.allOcean&&alert("player has won"),function(){r.randomAttack(o);for(let t=0;t<o.misses.length;t++)for(let e=0;e<n.length;e++)"false"==n[e].dataset.hit&&o.misses[t][0]==n[e].dataset.one&&o.misses[t][1]==n[e].dataset.two&&(n[e].style.backgroundColor="white");for(let t=0;t<o.hits.length;t++)for(let e=0;e<n.length;e++)"true"==n[e].dataset.hit&&o.hits[t][0]==n[e].dataset.one&&o.hits[t][1]==n[e].dataset.two&&(n[e].style.backgroundColor="red")}(),o.allOcean&&alert("computer has won"),p()}v(5),v(4),v(3),v(3),v(2),d.displayBoards(),u(),document.querySelector(".place").addEventListener("submit",(t=>{t.preventDefault();let e,s=Number(document.getElementById("len").value),l=document.getElementById("startingCoord").value,a=document.getElementsByName("direction");for(let t=0;t<a.length;t++)a[t].checked&&(e=a[t].value);let h=document.getElementById("len"),r=null;switch(l.substring(0,1)){case"A":r=0;break;case"B":r=1;break;case"C":r=2;break;case"D":r=3;break;case"E":r=4;break;case"F":r=5;break;case"G":r=6;break;case"H":r=7;break;case"I":r=8;break;case"J":r=9}null===r&&alert("Please enter a valid coordinate");let n=Number(l.substring(1,2)),c=[],u=[];"vertical"===e?(c.push(n-1),c.push(r),u.push(c[0]+s-1),u.push(c[1])):"horizontal"===e&&(c.push(n-1),c.push(r),u.push(c[0]),u.push(c[1]+s-1));try{o.placeShip(c,u),d.clearBoard(),d.displayBoards(),h.remove(h.selectedIndex),i++,console.log(i)}catch{alert("ships cannot overlap or go out of bounds")}5===i&&p()}))})()})();