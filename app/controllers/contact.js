import Ember from 'ember';

export default Ember.Controller.extend({
    email:'',
    message:'',
    response:'',
    clearAll:function(){this.set('email',null);this.set('message',null);},
    messageGreaterThanFive:Ember.computed.gte('message.length',6),
    emailValid:Ember.computed.match('email',/^.+@.+\..+$/),
    valid:Ember.computed.and('emailValid','messageGreaterThanFive'),
    isDisabled:Ember.computed.not('valid'),

    actions: {
     contact(){
        const email = this.get('email');
        const message = this.get('message');
        const newContact = this.store.createRecord('contact',{
         email:email,
         message:message
        });
        newContact.save().then((response)=>{
            this.set('response',`Contact with id: ${response.get('id')} has been saved succesfully!`);
           
            this.clearAll();
           
        });


     }   
    }
});
