/**
 *
 * Main controller.js file
 * Define controllers with data used
 *
 *
 * Functions (controllers)
 *  - MainCtrl
 *  - modalDemoCtrl
 *  - agileBoard
 *
 *
 */

/**
 * MainCtrl - controller
 * Contains several global data used in different view
 *
 */
function MainCtrl() {

    /**
     * daterange - Used as initial model for data range picker in Advanced form view
     */
    this.daterange = {startDate: null, endDate: null};


};


/**
 * dashboardFlotOne - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFlotOne() {
}

/**
 * homeController - for all workingSets 
 */
function homeController($scope,$stateParams,$state,$http,filterService,workingSetWebAPIService,$uibModal) {
    $scope.workingSetList = workingSetWebAPIService.getData();
    $scope.workingSetList.then (function (response) {
        $scope.businessControlProfileList  = response.data;
//        alert($scope.businessControlProfileList[0].controlSets);
        $scope.controlSets = $scope.businessControlProfileList.controlSets;
//        alert($scope.controlSets);
        angular.forEach($scope.businessControlProfileList, function (item) {
            if(item.compliance <= 50)
                {
                    item.color = "#682c25";
                }
            else if (item.compliance > 50 && item.compliance <= 60)
                {
                    item.color = "#dda33e";     
                }
            else if (item.compliance > 60 && item.compliance <= 70 )
                {
                    item.color = "#1ab394";
                }
            else if (item.compliance > 70 && item.compliance <= 80)
                {
                    item.color = "#1ab394";
                }
            else if (item.compliance > 80 && item.compliance <= 90)
                {
                    item.color = "#0e6037";
                }
            else {
                item.color = "#02512a";
            }
        })

       // alert($scope.BusinessControlProfileList);
        $scope.determineColor = function(color)
        {
           // alert(color);
            return color;
        }
        $scope.color = '#1ab394';
        console.log($scope.businessControlProfileList[0]);
        $scope.clicked = {};
        $scope.showClick = function(bcp) {
            //$scope.clicked = data;
           // alert(bcp.name);
            $state.go('dashboards.dashboardSingleWorkingSet', {obj: bcp});
        }
    });
    $scope.complianceScore = function(workingSet){
        $scope.workingSetName = workingSet.name;
        var modalInstance = $uibModal.open( {
            templateUrl : 'views/complianceScore.html',
            size : 'sm',
            scope : $scope,
            controller : complianceScoreCtrl
        });
    };
}
/**
 * dashboardFlotTwo - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFlotTwo($scope,$stateParams,$state,$http,filterService,workingSetHistoryService,$uibModal) {
    
     
}

function complianceScoreCtrl($scope,$http,$uibModalInstance,filterService,$filter,filterWebAPIService,$interpolate,responsibleUserService,Config) {
    
    //alert($scope.workingSetName);
}

/**
 * dashBoardController - for single workingSet
 */
function dashBoardController($scope,$stateParams,$state,$http,filterService,workingSetWebAPIService) {
}

/**
 * dashboardRACIPerformance - simple controller for data
 * for RACI performance in Dashboards
 */
function dashboardRACIPerformance($scope, SweetAlert){
}

/**
 * dashboardComplianceTrend - simple controller for data
 * for ComplianceTrend in Dashboards
 */

function dashboardComplianceTrend($scope, SweetAlert) {

}


/**
 * dashboardFlotFive - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFive() {

}


/**
 * dashboardMap - data for Map plugin
 * used in Dashboard 2 view
 */

function dashboardMap() {
    var data = {
        "US": 298
//        "SA": 200,
//        "DE": 220,
//        "FR": 540,
//        "CN": 120,
//        "AU": 760,
//        "BR": 550,
//        "IN": 200,
//        "GB": 120
    };

    this.data = data;
}

/**
 * modalDemoCtrl - Controller used to run modal view
 * used in Basic form view
 */
function modalDemoCtrl($scope, $uibModal) {

    $scope.open = function () {

        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.open1 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example1.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.open2 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated fadeIn"
        });
    };

    $scope.open3 = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example3.html',
            size: size,
            controller: ModalInstanceCtrl
        });
    };

    $scope.open4 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated flipInY"
        });
    };
};

