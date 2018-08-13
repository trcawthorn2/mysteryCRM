import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('users', { path: '/users' });
  this.route('issues', { path: '/issues' });
  this.route('followUpTasks', { path: '/followUpTasks' });1
});

export default Router;
