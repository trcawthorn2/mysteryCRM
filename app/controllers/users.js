import Controller from '@ember/controller';

export default Controller.extend({
    userService: Ember.inject.service(),
    
    init:function(){
        this._super(...arguments);
       this.get('userService').getUsers().then((data)=>{
           this.set('contacts', data);
       });
    },
    columnDefs: Ember.computed(function () {
        return [
            { key: 'firstName', header: 'First Name', width: '20%' },
            { key: 'lastName', header: 'Last Name', width: '20%' },
            { key: 'company', header: 'Company', width: '20%' },
            { key: 'phoneNumber', header: 'Phone', width: '20%' },
            { key: 'email', header: 'Email', width: '20%' }
        ];
    }),
    actions:{
        addContact: function(){

        }
    }
});
