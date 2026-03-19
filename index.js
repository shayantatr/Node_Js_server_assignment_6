// import librery

const http = require("http");

// port number

const PORT = 3000;

// A helper function to provide a consistent HTML template with CSS

const layout = (title, content) => `
  <!doctype html>
  <html lang="en">
  <head>
  
  <title>${title}</title>
  <style>
  body {
    font-family: sans-serif;
    line-height: 1.6;
    padding: 20px;
    color: #333;
    }
    
    nav {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      }
      
      nav a {
        margin-right: 15px;
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
        }
        
        .container {
        max-width: 800px;
        margin: auto;
      }

      h1 {
        color: #2c3e50;
      }

      .error {
        color: #e74c3c;
      }
    </style>
    </head>
  <body>
  <div class="container">
  <nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
            <a href="/contact">Contact</a>
            </nav>
        ${content}
    </div>
    </body>
</html>

`;

//creating server use to http

const app = http.createServer((req, res) => {
  console.log(`request received for: ${req.url}`);

  let htmlContent = "";
  let statusCode = 200;

  // manual routing logic
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(
      (htmlContent = layout(
        "Home - Laundry Service",
        `
        <h1>Fresh Press Laundry Home</h1>
        <p>Welcome to our professinal Laundry server. Clean clothes, happy life!</p>
        `,
      )),
    );
    res.end();
    return;
  } else if (req.url === "/about") {
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(
      (htmlContent = layout(
        "About Us",
        `
        <h1>About Our Service</h1>
        <p>We have been serving the community since 2026 with eco -friendly washing tech</p>
        `,
      )),
    );
    res.end();
    return;
  } else if (req.url === "/contact") {
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(
      (htmlContent = layout(
        "Contact Us",
        `
                <h1>Get in Touch</h1>
                <p>Email: support@freshpress.com <br> Phone: +91-9123456789</p>
                `,
      )),
    );
    res.end();
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      (htmlContent = layout(
        "404 Not Found",
        `
        <h1 class="error">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        `,
      )),
    );
    res.end();
    return;
  }

  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.end(htmlContent);
  return;
});

// Application listening
app.listen(PORT, () => {
  console.log(`Node js server is up and running - http://localhost:${PORT}`);
});
