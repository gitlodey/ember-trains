import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    code: DS.attr('string'),
    name: DS.attr('string'),
    type: DS.attr('string'),
    typeName: DS.attr('string'),
    lat: DS.attr('string'),
    lng: DS.attr('string'),
    address: DS.attr('string'),
});
