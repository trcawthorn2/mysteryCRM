import Component from '@ember/component';

export default Component.extend({
    classNames: ['generic-modal'],
    openMonitor: Ember.observer('open', function(){
        if(this.get('open')){
            this.set('showModal', true);
        }else {
            Ember.run.debounce(this, this.hideContent, 200);
        }
    }),
    hideContent: function(){
        if(!this.get('open')){
            this.set('showModal', false);
        }
    }
});
