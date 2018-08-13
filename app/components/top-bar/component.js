import Component from '@ember/component';

export default Component.extend({
    classNames: ['top-bar'],
    router: Ember.inject.service(),
    openPhone: false,
    actions: {
        home: function(){
            this.get('router').transitionTo('index');
        },
        phone: function() {
            this.toggleProperty('openPhone');
        }
    }
});
