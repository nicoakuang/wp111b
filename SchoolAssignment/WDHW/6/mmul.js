function mmul(x,y) {
    var b=0,a="";
    for(var i=0;i<x.length;i++){
        a="";
        for(var j=0;j<x.length;j++){
            b=0;
            for(var k=0;k<x.length;k++){
                b+=x[i][k]*y[k][j];
            }
            a+=b;
            a+=" ";
        }
        console.log(a);
    }
}

var x=[[1,2,3],[4,5,6],[7,8,9]];
var y=[[9,8,7],[6,5,4],[3,2,1]];
mmul(x,y);