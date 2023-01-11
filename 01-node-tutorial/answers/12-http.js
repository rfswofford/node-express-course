//to set up a web server

const http = require ('http'); 

// req is the incoming user request and res is the response we are sending back
const server = http.createServer((req, res) =>{
   if (req.url === '/'){
    res.end('welcome to our homepage')
   } else if (req.url === '/about'){
    res.end ('Here is our short history')
   } else {
    res.end(`
   <h1> Oops!</h1>
   <p> We can't seem to find the page you are looking for </p>
   <a href="/"> back home</a>
   `)
}
})

//the ports
server.listen(5000)