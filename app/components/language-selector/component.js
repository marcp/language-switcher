import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  language: null,
  languages: Ember.String.w('English English-BCBSA German Spanish'),
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
      case 'English-BCBSA':
        return 'en-bcbsa';
      case 'German':
        return 'de';
      case 'Spanish':
        return 'es';
    }

    return 'unknown';
  }
});
