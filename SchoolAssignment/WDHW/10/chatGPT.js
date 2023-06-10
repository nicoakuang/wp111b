let txt=prompt("請輸入文字：")
const jsonResponse = await fetch("https://api.openai.com/v1/chat/completions", 
{
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": txt}],
        "temperature": 0.7
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
    }
})
const jsonData = await jsonResponse.json()
console.log(jsonData["choices"][0]["message"]["content"])