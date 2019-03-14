function showWithVar(){
    var text = 'luiz carlos';
    if(true){
        var text = 'texto';
    }
    console.log(text);
}

showWithVar();

function showWithLet(){
    let text:string = 'luiz carlos';
    if(true){
        let text = 'texto';
    }
    console.log(text);
}

showWithLet();