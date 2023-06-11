function truthTable(n,s=""){
    var a=s;
    a+="0";
    var b=s;
    b+="1";
    if(n==0)
        console.log(s);
    else{
        truthTable(n-1,a);
        truthTable(n-1,b);
    }
}

truthTable(10);