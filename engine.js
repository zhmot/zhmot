angular.module('skill', [
	'ctrl',
	'xc.indexedDB'
]).config(function ($indexedDBProvider) {
	$indexedDBProvider.connection('zhmotDB')
		.upgradeDatabase('myVersion', function(event, db, tx){
			var objStore = db.createObjectStore('money', {keyPath: 'id'});
			objStore.createIndex('amount_idx', 'amount', {unique: false});
		}
	);
});

angular.module('ctrl', []).controller('myControllerName', function($scope, $indexedDB) {


















/*		$scope.objects = [];

		var OBJECT_STORE_NAME = 'money';

		var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);

		//$scope.addWaste = function () {
		//
		//};


		myObjectStore.insert({"ssn": "444-444-562-110","name": "John Doich", "age": 57}).then(function(e){
			console.log('g')
		});

		myObjectStore.getAll().then(function(results) {
			// Update scope
			$scope.objects = results;
		});*/

		/**
		 * execute a query:
		 * presuming we've an index on 'age' field called 'age_idx'
		 * find all persons older than 40 years
		 */

/*		var myQuery = $indexedDB.queryBuilder().$index('age_idx').$gt(40).$asc.compile();
		myObjectStore.each(myQuery).then(function(cursor){
			cursor.key;
			cursor.value;

		});*/
/*		var i = 0;
		$scope.fight = function () {
			i++;
			console.log(i);
			myObjectStore.insert({"ssn": i,"name": "John Doich", "age": 57}).then(function(e){
				console.log('g')
			});
		};
		$scope.all = function () {
			myObjectStore.getAll().then(function (data) {
				console.log(data)
			});

		}*/
	});