/**
 * ionSlider - Controller for data for Ion Slider plugin
 * used in Advanced plugin view
 */
function ionSlider() {
    this.ionSliderOptions1 = {
        min: 0,
        max: 5000,
        type: 'double',
        prefix: "$",
        maxPostfix: "+",
        prettify: false,
        hasGrid: true
    };
    this.ionSliderOptions2 = {
        min: 0,
        max: 10,
        type: 'single',
        step: 0.1,
        postfix: " carats",
        prettify: false,
        hasGrid: true
    };
    this.ionSliderOptions3 = {
        min: -50,
        max: 50,
        from: 0,
        postfix: "°",
        prettify: false,
        hasGrid: true
    };
    this.ionSliderOptions4 = {
        values: [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ],
        type: 'single',
        hasGrid: true
    };
    this.ionSliderOptions5 = {
        min: 10000,
        max: 100000,
        step: 100,
        postfix: " km",
        from: 55000,
        hideMinMax: true,
        hideFromTo: false
    };
}

/**
 * wizardCtrl - Controller for wizard functions
 * used in Wizard view
 */
function wizardCtrl($scope, $rootScope) {
    // All data will be store in this object
    $scope.formData = {};

    // After process wizard
    $scope.processForm = function() {
        alert('Wizard completed');
    };

}

/**
 * chartJsCtrl - Controller for data for ChartJs plugin
 * used in Chart.js view
 */
function chartJsCtrl() {

}

/**
 * userProfile - Controller for User Profile
 */
function userProfile($scope,authenticationService,USER_ROLES,Config,userService) {
    var userData = null, isAuthorizedUser = false, userProfile = null;
    if (sessionStorage.userData != null) {
        userData = JSON.parse(sessionStorage.userData);    
        if (userData != null) {
            if (!userData.isAuthenticated) {
                userData = null;
            }
        }
    }
    
    if (userData == null) {
            userData = authenticationService.getUserData();
            sessionStorage.userData = JSON.stringify(userData);
    }
    
    $scope.userName = userData.username; 
    $scope.userRoles = USER_ROLES;    
    $scope.currentUser = userService.getUserProfile(userData.bearerToken);
    $scope.currentUser.then (function (response) {
        $scope.userProfile = response.data;
        // alert($scope.userProfile);
        console.log($scope.userProfile);
        sessionStorage.userProfile = JSON.stringify($scope.userProfile);
        $scope.currentUserRoles = $scope.userProfile.roles.join();
    });
 if(sessionStorage.userProfile != null) {
     $scope.currentUserProfile = JSON.parse(sessionStorage.userProfile);
     if($scope.currentUserProfile != null)
         {
             if($scope.currentUserProfile.roles != null)
                 $scope.currentUserRoles = $scope.currentUserProfile.roles.join();
         }
     
 }
    else
        {
            $scope.currentUserRoles = 'none';
        } 
    $scope.isAuthorized = function (authorizedRoles) {
       // alert(authorizedRoles);
        isAuthorizedUser = false;
                if (!angular.isArray(authorizedRoles)) {
                  authorizedRoles = [authorizedRoles];
                }
//        alert(userData.userRole);
//        var val = userData.isAuthenticated && authorizedRoles.indexOf(userData.userRole) !== -1 ;
//        alert(val);
  //      alert(authorizedRoles);
        if(userData.isAuthenticated) {
            if(sessionStorage.userProfile != null)
                {
           var userProfile = JSON.parse(sessionStorage.userProfile); 
                    if(userProfile != null)
                        {
            angular.forEach(userProfile.roles, function (item) {
                if(authorizedRoles.indexOf(item) !== -1) {
                    isAuthorizedUser = true;
                }
            });
                        }
                }
        }
        //alert(isAuthorizedUser);
        return(isAuthorizedUser)
    };
    $scope.oldMagpieBaseLink = Config.oldTroutBaseURL + $scope.userName + "&id=B1AB60A1-BB56-4CC3-B4A2-85833C278C08";
    console.log($scope.oldMagpieBaseLink);
}

/**
 * oldMagpieApp - Controller for Old Magpie App
 */
