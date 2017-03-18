import { DefaultServiceName } from './service';

export const DefaultCtrl = ['$scope', DefaultServiceName, class defaultCtrl {
  constructor($scope, DefaultService) {
    console.log(this.title);
    this.title = "Damn you take nice photos";
    DefaultService.getPosts()
    .then((posts) => {
      $scope.posts = posts.data.data;
    });
    }
}];
