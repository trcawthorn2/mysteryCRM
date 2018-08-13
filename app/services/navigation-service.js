import Service from '@ember/service';

export default Service.extend({
    router: Ember.inject.service(),
    preventNavigation: function(message){
        this.set('message', message);
    },
    navigate: function(route) {
        if(!this.get('message')){
            this.get('router').transitionTo(route);
        }
    }
});
