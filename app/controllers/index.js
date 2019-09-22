import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onClick() {
            console.log('WIN')
            this.send('goToStations');
        }
    }
});
