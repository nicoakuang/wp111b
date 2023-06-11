let variables = {}; // Object to store variables

while (true) {
  let cmd = prompt("shell>");
  if (cmd === 'exit') break;

  try {
    let result;
    if (cmd.startsWith('let 1')) {
      // Handle variable assignment
      eval(cmd);
      let varName = cmd.split(' ')[1].split('=')[0].trim();
      result = `${varName} has been assigned a value.`;
    } else {
      result = eval(cmd); // Evaluate the command
    }

    if (result !== undefined) {
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}
