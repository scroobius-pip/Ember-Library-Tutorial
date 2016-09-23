import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    headerMessage: 'coming soon',
    responseMessage: '',

    // actualEmailAddress: Ember.computed('emailAddress',function(){
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

    // emailAddressChanged: Ember.observer('emailAddress',function(){
    //     console.log('observer is called', this.get('emailAddress'));
    // }),
    // disabledChanged: Ember.computed('isDisabled',function(){
    //     if (this.get('isDisabled') == true ) {
    //         console.log("isDisabled is true");

    //     }
    //     else{
    //         console.log('isDisabled is false');
    //     }
    // })
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    actions: {
        saveInvitation() {
            const email = this.get('emailAddress');
            const newInvitation = this.store.createRecord('invitation', {
                email: email
            });
            newInvitation.save().then((response) =>{
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress',null);

            });
           
        
    }
}


});