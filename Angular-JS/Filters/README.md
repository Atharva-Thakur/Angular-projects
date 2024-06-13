In AngularJS, filters are used to format the data displayed to the user. They allow you to transform the data in the view without changing the original data. Filters can be applied to expressions within templates using the pipe character (`|`) syntax.

AngularJS provides several built-in filters for common tasks like formatting numbers, dates, currency, and more. For example:

- **currency**: Formats a number as a currency.
- **date**: Formats a date object into a string based on a specified format.
- **uppercase**: Converts a string to uppercase.
- **lowercase**: Converts a string to lowercase.

Custom filters can also be created to meet specific formatting needs. You can define a custom filter using the `filter` method of your AngularJS module. Custom filters are defined as functions that accept input data and return transformed output data.

Here's an example of using a built-in filter in an AngularJS template:

```html
<div ng-app="myApp" ng-controller="myCtrl">
  <p>{{ amount | currency }}</p>
</div>
```

And the corresponding AngularJS code:

```javascript
angular.module('myApp', []).controller('myCtrl', function($scope) {
  $scope.amount = 1000; // This will be displayed as currency
});
```

This code will display the value of `$scope.amount` formatted as currency, thanks to the `currency` filter.

Overall, filters in AngularJS provide a convenient way to format and manipulate data directly within your views.