import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('newtodo');
  this.route('details', {path: 'detail/:itemid'});
  this.route('list');
  this.route('comment', {path: ':itemid'});
  this.route('edit', {path: 'edit/:itemid'});
});

export default Router;
