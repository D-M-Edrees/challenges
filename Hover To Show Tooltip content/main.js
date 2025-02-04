function Toggle(){
    var paragraph=document.getElementById("para");
    if(paragraph.style.display=="none"){
        paragraph.style.display="block";
}
else{
    paragraph.style.display="none";
}
}
function flip(){
    var paragraph=document.getElementById("para");
    if(paragraph.style.display=="block"){
        paragraph.style.display="none";
}
}