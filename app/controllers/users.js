import Controller from '@ember/controller';

export default Controller.extend({
    userService: Ember.inject.service(),
    init:function(){
        this._super(...arguments);
        this.set('contacts', this.get('userService').getUsers());
    },
    actions:{
        addContact: function(){

        }
    }
});
