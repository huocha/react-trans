const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const K = require('./config.js');


exports.start = ({ db, session }) => {

	console.log( 'NODE_ENV: ', process.env.NODE_ENV );
	console.log( __dirname );

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static('dist'));


	// parser de cookies
	app.use( require( 'cookie-parser' )() );

	// compresseur (tout particulièrement GZIP)
	app.use( require('compression')() );


	// persistence des session
	const MongoDBStore = require('connect-mongodb-session')(expressSession);
	const store = new MongoDBStore({
		uri: `mongodb://${K.DB.dbuser}:${K.DB.dbpassword}@ds125683.mlab.com:25683/jasmine`,
		databaseName: K.dbuser,
		collection: 'session'
	}); // note: si problème de performance, serait préférable d'utiliser un store sous redis
	const cookie = { maxAge: 365*24*60*60*1000 }; // note: nécessaire de fixer un maxAge pour la persistence du cookie

	// #TODO: what is secret??
	app.use( expressSession({ secret: K.AUTH.SESSION.SECRET, resave: false, saveUninitialized: true, store, cookie }));

	// initialisation des routes
	// app.use( '/api/auth/', require( './routes/auth.js' )( express.Router(), db, app, { session } ) ); // note : important de le faire en premier car crée req.user

	// démarre le serveur
	app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

};
