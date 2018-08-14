import Component from '@ember/component';

export default Component.extend({
    classNames: ['top-bar'],
    router: Ember.inject.service(),
    openSettings: false,
    actions: {
        home: function(){
            this.get('router').transitionTo('index');
        },
        settings: function() {
            this.toggleProperty('openSettings');
        }
    }
});
