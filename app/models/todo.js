import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    comments: DS.hasMany('comment', { async: false , inverse: 'todo'})  
});
