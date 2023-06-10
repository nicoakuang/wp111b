function vadd(a,b){
    var s="";
    for(var i=0;i<a.length;i++){
        s+=a[i]+b[i];
        s+=" ";
    }
    console.log(s)
}

let x=[1,2],y=[3,4];
vadd(x,y);