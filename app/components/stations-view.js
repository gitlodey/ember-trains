import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    stationsData: [],
    coordinates: computed('stationsData', function() {
        return this.get('stationsData').map((station) => {
            return [station.lat, station.lng];
        })
    }),
    sortedByTypeName: computed('stationsData', function() {
        return this.get('stationsData')
            .sortBy('typeName')
            .filter((station) => station.name && station.name.length > 0);
        
    })
});
