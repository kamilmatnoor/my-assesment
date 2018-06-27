angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.loginData = {};

    $scope.difficulty = 0;

    $scope.challengesList = [{
      title: '500 Calories Run',
      difficulty: 1,
      imagePath: 'img/card-02.png',
      desc_cal: ' 500 Calories |',
      desc_points: ' 60 Points',
      desc_level: ' Beginner  |'
    }, {
      title: '5 KM Cycling',
      difficulty: 1,
      imagePath: 'img/cyc.jpg',
      desc_cal: ' 700 Calories |',
      desc_points: ' 100 Points',
      desc_level: ' Beginner  |'
    }, {
      title: '2.4 KM Run',
      difficulty: 1,
      imagePath: 'img/card-01.png',
      desc_cal: ' 650 Calories |',
      desc_points: ' 120 Points',
      desc_level: ' Beginner  |'
    }, {
      title: '1.5 KM Run & 50 Mountain Climbers',
      difficulty: 2,
      imagePath: 'img/mc.jpg',
      desc_cal: ' 1450 Calories |',
      desc_points: ' 160 Points',
      desc_level: ' Intermediate  |'
    }, {
      title: '50 Mountain Climbers & 40 Burpees',
      difficulty: 2,
      imagePath: 'img/bp.jpg',
      desc_cal: ' 1750 Calories |',
      desc_points: ' 140 Points',
      desc_level: ' Intermediate  |'
    }, {
      title: '10 Minutes Stairs Climbing & 40 Burpees',
      difficulty: 2,
      imagePath: 'img/sr.jpg',
      desc_cal: ' 1850 Calories |',
      desc_points: ' 170 Points',
      desc_level: ' Intermediate  |'
    }, {
      title: '6.5 KM Run & 50 Jumping Jacks',
      difficulty: 3,
      imagePath: 'img/jp.jpg',
      desc_cal: ' 2300 Calories |',
      desc_points: ' 370 Points',
      desc_level: ' Advanced  |'
    }, {
      title: '10 KM Run',
      difficulty: 3,
      imagePath: 'img/jog.png',
      desc_cal: ' 2600 Calories |',
      desc_points: ' 349 Points',
      desc_level: ' Advanced  |'
    }, {
      title: '30 Minutes Butterfly stroke Swimming',
      difficulty: 3,
      imagePath: 'img/sw.jpg',
      desc_cal: ' 2850 Calories |',
      desc_points: ' 399 Points',
      desc_level: ' Advanced  |'
    }];

    $scope.challengesListOrig = $scope.challengesList;

    $scope.searchData = {
      searchQuery: ''
    };

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    $scope.getDifficulties = function (value) {
      var tempArr = [];
      $scope.searchData = {
        searchQuery: ''
      };

      $scope.challengesList = $scope.challengesListOrig;

      for (var i = 0; i < $scope.challengesList.length; i++) {
        if (value == 0) {
          tempArr = $scope.challengesList = $scope.challengesListOrig;
        } else {
          if ($scope.challengesList[i].difficulty == value) {
            tempArr.push($scope.challengesList[i]);
          }
        }
      }
      $scope.difficulty = value;
      $scope.challengesList = tempArr;
    }

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Open the login modal
    $scope.challenges = function () {
      alert("Hello World");
    };

    $scope.keyPressed = function () {
      var currentLevel = $scope.difficulty;
      var currentList = [];
      var tempArr = [];

      for (var i = 0; i < $scope.challengesListOrig.length; i++) {
        if (currentLevel == 0) {
          currentList = $scope.challengesList = $scope.challengesListOrig;
        } else {
          if ($scope.challengesListOrig[i].difficulty == currentLevel) {
            currentList.push($scope.challengesListOrig[i]);
          }
        }
      }

      if ($scope.searchData.searchQuery != "") {
        for (var i = 0; i < currentList.length; i++) {
          if (currentList[i].title) {
            var tempText = currentList[i].title.toUpperCase();
            var tempSearch = $scope.searchData.searchQuery.toUpperCase();
            if (tempText.indexOf(tempSearch) != -1) {
              tempArr.push(currentList[i]);
            }
          }
        }
        $scope.challengesList = tempArr;
      } else {
        $scope.challengesList = currentList;
      }

    }

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  }).controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function () {
      $state.go('app.dashboard');
    };
    $scope.next = function () {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
      $scope.slideIndex = index;
    };
  })
