import Ember from 'ember';

export default Ember.Component.extend({
    buttonLabel: 'Save',
    action: {
        buttonClicked(param){
            this.sendAction('action',param);
        }
    }


});
