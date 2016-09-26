import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('contact');
    },
    actions: {
        deleteContacts(contact) {
            let confirmation = confirm("Delete?");
            if (confirmation) {
                contact.destroyRecord()

            }
        }
    }

});