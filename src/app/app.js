import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl, DefaultService, DefaultServiceName} from './default';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    // controllerAs: 'app'
  };
};


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
  $stateProvider
    .state(DefaultState.name, DefaultState);
  })
  .run(($state) => {
    $state.go(DefaultState.name);
  })  
  .directive('app', app)
  .controller(DefaultState.controller, DefaultCtrl)
  .service(DefaultServiceName, DefaultService);

export default MODULE_NAME;