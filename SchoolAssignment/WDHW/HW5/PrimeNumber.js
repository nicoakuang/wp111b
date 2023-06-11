function isPrime(n){
    for(var i=2;i<=Math.sqrt(n);i+=(i==2)?1:2){
        if(n%i==0)
            return 0;
    }
    return 1;
}

console.log(isPrime(9973))