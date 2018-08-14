import Component from '@ember/component';

export default Component.extend({
    navigationService: Ember.inject.service(),
    classNames: ['sidebar'],
    phoneOpen: false,
    actions: {
        togglePhone: function(){
            this.toggleProperty('phoneOpen');
        },
        navigate: function(route){
            if(route){
                this.get('navigationService').navigate(route);
            } else {
                //promptService with message 
                //on then allow navigation
                //then only fires if they click ok
            }
        }
    }
});
