function partsui(ges, procs) {
    return ges * (procs / 100);
}
function reacts(ges, tei) {
    return (tei / ges) * 100;
}
function testr(gesi) {
    return (gesi == undefined || gesi == null || gesi == "");
}
