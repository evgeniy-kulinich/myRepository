app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Hot Tours'; 
  $scope.promo = 'The most popular tours this month.';
  $scope.products = [
  	{ 
    	name: 'Greece', 
    	price: 350, 
    	pubdate: new Date('2015', '02', '02'), 
    	cover: 'img/hot/greece1.jpg',
      cover1:'img/hot/greece2.jpg',
      cover2:'img/hot/greece3.jpg',
      cover3:'img/hot/greece4.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Egypt', 
    	price: 600, 
    	pubdate: new Date('2015', '04', '05'), 
    	cover: 'img/hot/egypt1.jpg',
      cover1:'img/hot/egypt2.jpg',
      cover2:'img/hot/egypt3.jpg',
      cover3:'img/hot/egypt4.jpg',
    	likes: 0 ,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Dubai', 
    	price: 800, 
    	pubdate: new Date('2015', '03', '09'), 
    	cover: 'img/hot/dubai1.jpg',
      cover1:'img/hot/dubai2.jpg',
      cover2:'img/hot/dubai3.jpg',
      cover3:'img/hot/dubai4.jpg',
    	likes: 0 ,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Antalia', 
    	price: 250, 
    	pubdate: new Date('2015', '00', '11'), 
    	cover: 'img/hot/antalia1.jpg',
      cover1:'img/hot/antalia2.jpg',
      cover2:'img/hot/antalia3.jpg',
      cover3:'img/hot/antalia4.jpg',
    	likes: 0 ,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);