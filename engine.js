angular.module('skill', [
	'ctrl',
	'xc.indexedDB'
]).config(function ($indexedDBProvider) {

	$indexedDBProvider.connection('zhmotDB')
		.upgradeDatabase('myVersion', function(event, db, tx){
			console.log('lol');

			var objStore = db.createObjectStore('money', {keyPath: 'id'});
			objStore.createIndex('amount_idx', 'amount', {unique: false});
		}
	);
})	.service('zhmotDB', ['xc.indexedDB', function() {
	this.OBJECT_STORE_NAME = 'money';
	this.myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);

	this.initData = function () {
		return myObjectStore.getAll().then(function(results) {
			return results;
		});
	};

	this.insert = function (name, amount) {
		var id = (Math.random() * 10000000000000000).toString();
		this.myObjectStore.insert({"id": id,"name": name, "amount": amount}).then(function(e){
			console.log('g')
		});
	}




	//		var myQuery = $indexedDB.queryBuilder().$index('age_idx').$gt(40).$asc.compile();
	//myObjectStore.each(myQuery).then(function(cursor){
	//cursor.key;
	//cursor.value;
	//
	//});


}]);;

angular.module('ctrl', []).controller('myControllerName', function($scope, zhmotDB) {



$scope.add = function (name, amount) {
	zhmotDB.insert(name, amount)
};

















	});
