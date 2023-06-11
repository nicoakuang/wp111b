function counter(list){
    let dict={};
    for(let i of list){
        if(i in dict)
            dict[i]++;
        else
            dict[i]=1;
    }
    return dict;
}

let list = ['a', 'dog', 'chase', 'a', 'cat'];
console.log(counter(list))