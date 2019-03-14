function showWithVar() {
    var text = 'luiz carlos';
    if (true) {
        var text = 'texto';
    }
    console.log(text);
}
showWithVar();
function showWithLet() {
    var text = 'luiz carlos';
    if (true) {
        console.log(text);
    }
    console.log(text);
}
showWithLet();
