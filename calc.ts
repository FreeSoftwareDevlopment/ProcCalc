function partsui(ges: number, procs: number){
    return ges*(procs / 100);
}
function reacts(ges:number, tei:number){
    return (tei/ges)*100;
}
function testr(gesi:any){
    return (gesi == undefined||gesi==null||gesi == "");
}