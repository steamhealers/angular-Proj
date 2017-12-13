angular.module('app', []).controller('indexCtrl', ['$scope', function ($scope) {
    $scope.task = ''
    $scope.taskList = []
    $scope.submit = function (e) {
        if (e.keyCode == 13) {
            if ($scope.task) {
                $scope.taskList.push({
                    name: $scope.task,
                    isComplere: false,
                    isEditing: false
                })
                $scope.task = ''
            }
        }
    }
    $scope.delTask = function (index) {
        $scope.taskList.splice(index, 1)
    }
    $scope.modify = function (item) {
        item.isEditing = true
    }
    $scope.commit = function (item) {
        item.isEditing = false
    }
    $scope.getUnCmp = function () {
        let count = 0
        $scope.taskList.forEach((item, index) => {
            if (!item.isComplete) {
                count++
            }
        });
        return count
    }
    $scope.clearCmp = function () {
        console.log(1);
        for (var i = 0; i < $scope.taskList.length;) {
            if ($scope.taskList[i].isComplete) {
                $scope.taskList.splice(i, 1)
            } else {
                i++
            }
        }
    }
}])