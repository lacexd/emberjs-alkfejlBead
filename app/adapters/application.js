import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://ember-api-lacexd.c9users.io',
    namespace: '',
});
    