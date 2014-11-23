//Google Maps stuff
var map;
var MY_MAPTYPE_ID = 'custom_style';
var motionlab = new google.maps.LatLng(53.784,-2.648);
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: motionlab,
    disableDefaultUI: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var image = 'assets/img/map-marker.png';
    var myLatLng = new google.maps.LatLng(53.784426,-2.648842);
    var myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}
//Responsive part - load the slider and map is the screen size is 768px or upwards
if ($(window).width() >= 768){
    google.maps.event.addDomListener(window, 'load', initialize);
    $.ajax({
        url: "slider.html",
        cache: false,
        dataType: "html"
    })
    .done(function( data ) {
        //alert(data);
        $('.slider-container').append(data);
    });
}
//Initialise form validation
$.validate();

$(function() {
    //Test the js file is working
    //console.log( "ready!" );
    
    //Open navbar
    $( ".navbar-toggle" ).click(function() {
        $( ".navbar-nav" ).toggleClass( "open");
    });
    //Initialise slider and define options
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: false,
        nextText: '<span class="fa fa-chevron-right"></span>',
        prevText: '<span class="fa fa-chevron-left"></span>',
        pager: false
    });
});