function oldMagpieApp($scope,Config) {
    var userName;
    
    if (!angular.isUndefined($scope.userName))
    {
        if ($scope.userName.length > 0 ) {
            userName = $scope.userName;
        }
    }
    
    if (angular.isUndefined(userName)) {
        if (sessionStorage.userData != null) {
            userData = JSON.parse(sessionStorage.userData);    
            if (userData != null) {
                userName =  userData.username;
            }
        }    
    }        
   
}


/**
 * sideBarAgileBoard - Controller for sidebar-task Board
 */
function sideBar($scope, $http,$uibModal,$stateParams,filterService,$filter,tasksService,filterWebAPIService,dataService,$timeout) {
    $scope.initializing = true;
    $scope.filtersList1 = filterService.getFilters();
    $timeout(function () { $scope.count = filterService.getCount(); });
//    alert($scope.Count);
    if(filterService.getCount >= 1)
        {
            //            alert(filterService.getCount);
     $timeout(function () { $scope.initializing = false; });
        }
//    alert($scope.FiltersList1);
    $scope.tasksList= tasksService.getTasks();    
    $scope.changeInFilterCount = function () {
       if (filterService.getCount >= 1)
           {
               return true;
           }
       else {
           return false;
       }
    }
    $scope.FiltersList = filterWebAPIService.getData();
    $scope.FiltersList.then (function (response) {
        $scope.Filters  = response.data;
        console.log($scope.Filters);
        console.log($stateParams.filterText);
        $scope.count = filterService.getCount();
        //alert($scope.Count);
        $scope.numberOfTasksByFilterName = function (filter) {
            var count = 0;
//           alert($stateParams.bcp);
            angular.forEach(filter.taskFilterResultCounts, function (item) {
                        if (item.workingSetId == $stateParams.bcp) {
                            count = item.count;
//                            alert(count);
                        }
            });
//                         alert(count);
            return count;
        };
        //alert(tasksService.getTasksByCategory('NewUserTasks').Tasks);
        $scope.navClass = function (filter) {
            var found = $filter('findFilterById')($scope.Filters, $stateParams.filterText);
            return filter.filterId == found.FilterId ? 'active' : '';
        };
    });
}

/**
 * businessControlProfile  - Controller for Business Control Profiles-task Board
 */
function businessControlProfile($scope, $http,$uibModal,$stateParams,filterService,workingSetWebAPIService) {
    $scope.workingSetList = workingSetWebAPIService.getData();
    $scope.workingSetList.then (function (response) {
        $scope.businessControlProfileList  = response.data;
       // alert($scope.BusinessControlProfileList);
        console.log($scope.businessControlProfileList);
        $scope.navClass = function (bcp) {
        return bcp.workingSetId ==  $stateParams.bcp ? 'active' : '';
    };
    });
}

/**
raciTeam - Controller for RACI Team (teams_board) View
*/
function raciTeam($scope, $http,$uibModal,$stateParams,filterService,$filter,tasksService)
{
}

/**
 * taskBoard - Controller for task Board view
 */
