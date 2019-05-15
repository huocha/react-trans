// mongodb://<dbuser>:<dbpassword>@ds125683.mlab.com:25683/jasmine
const K = require('../config.js');

// initialisation du connecteur à la database
function init( callback ){

	// connection au serveur
	const mongodb = require('mongodb');
	mongodb.MongoClient.connect( `mongodb://${K.DB.dbuser}:${K.DB.dbpassword}@ds125683.mlab.com:25683/jasmine`, {useNewUrlParser : true}, ( error, client ) => {
		if( error ){ callback( error ); return; }

		const db = client.db(K.DB.dbuser);
		client.on('error', error => {
			console.group();
			console.error( 'DB error');
			console.error( error );
			console.groupEnd();
		});

		const session = client.startSession();

		// modifie les collections
		const collectionFn = db.collection;
		db.collection = ( ...arg ) => {

			// note: idéalement, il serait préférable de surcharger directement le prototype, mais pas certain que cela soit possible

			const collections_c = collectionFn.apply( db, arg );

			// wrappante aggregate + toArray
			const aggregateToArray = collection => ( pipeline, callback ) => collection.aggregate( pipeline, {allowDiskUse: true}, ( error, result_cu ) => error ? callback( error ) : result_cu.toArray( callback ) );
			collections_c.aggregateToArray = aggregateToArray( collections_c );

			// définit les options par défaut (notammenet de la session qui simplifie la gestion des transaction)
			const setDefaultOptions = (context, fnName, options, optIndex) => {
				const fn = context[fnName];
				typeof(fn) !== 'function' ? console.log( fnName.padEnd(50), typeof(fn) ) : null;
				context[fnName] = (...arg) => {
					if( typeof arg[optIndex] === 'object' ){ Object.entries(options).forEach( ([key, value]) => arg[optIndex][key] === undefined ? arg[optIndex][key] = value : null ); }
					else if( arg[optIndex] === undefined ){ arg[optIndex] = options; }
					else{ arg.splice(optIndex, 0, options ); }
					return fn.apply(context, arg);
				};
			};

			// note: pour la liste des commandes, cf. \node_modules\mongodb\lib\operations\collections_ops.js

			setDefaultOptions( collections_c, 'bulkWrite', {session}, 1 );
			setDefaultOptions( collections_c, 'count', {session}, 1 );
			//setDefaultOptions( collections_c, 'countDocuments', {session}, 1 ); // pas concerné
			setDefaultOptions( collections_c, 'createIndex', {session}, 1 );
			setDefaultOptions( collections_c, 'createIndexes', {session}, 1 );
			setDefaultOptions( collections_c, 'deleteMany', {session}, 1 );
			setDefaultOptions( collections_c, 'deleteOne', {session}, 1 );
			setDefaultOptions( collections_c, 'distinct', {session}, 2);
			setDefaultOptions( collections_c, 'dropIndex', {session}, 1 );
			setDefaultOptions( collections_c, 'dropIndexes', {session}, 0 );
			setDefaultOptions( collections_c, 'ensureIndex', {session}, 1 );
			setDefaultOptions( collections_c, 'find', {session}, 1 );
			setDefaultOptions( collections_c, 'findAndModify', {session}, 3);
			setDefaultOptions( collections_c, 'findAndRemove', {session}, 2 );
			setDefaultOptions( collections_c, 'findOne', {session}, 1 );
			setDefaultOptions( collections_c, 'findOneAndDelete', {session}, 1 );
			setDefaultOptions( collections_c, 'findOneAndReplace', {session}, 2 );
			setDefaultOptions( collections_c, 'findOneAndUpdate', {session}, 2 );
			setDefaultOptions( collections_c, 'geoHaystackSearch', {session}, 2 );
			setDefaultOptions( collections_c, 'group', {session}, 6 );
			setDefaultOptions( collections_c, 'indexes', {session}, 0 );
			setDefaultOptions( collections_c, 'indexExists', {session}, 1 );
			setDefaultOptions( collections_c, 'indexInformation', {session}, 0 );
			setDefaultOptions( collections_c, 'insert', {session}, 1 );
			setDefaultOptions( collections_c, 'insertMany', {session}, 1 );
			setDefaultOptions( collections_c, 'insertOne', {session}, 1 );
			setDefaultOptions( collections_c, 'isCapped', {session}, 0 );
			setDefaultOptions( collections_c, 'mapReduce', {session}, 2 );
			setDefaultOptions( collections_c, 'options', {session}, 0 );
			//setDefaultOptions( collections_c, 'parallelCollectionScan', {session}, X ); // pas concerné
			setDefaultOptions( collections_c, 'reIndex', {session}, 0 );
			// setDefaultOptions( collections_c, 'removeDocuments', {session}, 2 ); // pas concerné (wrappante interne)
			setDefaultOptions( collections_c, 'rename', {session}, 1 );
			setDefaultOptions( collections_c, 'replaceOne', {session}, 2 );
			setDefaultOptions( collections_c, 'save', {session}, 1 );
			setDefaultOptions( collections_c, 'stats', {session}, 0 );
			//setDefaultOptions( collections_c, 'updateDocuments', {session}, 3 ); // pas concerné (wrappante interne)
			setDefaultOptions( collections_c, 'updateMany', {session}, 2 );
			setDefaultOptions( collections_c, 'updateOne', {session}, 2 );

			return collections_c;

		};


		// on ajoute le ObjectID dans le db, pour éviter d'avoir à un faire un require('mongodb') à chaque fois que l'on veut requêter sur un id
		db.ObjectID = mongodb.ObjectID;
		db.close = client.close;

		callback( null, { db, session, client } );

	});

}

exports.init = init;
