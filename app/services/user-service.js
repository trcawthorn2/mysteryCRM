import Service from '@ember/service';

export default Service.extend({
    store: Ember.inject.service(),
    init: function(){
        this._super(...arguments);
    },
    getUsers: function(){
        return this.get('store').findAll('user').then((data)=>{
            if(data.length == 0){
                this.get('store').createRecord('user', {firstName:"Samson", lastName:"Blackstone", createdDate: Date.now(), address: "Blackstone's circus", phoneNumber:"317-555-1234", comapny:"Blackstone's circus"}).save();
            }
        });
    }
});
