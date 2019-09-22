import Component from '@ember/component';

export default Component.extend({
    mapCenter: [59.962265, 30.319748],
    coordinates: [],

    generateMap() {
        
        if (ymaps) {
            
            let init = () => {
                
                var myMap = new ymaps.Map("map", {
                    center: this.mapCenter,
                    zoom: 6
                }, {
                    searchControlProvider: 'yandex#search'
                });


                let myGeoObjects = []

                this.coordinates.forEach((coordinates) => {
                    myGeoObjects.push(new ymaps.Placemark(coordinates));
                });

                let clusterer = new ymaps.Clusterer({
                    clusterDisableClickZoom: true,
                    hasBoloon: false,
                });

                clusterer.add(myGeoObjects);
                myMap.geoObjects.add(clusterer);
            };

            ymaps.ready(init);

        }
    },

    didInsertElement() {
        this._super(...arguments);

        this.generateMap();
    }
});
