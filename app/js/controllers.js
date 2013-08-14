﻿'use strict';

/* Controllers */

angular.module('httpmock.controllers', [])
  .controller('Mocks', function ($scope, $routeParams) {
    var nm = require('./netmock'),
      mocks = nm.mocks.getMocks(),
      mockName = $routeParams.name || app.current.mockName || Object.keys(mocks)[0],
      currentMock = mocks[mockName];
    currentMock.cls = 'active';
    app.current.controller = 'Mocks';
    app.current.mockName = currentMock.name;
    //列表
    $scope.mocks = mocks;
  })
  .controller('CurrentMock', function ($scope, $routeParams) {
    var nm = require('./netmock'),
      mocks = nm.mocks.getMocks(),
      mockName = $routeParams.name || app.current.mockName || Object.keys(mocks)[0],
      currentMock = mocks[mockName],
      routes = nm.mocks.getRoutes(currentMock.name);
    console.log($routeParams)
    //当前mock
    $scope.currentMock = currentMock;
    //当前mock的所有routes
    $scope.routes = routes;
    app.current.controller = 'Mocks';
    app.current.mockName = currentMock.name;

    //显示鼠标鼠标指向的route的自定义header
    $scope.showCustomHeaders = function (e) {
      $(e.target).next('div').show();
    };
    $scope.hideCustomHeaders = function (e) {
      $(e.target).next('div').hide();
    };
  })
  .controller('MockUpdate',function($scope){

  })
  .controller('System', function ($scope) {
    $scope.a = 1;
  });