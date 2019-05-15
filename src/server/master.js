const path = require('path');

const initDbConnector = acc => new Promise((resolve, reject) => {

	require( path.join( __dirname, 'lib', 'db.js' ) ).init( (error, result) => {
  	if( error ){ reject( error ); return; }
  	acc.db = result.db;
		acc.session = result.session;
		resolve(acc);

	});

});

const startServer = acc => new Promise((resolve, reject) => {

	require('./server.js').start(acc);

	resolve(acc);
});


Promise.resolve({})
	.then( initDbConnector )
	.then( startServer )
	.catch( console.error );
