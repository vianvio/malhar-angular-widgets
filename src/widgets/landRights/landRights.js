/*
 * Copyright (c) 2014 DataTorrent, Inc. ALL Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('ui.widgets')
  .directive('landRights', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'template/widgets/landRights/landRights.html',
      scope: {
      },
      controller: function () {
      },
      link: function (scope, element) {
        scope.$watch(function() {
          return element.width();
        }, function(newValue) {
          if (newValue > 343) { // (533 + 145) / 2
            element.find('.land-rights-medium').show();
            element.find('.land-rights-small').hide();
          } else {
            element.find('.land-rights-medium').hide();
            element.find('.land-rights-small').show();
          }
        });
      }
    };
  });