import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    getIssues: function(){
        return this.get('store').findAll('issue');
    },
    removeIssue: function(issue){
        issue.destroyRecord();
    },
    createIssue: function(issue){
        issue.createdDate = Date.now();
        issue.status = "Open";
        this.get('store').createRecord('issue', issue).save();
    }
});
