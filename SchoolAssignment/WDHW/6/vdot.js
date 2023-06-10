function vdot(a,b){
    var ans=0;
    for(var i=0;i<a.length;i++){
        ans+=a[i]*b[i];
    }
    console.log(ans);
}

let x=[1,2],y=[3,4];
vdot(x,y);