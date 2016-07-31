(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium");

  viewer.dataSources.add(Cesium.KmlDataSource.load("uta.kml"));
  // コードをここに記述

}());

