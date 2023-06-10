function repeat(f,n){
    var x=[];
    while(n--){
        x.push(f());
    }
    return x;
    
}

var n=repeat(Math.random,10);
for(var i=0;i<n.length;i++){
    console.log(n[i]);
}