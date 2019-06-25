function worke(onres){
    if(!onres){
       var gesi = document.getElementById("ges").value;
       var teil = document.getElementById("tei").value;
       var nans = testr(gesi)||testr(teil);
       if(!nans){
       var colls = reacts(gesi ,teil);
       if(colls != Infinity){
       document.getElementById("savesd").innerText="Ergebnis:\n" + colls + "%";
       console.log("Calculated: \n\t" + colls + "%");}
       else{
           console.warn("Forbidden Calc");
       }
       }else{
        console.warn("Forbidden Input");
       }
    }else{
        document.getElementById("ges").value="";
        document.getElementById("tei").value="";
        document.getElementById("savesd").innerText="";
    }
}
function reacts(ges, tei){
    return (tei/ges)*100;
}
function testr(gesi){
    return (gesi == undefined||gesi==null||gesi == "");
}