function ModalInstanceCtrl ($scope,$http,$uibModalInstance,filterService,$filter,filterWebAPIService,$interpolate,responsibleUserService,Config,$stateParams) {

    //when a ResponsibleUser is selected from the dropDown
   
    $scope.onSelected = function (selectedItem) {
        $scope.selectedUser = selectedItem;
        $scope.id = selectedItem.id;
        $scope.firstName = selectedItem.firstName;
    }
    //when a TaskState is selected from the dropDown
    $scope.update = function (item) {
        $scope.selectedStateId = item;
    }
    //task Save
    $scope.ok = function() {
        //alert($scope.dialogTask.Id);
//        alert($scope.id);
         console.log('schedule: ', $scope.comment);
        var exp = $interpolate(Config.baseURL + 'Tasks/{{id}}', false, null, true),
            url = exp({id: $scope.dialogTask.id});
        
        var comment = {
                      id : 0,
                      lastModified : Date.now,
                      lastModifiedByUser : {
                        id : $scope.dialogTask.createdByUserId,
                        email : "",
                        firstName : "",
                        lastName : "",
                        userName : ""
                      },
                      text : $scope.comment.data
                    };
        $scope.dialogTask.comments.push(comment);
        //if the task was unassigned and a User is selected from the dropDown
        if(angular.isUndefined($scope.dialogTask.raciTeam.responsibleUser) || $scope.dialogTask.raciTeam.responsibleUser == null) {
            if(!angular.isUndefined($scope.id) && $scope.id !== null) {
                if ($scope.id != 0) {
                    $scope.dialogTask.raciTeam.responsibleUser = { id : $scope.id }; 
                } else {
                    $scope.dialogTask.raciTeam.responsibleUser = null;
                }
            }
        } else {
            if(!angular.isUndefined($scope.id) && $scope.id !== null) {
                //                    alert('Assigning');
                if ($scope.id != 0) {
                    $scope.dialogTask.raciTeam.responsibleUser.id = $scope.id;
                } else {
                    $scope.dialogTask.raciTeam.responsibleUser = null;
                }
            }
        }
        
        if($scope.selectedStateId == 2) {
            $scope.dialogTask.taskState.id = 2;
        }
        else if($scope.selectedStateId == 1) {
            $scope.dialogTask.taskState.id = 1;
        }
        else if($scope.selectedStateId == 3) {
            $scope.dialogTask.taskState.id = 3;
        }
        
        $scope.dialogTask.Title = $scope.dialogTask.title;
        $scope.dialogTask.Due = $scope.taskDue;
        

        var res;
//                alert($scope.dialogTask.Title);
        if(angular.isUndefined($scope.dialogTask.id) || $scope.dialogTask.id == null || $scope.dialogTask.id == 0) {
            //              alert('post');
            res = $http.post(Config.baseURL + 'Tasks/',$scope.dialogTask);
        } else {
            res = $http.put(url,$scope.dialogTask);
        }
        
        res.then( function(data) {
            var taskId, isNewTask = false;
            if(angular.isUndefined($scope.dialogTask.id) || $scope.dialogTask.id == null || $scope.dialogTask.id == 0) {
                taskId = data.data.id;
                isNewTask = true;
            } else {
                taskId = $scope.dialogTask.id;
            }
            
            var exp = $interpolate(Config.baseURL + 'Tasks/{{id}}', false, null, true),
            url = exp({id : taskId});
            
            $http.get(url).then (function(response) {
                $scope.dialogTask = response.data;
                
        //    $scope.dialogTask.id = data.data.id;
            if(isNewTask == true) {
                //add new task
                $scope.todoList.push($scope.dialogTask);
            } 
//                else {
            console.log('data...',data.data);
            //alert(data.data);
                
                //Client side update
                angular.forEach($scope.todoList, function (item) {                    
                    if (item.id == $scope.dialogTask.id) {
                        
                        $scope.assignUpdatedValuesOnClientSide(item, $scope.dialogTask);
                        if(item.taskState.id !== 1) {
                            $scope.updateTaskCategory(item, 'todoList');
                            
                        }
                    }
                });
                
                angular.forEach($scope.inProgressList, function (item) {
                    if (item.id == $scope.dialogTask.id) {
                        
                        $scope.assignUpdatedValuesOnClientSide(item, $scope.dialogTask);
                        if(item.taskState.id !== 2) {
                            $scope.updateTaskCategory(item, 'inProgressList');
                        }
                    }
                });
                
                angular.forEach($scope.completedList, function (item) {
                 if (item.id == $scope.dialogTask.id) {
                     
                     $scope.assignUpdatedValuesOnClientSide(item, $scope.dialogTask);
                     if(item.taskState.id !== 3) {
                         $scope.updateTaskCategory(item, 'completedList');
                     }
                 }
             });
//            }
            });
        
        res.catch(function(data, status, headers, config) {
			console.log('failure message:',JSON.stringify({data: data}));
		});
        $uibModalInstance.close($scope.schedule);            
//            alert($scope.dialogTask.raciTeam.responsibleUser.firstName);
        });
    };
    
    $scope.save = function () {
        $uibModalInstance.close();
    };
    $scope.assignUpdatedValuesOnClientSide = function (task, updatedTask, source) {
        task.title = updatedTask.title;
//        alert(task.responsibleUser);
        //Update has assignedUser
        if(!angular.isUndefined(updatedTask.raciTeam.responsibleUser) && updatedTask.raciTeam.responsibleUser !== null) {
            //Old value was unassigned
            if(angular.isUndefined(task.responsibleUser) || task.responsibleUser == null) {
//                alert('ResponsibleUser null');
                task.responsibleUser = { id : updatedTask.raciTeam.responsibleUser.id };
                task.responsibleUser = updatedTask.raciTeam.responsibleUser;
            } else { //Old value was assigned
//                alert('Assign');
                task.responsibleUser.firstName = updatedTask.raciTeam.responsibleUser.firstName;
                task.responsibleUser = updatedTask.raciTeam.responsibleUser;
            }
        } else { //Update is unassigned
            task.responsibleUser = null;
        }
        task.taskState.id = updatedTask.taskState.id;
    };
    $scope.updateTaskCategory = function (task,source) {
     if(task.taskState.id == 2) {
            $scope.inProgressList.push(task);
            //alert(item.TaskState.Id);;
        }
        if(task.taskState.id == 3) {
            $scope.completedList.push(task);
            //alert(item.TaskState.Id);
        }
        if(task.taskState.id == 1) {
            $scope.todoList.push(task);
            //alert(item.TaskState.Id);
        }
        
        if(source == 'todoList') {
            var index = $scope.todoList.indexOf(task);
            $scope.todoList.splice(index, 1);
        } else if (source == 'completedList') {
            var index = $scope.completedList.indexOf(task);
            $scope.completedList.splice(index, 3);
        } else if (source == 'inProgressList') {
            var index = $scope.inProgressList.indexOf(task);
            $scope.inProgressList.splice(index, 2);
        }   
    };
    
    $scope.edit = function (FilterName, Name, DueStatus, AssignedTo, WorkingSet, NistControlFamily, NistBaseline) {
        //alert('Modal Close');
        $scope.filterTextFilterName = FilterName;
        $scope.filterTextName = Name;
        $scope.filterTextDueStatus = DueStatus;
        $scope.filterTextAssignedTo = AssignedTo;
        $scope.filterTextWorkingSet = WorkingSet;
        $scope.filterTextNistCF = NistControlFamily;
        $scope.filterTextNistBaseline = NistBaseline;
    };
    $scope.delete = function (FilterName) {
        //alert('Modal Close');
        var found = $filter('findFilterByName')($scope.Filters, FilterName);
        var item = {
            FilterName : $scope.filterTextFilterName,
            Params : {
                Name : $scope.filterTextName,
                DueStatus : $scope.filterTextDueStatus,
                AssignedTo : $scope.filterTextAssignedTo,
                WorkingSet : $scope.filterTextWorkingSet,
                NistControlFamily : $scope.filterTextNistCF,
                NistBaseline : $scope.filterTextNistBaseline
            }
        };
        if(found !== null && found !== 'NoFilter')
            filterService.deleteFilter(item);
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.states = [];
};

/**
 * taskBoard - Controller for task_board view
 */
function taskBoard($scope, $http, $uibModal, $stateParams, filterService, $filter, tasksService, dataService, workingSetWebAPIService, $interpolate, responsibleUserService, Config) {
    
    this.daterange = { startDate : null, endDate : null };
    $scope.Filters=filterService.getFilters();
    $scope.showdetails = function(filterName) {
        var found = $filter('findFilterByName')($scope.Filters, filterName);
    }
    
    var found = $filter('findFilterByName')($scope.Filters, $stateParams.filterText);
    $scope.filterText=found.Params;
    //alert($scope.filterText); //$scope.state = $state.current //$scope.params = $stateParams;
    $scope.workingSetList = workingSetWebAPIService.getData();
    $scope.workingSetList.then (function (response) {
        $scope.businessControlProfileList  = response.data;
        console.log($scope.businessControlProfileList);
        $scope.businessControlProfile = workingSetWebAPIService.getWorkingsetNamebyId($stateParams.bcp,$scope.businessControlProfileList);  
        $scope.controlCatalogueList = workingSetWebAPIService.getControlCatalgueByWorkingSetId($stateParams.bcp,$scope.businessControlProfileList);
        
        var obj = {
            id : 0,
            title : 'Catalogues' };
        $scope.controlCatalogueList.push(obj);
        //$scope.ControlCatalogue = "Control Catalogue";
        //alert($scope.ControlCatalogueList);
    });
    
    $scope.taskDueStatusClass = function(task) {
        switch(task.dueStatus.status)
        {
            case 'Overdue' :
                return 'danger-element';
                break;
            case 'On Time' :
                return 'success-element';
                break;
            case 'In Jeopardy' :
                return 'warning-element';
                break;
        }
    };
    
    $scope.enableStatus = function() {
        return $scope.dialogTask == undefined || $scope.dialogTask.id == 0;
    };
    
    $scope.taskDueStatus = function(task) {
        if(angular.isUndefined(task) || task === null)
            {
                return {'border-left': '10px solid #ed5565'};
            } else {
                switch(task.dueStatus.status)
                {
                    case 'Overdue' :
                return {'border-left': '10px solid #ed5565'};
                break;
            case 'On Time' :
                return {'border-left': '10px solid #1ab394'};
                break;
            case 'In Jeopardy' :
                return {'border-left': '10px solid #f8ac59'};
                break;
        }
            }
    };
    
    $scope.open=function(val)
    {
        return('success');
    }
    
    $scope.openTaskDetailsDialog = function (task) {
        if(sessionStorage.userProfile != null) {
            var userProfile = JSON.parse(sessionStorage.userProfile);
            if(userProfile != null) { 
                var currentUser = userProfile.id;
            }
        }
//        alert(currentUser);
        var defaultUser = {
                id : 0,
                email : ' ',
                firstName : 'Responsible User',
                lastName : ' ',
                userName : ' '
            };
        $scope.responsibleUserListDialog = [];
        responsibleUserService.getUsers().$promise.then(function (data) {
            console.log('data...', data.length);
            angular.forEach(data, function (item) {
                $scope.responsibleUserListDialog.push(item);
            });
            });            
        $scope.responsibleUserListDialog.push(defaultUser);
        $scope.taskStates = {};
        $scope.taskStates.Values = [
                { Name : 'In Progress', Value : 2 },
                { Name : 'New', Value : 1 },
                { Name : 'Completed', Value : 3 }];
//           alert(task.id);
   
        if(angular.isUndefined(task) || task === null )
            {
                $scope.taskTitle = '';
                $scope.dialogTask = { 
                    id : 0,
                    code : 'TBD',
                    Title : '',
                    controlSet : null,
                    controlSetTitle:'TBD',
                    controlCode:'TBD',
                    controlId: 13,
                    controlSetId: 7,
                    workingSetId: $stateParams.bcp,
                    //taskDefinitionId:61,
                    dueStatus : {
                        id : 1,
                        status : 'On Time'
                    },
                    workingSet:{
                        name:'Default',
                        workingSetId:1
                    },
                    
                    "code": '',
                    control:{
                        id:13,
                        code:'TBD',
                        definitionSource:{
                            source:'Custom'
                        }
                    },
                    raciTeam:{},
                    taskState:{
                        id:1
                    },
                    createdByUserId: currentUser,
                    descripion:'',
                    Due:'',
                    completed:null,
                    link:null,
                    comments : []
                }
                $scope.responsibleUserListDialog.selected = defaultUser;
                $scope.taskStates.Value = 1;
            }
        else {
            var exp = $interpolate(Config.baseURL + 'Tasks/{{id}}', false, null, true),
            url = exp({id: task.id});
            
            $http.get(url).then (function(response) {
                $scope.dialogTask = response.data;
                //alert($scope.dialogTask.RaciTeam.ResponsibleUser);
                //alert($scope.dialogTask.TaskState.Id);
                // console.log('dialogTask',$scope.dialogTask.RaciTeam.ResponsibleUser.FirstName);
                $scope.taskStates.Value = $scope.dialogTask.taskState.id;
                if(angular.isUndefined($scope.dialogTask.raciTeam.responsibleUser) 
                   || $scope.dialogTask.raciTeam.responsibleUser == null) 
                    $scope.responsibleUserListDialog.selected = defaultUser;
                else {
                    console.log($scope.dialogTask.raciTeam.responsibleUser);
                    $scope.slectedUser = $scope.dialogTask.raciTeam.responsibleUser.firstName;
                    $scope.responsibleUserListDialog.selected = $scope.dialogTask.raciTeam.responsibleUser;
                }
            });
        }
        $scope.comment = { data: '' };
        var modalInstance = $uibModal.open( {
            templateUrl : 'views/taskDetailAndEdit.html',
            size : 'lg',
            windowClass: 'app-modal-window',
            backdrop :'static',
            keyboard :false,           
            scope : $scope,
            controller : ModalInstanceCtrl
        });
    };
    
    $scope.openFilterDialog = function(controlCatalogue,responsibleUser,dueStartDate,dueEndDate,dueStatus) {
        //alert('Catalogue' + controlCatalogue);
        //alert('Responsible User' + responsibleUser.Id);
        //alert('due Status ' + dueStatus);
        var from_date = $filter('date')(new Date(dueStartDate), 'yyyy-MM-dd');
        var to_date = $filter('date')(new Date(dueEndDate), 'yyyy-MM-dd');
        var dataObj = {
            "FilterName": "Filter",
            "FilterOwnerUserId": "B981D6E6-FC59-4C02-A1D4-7E1038FC5E95",
            "FilterTypeId": 1,
            "FilterType": "System",
            "AssignedStatusId": null,
            "ControlId": controlCatalogue,
            "ControlSetId": null,
            "DueStatusId": dueStatus,
            "DueStartDate": from_date,
            "DueStatusId": to_date,
            "IncludeRelations": null,
            "ResponsibleUserId": responsibleUser.Id,
            "TaskStateId": null,
            "UserTaskCode": null,
            "UserTaskId": null,
            "WorkingSetId": null
        };
        //filterService.addFilter(dataObj);
        var res = $http.post(Config.baseURL + 'Filters', dataObj);
        console.log('result...',res);
        res.then(function(data) {
            $scope.message = data;
            console.log('data...',data.data);
            filterService.addFilter(data.data);
        });
        res.catch(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
    
    $scope.dateRangeFilter = function (property, startDate, endDate) {
        //alert(property);
        return function (item) {
            if (item[property] === null) return false;
            var itemDate = moment(item[property]);
            var s = moment(startDate, "DD-MM-YYYY");
            var e = moment(endDate, "DD-MM-YYYY");
            if (itemDate >= s && itemDate <= e) return true;
            return false;
        }
    };
    
    //DueStatus
    $scope.dueStatusList = [ 
        { Name : 'On Time', Value : 2 },
        { Name : 'In Jeopardy', Value : 1 },
        { Name : 'Overdue', Value : 3 },
        { Name : '  Due Status  ', Value : '' }];
    
    //Responsible Users
    $scope.responsibleUserList = [];
    responsibleUserService.getUsers().$promise.then(function (data) {
        console.log('data...', data.length);
        angular.forEach(data, function (item) {
            $scope.responsibleUserList.push(item);
        });
        console.log('data...', $scope.responsibleUserList);
    });
    var defaultUser = {
        id : 0,
        email : ' ',
        firstName : 'Responsible User',
        lastName : ' ',
        userName : ' '
    };
    $scope.responsibleUserList.push(defaultUser);
    
    //TaskList
    $scope.taskList = dataService.getData($stateParams.bcp,$stateParams.filterText);
    $scope.taskList.then(function(response) {
        // alert(JSON.stringify(response.data));
        $scope.tasksList  = response.data;
        
        console.log($scope.taskList);
        //alert(tasksService.getTasksByCategory('NewUserTasks').Tasks);
        
        $scope.todoList=tasksService.getTasksByTaskState(1,$scope.tasksList.taskInfos);
        $scope.inProgressList= tasksService.getTasksByTaskState(2,$scope.tasksList.taskInfos);
        
        //alert($scope.inProgressList);
        
        $scope.completedList =tasksService.getTasksByTaskState(3,$scope.tasksList.taskInfos);
        
        $scope.sortableOptions = {
            connectWith: ".connectList",
            update: function( event, ui ) {
                //alert(ui);
                console.log($('[ui-sortable="sortableOptions"]').attr('ng-model'));
            },
            stop : function(e, ui) {
                var fromIndex = ui.item.sortable.index,
                    toIndex = ui.item.sortable.dropindex,
                    temdata = {},
                    destinationList = ui.item.sortable.droptarget.attr('ng-model');
                if(destinationList === 'todoList') {
                    itemdata = $scope.todoList[toIndex];
                    //alert(itemdata.Id);
                }
                if(destinationList === 'inProgressList') {
                    itemdata = $scope.inProgressList[toIndex];
                    //alert(itemdata.Id);
                }
                if(destinationList === 'completedList') {
                    itemdata = $scope.completedList[toIndex];
                    //alert(itemdata.Id);
                }
                
                var exp = $interpolate(Config.baseURL + 'Tasks/{{id}}', false, null, true),
                    url = exp({id: itemdata.id});
                $http.get(url).then (function(response) {
                    itemdata = response.data;
                    //alert('hi'+ itemdata);
                    if(destinationList === 'todoList') {
                        itemdata.taskState.id = 1;
                        itemdata.taskState.name = 'New';
                        $http.put(url,itemdata);
                    }
                    if(destinationList === 'inProgressList') {
                        itemdata.taskState.id = 2;
                        itemdata.taskState.name = 'In Progress';
                        $http.put(url,itemdata);
                    }
                    if(destinationList === 'completedList') {
                        itemdata.taskState.id = 3;
                        itemdata.taskState.name = 'Completed';
                        $http.put(url,itemdata);
                    }
                });
            }
        };
    });
}

/* login Controller */
function loginCtrl($scope, $http, $state, authenticationService, Authorization) {
    $scope.username = '';
    $scope.password = '';
    $scope.persist = true;
    $scope.errors = [];
    
   var userData = {
      isAuthenticated: false,
      username: '',
      bearerToken: '',
      expirationDate: null,
       userRole: ''
    };
    
    if ($state.$current.url.source == "/logout")
    {
        sessionStorage.userData = null;
        sessionStorage.userProfile = null;
        authenticationService.removeAuthentication();        
    }        
    
    $scope.login = function() {         
        disableLoginButton();         
        $scope.errors = [];   
        
       // goToMain();
        
        authenticationService.authenticate($scope.username, $scope.password, goToMain, loginError, false);          
    }
        
    $scope.logout = function() {
        sessionStorage.userData = null;
        sessionStorage.userProfile = null;
        authenticationService.removeAuthentication();
        Authorization.clear();
    }
        
    function goToMain() {
      //  Authorization.go('dashboards.Home');
        $state.go('miscellaneous.task_board');
    }
    
    function loginError(errorMsg) {     
        if (typeof errorMsg === 'string' && $scope.errors.indexOf(errorMsg) === -1) {
            $scope.errors.push(errorMsg);
        }
        enableLoginButton();       
    }
    
     function disableLoginButton(message) {
      if (typeof message !== 'string') {
        message = 'Attempting login...';
      }
      jQuery('#login-form-submit-button').prop('disabled', true).prop('value', message);
    }
    
      function enableLoginButton(message) {
      if (typeof message !== 'string') {
        message = 'Submit';
      }
      jQuery('#login-form-submit-button').prop('disabled', false).prop('value', message);
    }      
}
/**
 *
 * Pass all functions into module
 */
angular
    .module('magpie')
    .controller('MainCtrl', MainCtrl)
    .controller('homeController', homeController)
    .controller('dashBoardController',dashBoardController)
    .controller('chartJsCtrl',chartJsCtrl)
    .controller('dashboardFlotOne', dashboardFlotOne)
    .controller('dashboardFlotTwo', dashboardFlotTwo)
    .controller('dashboardFive', dashboardFive)
    .controller('dashboardMap', dashboardMap)
    .controller('taskBoard', taskBoard)
    .controller('sideBar',sideBar)
    .controller('businessControlProfile',businessControlProfile)
    .controller('raciTeam',raciTeam)
    .controller('dashboardComplianceTrend',dashboardComplianceTrend)
    .controller('dashboardRACIPerformance',dashboardRACIPerformance)
    .controller('loginCtrl', loginCtrl)
    .controller('userProfile', userProfile)
    .controller('oldMagpieApp', oldMagpieApp);