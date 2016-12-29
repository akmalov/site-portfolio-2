ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
            center: [59.859546, 30.253337], // Санкт-Петербург
            zoom: 13,
            controls : []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([59.855660, 30.324834], {
            hintContent: 'Мой дом'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/map_marker.svg',
            iconImageSize: [42, 56]
        });

    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable('scrollZoom');
});