class Matrix{
    constructor(a) {
        this.a = a;
    }

    add(b) {
        for(let i=0;i<b.length;i++){
            let x="";
            for(let j=0;j<b[i].length;j++){
                x+=(b[i][j]+this.a[i][j]);
                x+=" ";
            }
            console.log(x);
        }
    }

    mul(x) {
        var b=0,a="";
        for(var i=0;i<x.length;i++){
            a="";
            for(var j=0;j<x.length;j++){
                b=0;
                for(var k=0;k<x.length;k++){
                    b+=x[i][k]*this.a[k][j];
                }
                a+=b;
                a+=" ";
            }
            console.log(a);
        }
    }
}

let a=[[1,2,3],[4,5,6],[7,8,9]],b=[[9,8,7],[6,5,4],[3,2,1]];;
let x=new Matrix(a);
x.add(b);
console.log()
x.mul(b);