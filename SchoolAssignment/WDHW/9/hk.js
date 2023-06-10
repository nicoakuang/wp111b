function dropbutton_click(){
    document.getElementById("droplist").classList.toggle("show");
}

window.onclick=function(click){
    if(!click.target.matches(".dropbutton")){
        let droplist=document.getElementById("droplist");
        if(droplist.classList.contains("show"))
            droplist.classList.remove("show");
    }
}

let pages={
    "#home":"這裡是首頁",
    "#login":`
    <label>請輸入帳號:</label>
    <input type="text" placeholder="帳號"><br>
    <label>請輸入密碼:</label>
    <input type="text" placeholder="密碼"><br>
    <input type="submit" value="登入">
    `,
    "#logout":`
    <label>確定要登出？</label><br>
    <input type="submit" value="確定">
    <input type="submit" value="取消">
    `,
    "#signup":`
    <label>請輸入帳號:</label>
    <input type="text" placeholder="帳號"><br>
    <label>請輸入密碼:</label>
    <input type="text" placeholder="密碼"><br>
    <input type="submit" value="註冊">
    `
};

let main = document.querySelector('#main')

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}