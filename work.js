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
function workedfl(onres){
    if(!onres){
       var gesi = document.getElementById("gesasa").value;
       var teil = document.getElementById("procse").value;
       var nans = testr(gesi)||testr(teil);
       if(!nans){
       var colls = partsui(gesi ,teil);
       if(colls != Infinity){
       document.getElementById("targest").innerText="Ergebnis:\n" + colls + "%";
       console.log("Calculated: \n\t" + colls + "%");}
       else{
           console.warn("Forbidden Calc");
       }
       }else{
        console.warn("Forbidden Input");
       }
    }else{
        document.getElementById("gesasa").value="";
        document.getElementById("procse").value="";
        document.getElementById("targest").innerText="";
    }
}