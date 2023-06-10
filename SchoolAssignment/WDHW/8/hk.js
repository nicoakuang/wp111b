function wide() {
    let list=document.getElementsByClassName("list");
    for(let i of list){
        i.style.display="block";
    }
}

function resetwide() {
    let list=document.getElementsByClassName("list");
    for(let i of list){
        i.style.display="none";
    }
}