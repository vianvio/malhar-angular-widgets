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
  .directive('jobHistory', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'template/widgets/jobHistory/jobHistory.html',
      scope: {
      },
      controller: function () {
      },
      link: function (scope, element) {
        scope.$watch(function() {
          return element.width();
        }, function(newValue) {
          if (newValue > 675) { // (533 + 818) / 2
            element.find('.job-history-large').show();
            element.find('.job-history-medium').hide();
            element.find('.job-history-small').hide();
          } else if (newValue > 343 && newValue <= 675){ // (145 + 533) / 2
            element.find('.job-history-large').hide();
            element.find('.job-history-medium').show();
            element.find('.job-history-small').hide();
          } else {
            element.find('.job-history-large').hide();
            element.find('.job-history-medium').hide();
            element.find('.job-history-small').show();
          }
        });
      }
    };
  });