requirejs.config({
    'baseUrl': 'js/',
    'paths': {
      'jquery': 'vendors/jquery.min',
      'bootstrap': 'vendors/bootstrap.min'
    },
    shim: {
      'bootstrap': ['jquery']
    }
});

$(function(){

  var playlist = new Playlist();

});
