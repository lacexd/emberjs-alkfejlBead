import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    todo: DS.belongsTo('todo', { async: false , inverse: 'comments' })    
});
