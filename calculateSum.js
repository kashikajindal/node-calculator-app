const calculateSumHandler = (req, res) => {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const obj = Object.fromEntries(params);
    const first = Number(obj.first);
    const second = Number(obj.second);
    const sum = first + second;

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Sum Result</title>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
              height: 100vh;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .result-box {
              background-color: white;
              padding: 50px 60px;
              border-radius: 20px;
              box-shadow: 0 4px 25px rgba(0,0,0,0.15);
              text-align: center;
              max-width: 400px;
              animation: fadeIn 0.8s ease-in-out;
            }
            h1 {
              color: #333;
              margin-bottom: 20px;
            }
            .sum-value {
              font-size: 48px;
              font-weight: 700;
              color: #007bff;
              margin: 20px 0;
              text-shadow: 2px 2px 8px rgba(0, 123, 255, 0.3);
              animation: pop 0.6s ease-in-out;
            }
            a {
              display: inline-block;
              text-decoration: none;
              background-color: #007bff;
              color: white;
              padding: 10px 25px;
              border-radius: 8px;
              transition: background-color 0.3s;
              margin-top: 20px;
              font-weight: 500;
            }
            a:hover {
              background-color: #0056b3;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pop {
              0% { transform: scale(0.8); opacity: 0.5; }
              100% { transform: scale(1); opacity: 1; }
            }
          </style>
        </head>
        <body>
          <div class="result-box">
            <h1>Calculated Sum</h1>
            <div class="sum-value">${sum}</div>
            <a href="/">Go to Home</a>
          </div>
        </body>
      </html>
    `);
    res.end();
  });
};

exports.calculateSumHandler = calculateSumHandler;
