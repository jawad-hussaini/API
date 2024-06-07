fetch('https://dummyjson.com/auth/RESOURCE', {
  method: 'GET', 
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
    'Content-Type': 'application/json'
  }, 
})
.then(res => res.json())
.then(console.log);