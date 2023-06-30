import express from 'express';
import mysql from 'mysql2';
const app = express();
const port = 3000;

const pool = mysql.createPool({
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'nodedb',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

const nameList = ['John', 'Peter', 'Sally', 'Jane', 'Tom', 'Jerry', 'Mary', 'Bob', 'Alice', 'Kate', 'Mike', 'Jack', 'Jill', 'Bill', 'David', 'Susan', 'George', 'Helen', 'Richard', 'Paul', 'Anna', 'Chris', 'Daniel', 'Grace'];

pool.query(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`, function (err, rows, fields) {
	if (err) throw err;
	console.log('Table created');
});

app.get('/', (req, res) => {

	// add a random name to the table
	const randomName = nameList[Math.floor(Math.random() * nameList.length)];
	pool.query(`INSERT INTO people (name) VALUES ('${randomName}')`, function (err, rows, fields) {
		if (err) throw err;
		console.log('Name inserted: ', randomName);
		pool.query(`SELECT name FROM people`, function (err, rows, fields) {
			console.log(rows);
			if (err) throw err;
			res.send(`
				<h1>Full Cycle Rocks!</h1><br/>
				<h2>Names:</h2>
				${rows.map(row => `<p>${row.name}</p>`).join('')}`);
		});
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));