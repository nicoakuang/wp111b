// Import the required library
const openai = require('openai');

// Function to communicate with the chatbot model
function chatgpt(question, lang, format) {
  // Call the OpenAI API to generate a response
  const response = openai.ChatCompletion.create({
    model: 'gpt-3.5-turbo',
    messages: [
      // Set the role and content for system message
      { role: 'system', content: 'You are a chatbot' },
      { role: 'system', content: `Answer in ${lang}` },
      { role: 'system', content: `Format in ${format}` },
      // Set the role and content for user message (question)
      { role: 'user', content: question }
    ]
  });

  // Return the generated response from the API
  return response['choices'][0]['message']['content'];
}

// Set your OpenAI API key
openai.api_key = 'YOUR_API_KEY';

// List of available commands
const opList = ['quit', 'chatgpt', 'load', 'save', 'shell', 'translate', 'history'];

// Read command line arguments
const narg = process.argv.length;
const user = process.argv[2] || 'user';
const lang = process.argv[3] || 'English';
const format = process.argv[4] || 'Markdown+LaTex, add space before and after $..$';

// Print welcome message
console.log(`Welcome ${user} to shellgpt. You may use the following commands:`);
console.log('1. chatgpt <question>');
console.log('2. load <file>');
console.log('3. save <file>');
console.log('4. translate');
console.log('5. history');
console.log('6. quit\n');

// Initialize variables
let response = null;
let question = null;
const commandList = [];

// Main loop to process commands
while (true) {
  const command = prompt('\ncommand> ');

  // Add the command to the command list
  commandList.push(command);

  // Split the command into operation and arguments
  const args = command.split(' ');
  const op = args[0];
  const tail = args.slice(1).join(' ');

  if (!opList.includes(op)) {
    console.log(`Operation error, only ${opList} allowed!`);
    continue;
  }

  if (op === 'chatgpt') {
    question = tail;
    response = chatgpt(question, lang, format);
    console.log(response);
  }

  if (op === 'quit') {
    break;
  }

  // Handle other operations (shell, load, save, translate, history) as needed
  // ...

  // Print command history
  if (op === 'history') {
    for (let i = 0; i < commandList.length; i++) {
      console.log(`${i}: ${commandList[i]}`);
    }
  }
}
