var sgInput = document.getElementById('sgInput');
sgInput.addEventListener('keyup', function(){
    var sg = sgInput.value;
    var sgSpans = document.querySelectorAll(".sg");
    for(var i=0; i < sgSpans.length; i++)
        sgSpans[i].textContent = sg;
});
var ssInput = document.getElementById('ssInput');
ssInput.addEventListener('keyup', function(){
    var ss = ssInput.value;
    var ssSpans = document.querySelectorAll(".ss");
    for(var i=0; i < ssSpans.length; i++){
        ssSpans[i].textContent = ss;}
    var temaSpans = document.querySelectorAll(".tema");
    var tema = Math.ceil((ss % 10)/3);
    for(var i=0; i < temaSpans.length; i++){
        temaSpans[i].textContent = tema;}
    var ssA = ((ss % 10) + 3 + Math.floor(((ss % 10) + 3)/10)) % 10;
    var ssASpans = document.querySelectorAll(".ssA");
    for(var i=0; i < ssASpans.length; i++){
        ssASpans[i].textContent = ssA;}
    var temaASpans = document.querySelectorAll(".temaA");
    var temaA = Math.ceil((ssA % 10)/3);
    for(var i=0; i < temaASpans.length; i++){
        temaASpans[i].textContent = temaA;}
    var ssB = ((ss % 10) + 6 + Math.floor(((ss % 10) + 6)/10)) % 10;
    var ssBSpans = document.querySelectorAll(".ssB");
    for(var i=0; i < ssBSpans.length; i++){
        ssBSpans[i].textContent = ssB;}
    var temaBSpans = document.querySelectorAll(".temaB");
    var temaB = Math.ceil((ssB % 10)/3);
    for(var i=0; i < temaBSpans.length; i++){
        temaBSpans[i].textContent = temaB;}
});

