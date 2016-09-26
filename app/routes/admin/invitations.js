import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('invitation');
    },
    actions: {
        deleteInvitation(invitation) {
            let confirmation = confirm("Delete invitation?");
            if (confirmation) {
                invitation.destroyRecord();
            }
        }
    }
});