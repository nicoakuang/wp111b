while (true) {
    let cmd = prompt("shell>")
    if (cmd == 'exit') break
    console.log(eval(cmd))
}