const { calculateSumHandler } = require("./calculateSum");

const reqestUserHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            .container {
              background-color: white;
              padding: 40px;
              border-radius: 20px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.2);
              text-align: center;
              width: 350px;
            }
            h1 {
              color: #333;
              margin-bottom: 25px;
            }
            a {
              display: inline-block;
              text-decoration: none;
              background-color: #007bff;
              color: white;
              padding: 10px 20px;
              border-radius: 8px;
              transition: background-color 0.3s;
            }
            a:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go to Calculator</a>
          </div>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #f6d365, #fda085);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            .calc-box {
              background-color: #fff;
              padding: 40px;
              border-radius: 20px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.2);
              text-align: center;
              width: 350px;
            }
            h1 {
              margin-bottom: 20px;
              color: #333;
            }
            input[type="number"] {
              width: 90%;
              padding: 10px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 8px;
              font-size: 16px;
            }
            input[type="submit"] {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 8px;
              font-size: 16px;
              cursor: pointer;
              transition: background-color 0.3s;
            }
            input[type="submit"]:hover {
              background-color: #0056b3;
            }
            a {
              display: inline-block;
              margin-top: 15px;
              text-decoration: none;
              color: #007bff;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="calc-box">
            <h1>Calculator</h1>
            <form action="/calculate-sum" method="POST">
              <input type="number" name="first" placeholder="First Number" required><br>
              <input type="number" name="second" placeholder="Second Number" required><br>
              <input type="submit" value="Calculate Sum">
            </form>
            <a href="/">Back to Home</a>
          </div>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/calculate-sum" && req.method === "POST") {
    return calculateSumHandler(req, res);
  }

  // 404 Page
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>404 Error</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .error-box {
            background-color: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            text-align: center;
          }
          h1 {
            color: #e74c3c;
          }
          a {
            display: inline-block;
            text-decoration: none;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            transition: background-color 0.3s;
          }
          a:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="error-box">
          <h1>404 Error</h1>
          <p>Page not found</p>
          <a href="/">Go to Home</a>
        </div>
      </body>
    </html>
  `);
  return res.end();
};

exports.reqestUserHandler = reqestUserHandler;
