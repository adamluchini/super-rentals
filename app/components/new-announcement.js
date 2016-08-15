import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    newAnnouncementShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var announcementParams = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', announcementParams);
    }
  }
});
