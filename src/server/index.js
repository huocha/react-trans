const express = require('express');
const os = require('os');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

const user = {
	email: 'jasmine@test.com',
	password: 'jasmine'
};

app.post('/api/login/', (req, res) => {
	console.log( req.body )
	const { email, password } = req.body;

	if( email === user.email && password === user.password ){
		res.sendStatus(200); return;
	}
	res.sendStatus(500);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
