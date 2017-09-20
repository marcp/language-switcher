import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  language: null,
  languages: Ember.String.w('English German'),
  actions: {
    selectLanguage(language) {
      let locale = this.localeFromLanguage(language);
      this.set('language', language);
      this.set('i18n.locale', locale);
    }
  },
  localeFromLanguage(language) {
    switch (language) {
      case 'English':
        return 'en';
      case 'German':
        return 'de';
    }

    return 'unknown';
  }
});
