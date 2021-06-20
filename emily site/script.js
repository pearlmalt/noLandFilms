
$(document).ready(function(){
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}
var elems = [];
$("#filmGrid li").each(function(){
elems.push($(this));
});
$("#filmGrid").empty();
shuffleArray(elems);
elems.forEach((val)=>{
$("#filmGrid").append(val);
});
});
