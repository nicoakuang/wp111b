function madd(x,y) {
    for(var i=0;i<x.length;i++){
        var a="";
        for(var j=0;j<x[i].length;j++){
            a+=(x[i][j]+y[i][j]);
            a+=" ";
        }
        console.log(a);
    }
}

var x=[[1,2,3],[4,5,6],[7,8,9]];
var y=[[9,8,7],[6,5,4],[3,2,1]];
madd(x,y);