const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");
const ca = require("chalk-animation");

// console.log(chalk.blue("This text is blue"));
// console.log(chalk.red("This text is red"));

const server = http.createServer((req, res) => {
    req.on("error", err => console.log("req err: ", err));
    res.on("error", err => console.log("res err: ", err));

    if (req.method == "GET") {
        res.write(`
                <html>
                <title>Colors</title>
				<div style='margin-top: 30px; display: flex; justify-content: center; align-items: center; height: 30px;'>
				<div style='display: flex; justify-content: center; align-items: center; width: 440px; height: 50px; border-radius: 10px;'>
                <form method='POST'>
                    <input style='margin: 2px; padding: 0; width: 220px; height: 30px; border-radius: 6px;' type='text' name='first' placeholder='first' autocomplete='off'></input>
                    <input style='margin: 2px; padding: 0; width: 220px; height: 30px; border-radius: 6px;' type='text' name='last' placeholder='last' autocomplete='off'></input>
                    <select style="margin: 2px; width: 100px;height: 30px; font-size: 16px; border-radius: 5px;" name='color'>
                        <option value='red'>red</option>
                        <option value='blue'>blue</option>
                        <option value='green'>green</option>
                        <option value='yellow'>yellow</option>
                        <option value='gray'>gray</option>
                        <option value='magenta'>magenta</option>
                        <option value='cyan'>cyan</option>
                    </select>
                    <button style='margin: 2px;padding: 0;width: 100px;height: 32px;background: #00B4CC;text-align: center;color: #fff;border-radius: 5px;font-size: 16px;' type='submit'>Go</button>
                </form>
				</div>
				</div>
                </html>
            `);
        res.end();
    }

    if (req.method == "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            console.log("body: ", body);
            let parsed = querystring.parse(body);
            console.log("parsed body: ", parsed);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(`
				<p style='text-align: center;'>
					<a style='font-size:60px; text-align: center; color:${parsed.color}' href="http://localhost:8080">
						Hello ${parsed.first}
					</a>
				</p>
                `);
            res.end();
        });
    }
});

server.listen(8080, () => ca.neon("Port 8080 listening"));
