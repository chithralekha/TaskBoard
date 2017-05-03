/**
 *
 * Main controller.js file
 * Define controllers with data used
 *
 *
 * Functions (controllers)
 *  - MainCtrl
 *  - dashboardFlotOne
 *  - dashboardFlotTwo
 *  - dashboardFlotFive
 *  - dashboardMap
 *  - flotChartCtrl
 *  - rickshawChartCtrl
 *  - sparklineChartCtrl
 *  - widgetFlotChart
 *  - modalDemoCtrl
 *  - ionSlider
 *  - wizardCtrl
 *  - CalendarCtrl
 *  - chartJsCtrl
 *  - GoogleMaps
 *  - ngGridCtrl
 *  - codeEditorCtrl
 *  - nestableCtrl
 *  - notifyCtrl
 *  - translateCtrl
 *  - imageCrop
 *  - diff
 *  - idleTimer
 *  - liveFavicon
 *  - formValidation
 *  - agileBoard
 *  - draggablePanels
 *  - chartistCtrl
 *  - metricsCtrl
 *  - sweetAlertCtrl
 *  - selectCtrl
 *  - toastrCtrl
 *  - loadingCtrl
 *  - datatablesCtrl
 *  - truncateCtrl
 *  - touchspinCtrl
 *  - tourCtrl
 *  - jstreeCtrl
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

    /**
     * slideInterval - Interval for bootstrap Carousel, in milliseconds:
     */
    this.slideInterval = 5000;


    /**
     * states - Data used in Advanced Form view for Chosen plugin
     */
    this.states = [ ];

    /**
     * check's - Few variables for checkbox input used in iCheck plugin. Only for demo purpose
     */
    this.checkOne = true;
    this.checkTwo = true;
    this.checkThree = true;
    this.checkFour = true;

    /**
     * knobs - Few variables for knob plugin used in Advanced Plugins view
     */
    this.knobOne = 75;
    this.knobTwo = 25;
    this.knobThree = 50;

    /**
     * Variables used for Ui Elements view
     */
    this.bigTotalItems = 175;
    this.bigCurrentPage = 1;
    this.maxSize = 5;
    this.singleModel = false;
    this.radioModel = 'Middle';
    this.checkModel = {
        left: false,
        middle: true,
        right: false
    };

    /**
     * groups - used for Collapse panels in Tabs and Panels view
     */
    this.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    /**
     * alerts - used for dynamic alerts in Notifications and Tooltips view
     */
    this.alerts = [
        { type: 'danger', msg: '.' },
        { type: 'success', msg: '.' },
        { type: 'info', msg: '.' }
    ];

    /**
     * addAlert, closeAlert  - used to manage alerts in Notifications and Tooltips view
     */
    this.addAlert = function() {
        this.alerts.push({msg: 'Another alert!'});
    };

    this.closeAlert = function(index) {
        this.alerts.splice(index, 1);
    };

    /**
     * randomStacked - used for progress bar (stacked type) in Badges adn Labels view
     */
    this.randomStacked = function() {
        this.stacked = [];
        var types = ['success', 'info', 'warning', 'danger'];

        for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            this.stacked.push({
                value: Math.floor((Math.random() * 30) + 1),
                type: types[index]
            });
        }
    };
    /**
     * initial run for random stacked value
     */
    this.randomStacked();

    /**
     * summernoteText - used for Summernote plugin
     */
    this.summernoteText = ['<h3>Hello Jonathan! </h3>',
    '<p>','</p>'].join('');

    /**
     * General variables for Peity Charts
     * used in many view so this is in Main controller
     */
    this.BarChart = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 4, 7, 3, 2, 7, 9, 6, 4, 5, 7, 3, 2, 1, 0, 9, 5, 6, 8, 3, 2, 1],
        options: {
            fill: ["#1ab394", "#d7d7d7"],
            width: 100
        }
    };

    this.BarChart2 = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };

    this.BarChart3 = {
        data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };

    this.LineChart = {
        data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
        options: {
            fill: '#1ab394',
            stroke: '#169c81',
            width: 64
        }
    };

    this.LineChart2 = {
        data: [3, 2, 9, 8, 47, 4, 5, 1, 2, 9, 5, 4, 7],
        options: {
            fill: '#1ab394',
            stroke: '#169c81',
            width: 64
        }
    };

    this.LineChart3 = {
        data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
        options: {
            fill: '#1ab394',
            stroke: '#169c81',
            width: 64
        }
    };

    this.LineChart4 = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        options: {
            fill: '#1ab394',
            stroke: '#169c81',
            width: 64
        }
    };

    this.PieChart = {
        data: [1, 5],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };

    this.PieChart2 = {
        data: [226, 360],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };
    this.PieChart3 = {
        data: [0.52, 1.561],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };
    this.PieChart4 = {
        data: [1, 4],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };
    this.PieChart5 = {
        data: [226, 134],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };
    this.PieChart6 = {
        data: [0.52, 1.041],
        options: {
            fill: ["#1ab394", "#d7d7d7"]
        }
    };
};


/**
 * dashboardFlotOne - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFlotOne() {

    var data1 = [ [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13] ];
    var data2 = [ [0, 1], [1, 0], [2, 2], [3, 0],  [4, 1], [5, 3],  [6, 1], [7, 5],  [8, 2], [9, 3],  [10, 2],  [11, 1],  [12, 0]  ];
    var data3 = [ [0, 2], [1, 1], [2, 10], [3, 30], [4, 15], [5, 3], [6, 10], [7, 35], [8, 20], [9, 31], [10, 20], [11, 1], [12, 0] ];
    var data4 = [ [0, 10], [1, 15], [2, 25], [3, 30], [4, 35], [5, 10], [6, 15], [7, 25], [8, 20], [9, 31], [10, 20],  [11, 10], [12, 0] ];
    var data5 = [ [0, 11], [1, 25], [2, 15], [3, 35], [4, 30], [5, 15], [6, 10], [7, 20], [8, 25], [9, 20], [10, 30], [11, 0], [12, 10] ];

    var dataset = [
        {
            label: "Team kbarnes",           
            data: data2
        },
        {
            label: "Team rwallace",           
            data: data1            
        },
        {
            label: "Team gharper",           
            data: data3            
        },
        {
            label: "Team cmarshall",           
            data: data4            
        },
        {
            label: "Team sharrison",           
            data: data1            
        }
    ];

    var options = {
       
        series: {
            lines: {
                show: false,
                fill: true
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.4
            },
            points: {
                radius: 0,
                show: true
            },
            shadowSize: 2,
            grow: {stepMode:"linear",stepDirection:"up",steps:80}
        },
        grow: {stepMode:"linear",stepDirection:"up",steps:80},
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#1C84C6","#163daf","#16af44","#68656b"],
        xaxis: {
        },
        yaxis: {
            ticks: 4
        },
        tooltip: true,
        legend: false
        
    };

    /**
     * Definition of variables
     * Flot chart
     */
    this.flotData = dataset;
    this.flotOptions = options;
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
    $scope.businessControlProfile = $stateParams.obj.name;
    $scope.businessControlProfileId = $stateParams.obj.workingSetId;
    $scope.workingSetHistory = workingSetHistoryService.getData($scope.businessControlProfileId);   
    $scope.workingSetHistory.then (function (response) {
        $scope.businessControlProfileHistoryList  = response.data;
        $scope.businessControlProfileHistoryList.data1 = [];
        $scope.businessControlProfileHistoryList.data2 = [];
        $scope.businessControlProfileHistoryList.dataset = [];
         $scope.businessControlProfileRadarDataSet = [];
        $scope.datax={"id":"x"};
        $scope.datacolumns=[{"id":"data 1","type":"bar","name":"Tasks Due","color":"#1ab394"},
	                    {"id":"data 2","type":"bar","name":"Tasks Completed", "color" : "#BABABA"}];
        $scope.datapoints=[];
        var count =0, fillColor = 1, pointHighlightStroke = 1;
        angular.forEach($scope.businessControlProfileHistoryList, function (item) {
            var t = new Date(item.timestamp);
            count += 1;            
            $scope.datapoints.push({"x":gd(t.getFullYear(), t.getMonth(), t.getDate()),"data 1":item.totalOverdue,"data 2":item.totalCompleted});
            
//            alert(t.getDate());
//            alert(t.getFullYear());
//            alert(t.getMonth());
            $scope.businessControlProfileHistoryList.data2.push([gd(t.getFullYear(), t.getMonth(), t.getDate()),item.totalCompleted]);
            $scope.businessControlProfileHistoryList.data1.push([gd(t.getFullYear(), t.getMonth(), t.getDate()),item.compliancePercent]);
            if( count % 5 === 0 ) {
                fillColor = ""
                pointHighlightStroke = "";
                strokeAndPointColor = "";
                if(count % 10 === 0) {
                    fillColor = "rgba(220,220,220,0.2)";
                    strokeAndPointColor = "rgba(220,220,220,1)";
                }
                else {
                        fillColor = "rgba(26,179,148,0.2)";
                        strokeAndPointColor = "rgba(151,187,205,1)";
                    }
                var data = {
                label: "data" + count,
                fillColor: fillColor,
                strokeColor: strokeAndPointColor,
                pointColor: strokeAndPointColor,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: strokeAndPointColor,
                data: [item.totalNew, item.totalInProgress, item.totalInJeopardy, item.totalOverdue, item.totalCompleted, item.totalOnTime]
            };
//              alert(data.strokeColor);  
                 $scope.businessControlProfileRadarDataSet.push(data);
            }
           
            
        })
//        alert( $scope.businessControlProfileHistoryList.data1);
//        alert($scope.businessControlProfileHistoryList.data2);
        
    $scope.businessControlProfileHistoryList.dataset = [
        {
            label: "Number of completed User Tasks",
            grow:{stepMode:"linear"},
            data: $scope.businessControlProfileHistoryList.data2,
            color: "#1ab394",
            bars: {
                show: true,
                align: "center",
                barWidth: 24 * 60 * 60 * 6600,
                lineWidth: 0
            }

        },
        {
            label: "Percentage Of Compliance",
            grow:{stepMode:"linear"},
            data: $scope.businessControlProfileHistoryList.data1,
            yaxis: 2,
            color: "#1C84C6",
            lines: {
                lineWidth: 1,
                show: true,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.3
                        },
                        {
                            opacity: 0.3
                        }
                    ]
                }
            }
        }
    ];


    $scope.businessControlProfileHistoryList.options = {
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 0,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#464f88"],
        tooltip: true,
        xaxis: {
            mode: "time",
            tickSize: [15, "day"],
            tickLength: 0,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Arial',
            axisLabelPadding: 10,
            color: "#d5d5d5"
        },
        yaxes: [
            {
                position: "left",
                max: 500,
                color: "#d5d5d5",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 3
            },
            {
                position: "right",
                max: 500,
                color: "#d5d5d5",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: ' Arial',
                axisLabelPadding: 67
            }
        ],
        legend: {
            noColumns: 1,
            labelBoxBorderColor: "#d5d5d5",
            position: "nw"
        }

    };

    function gd(year, month, day) {
        return new Date(year, month, day + 1).getTime();
    }

    /**
     * Definition of variables
     * Flot chart
     */
//        alert($scope.businessControlProfileHistoryList.dataset);
    this.flotData = $scope.businessControlProfileHistoryList.dataset;
    this.flotOptions = $scope.businessControlProfileHistoryList.options;
//    $scope.businessControlProfileRadarDataSet = [
//            {
//                label: "My First dataset",
//                fillColor: "rgba(220,220,220,0.2)",
//                strokeColor: "rgba(220,220,220,1)",
//                pointColor: "rgba(220,220,220,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(220,220,220,1)",
//                data: [65, 59, 90, 81]
//            },
//            {
//                label: "My Second dataset",
//                fillColor: "rgba(26,179,148,0.2)",
//                strokeColor: "rgba(26,179,148,1)",
//                pointColor: "rgba(26,179,148,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(151,187,205,1)",
//                data: [28, 48, 40, 19]
//            }
//        ];
        $scope.businessControlProfileRadarDataLabels = ["New", "In Progress", "In Jeopardy", "Overdue", "Completed", "On Time"];
        $scope.businessControlProfileRadarDataOptions = {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 5,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };    
    $scope.radarData = {
        labels : $scope.businessControlProfileRadarDataLabels,
        datasets : $scope.businessControlProfileRadarDataSet        
    };
    $scope.radarOptions = $scope.businessControlProfileRadarDataOptions;
    
//    alert($scope.datapoints);
    console.log($scope.datapoints);
	 
	
       
    })
    
     
}

function complianceScoreCtrl($scope,$http,$uibModalInstance,filterService,$filter,filterWebAPIService,$interpolate,responsibleUserService,Config) {
    
    //alert($scope.workingSetName);
}

/**
 * dashBoardController - for single workingSet
 */
function dashBoardController($scope,$stateParams,$state,$http,filterService,workingSetWebAPIService) {
    $scope.businessControlProfile = $stateParams.obj.name;
    $scope.businessControlProfileId = $stateParams.obj.workingSetId;
   // alert($stateParams.obj);
    $scope.datapointsTaskCompletionByUser = [{"x" : 10, "User1" : 10, "User2" : 15, "User3" : 100},
                                             {"x" : 20, "User1" : 100, "User2" : 35, "User3" : 40},
                                             {"x" : 30, "User1" : 15, "User2" : 75, "User3" : 70},
                                             {"x" : 40, "User1" : 50, "User2" : 45, "User3" : 90}];
    $scope.datacolumnsTaskCompletionByUser = [{"id" : "User1", "type" : "line", "name" : "User 1", "color" : "#1ab394"},
                                              {"id" : "User2", "type" : "spline", "name" : "User 2", "color" : "#BABABA"},
                                              {"id": "User3", "type" : "line", "name" : "User 3", "color" : "#1ab394"}];
    $scope.datax={"id":"x"};
    $scope.data1 = [0, 30, 200, 100, 400, 150, 250, 100, 0];
    $scope.data2 = [0, 50, 20, 10, 40, 15, 25, 30, 0];
    $scope.data3 = [0, 200, 30, 400, 10, 250, 30, 25, 0];
    $scope.dataX = ["20150601", '2015-06-02 12:00:00:00', "2015-06-03 12:00:00:00", "2015-06-04 12:00:00:00", "2015-06-05 12:00:00:00", "2015-06-06 12:00:00:00","2015-06-07 12:00:00:00","2015-06-08 12:00:00:00","2015-06-09 12:00:00:00","2015-06-10 12:00:00:00"]
}

/**
 * dashboardRACIPerformance - simple controller for data
 * for RACI performance in Dashboards
 */
function dashboardRACIPerformance($scope, SweetAlert){
    this.resizeIframe = function (obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
     $scope.iframeHeight = window.innerHeight - 50;
    $scope.RACITeam = [
        {
            Name: 'Team kbarnes',
            Description :''
        },
        {
            Name: 'Team rwallace',
            Description : ''
        },
        {
            Name: 'Team gharper',
            Description : ''
        },
        {
            Name: 'Team cmarshall',
            Description : ''
        },
         {
            Name: 'Team sharrison',
            Description : ''
        },
    ];
     $scope.demo1 = function (message,description) {
        SweetAlert.swal({
            title: message,
            text: description
        });
    };
    var data1 = [ [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13] ];
    var data2 = [ [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0] ];
    var data3 = [ [0, 2], [1, 1], [2, 10],[3, 30],[4, 15], [5, 3], [6, 10], [7, 35], [8, 20], [9, 31], [10, 20], [11, 1], [12, 0] ];
    var data4 = [ [0, 10], [1, 15], [2, 25], [3, 30], [4, 35], [5, 10], [6, 15], [7, 25], [8, 20], [9, 31], [10, 20], [11, 10], [12, 0] ];
    var data5 = [ [0, 11], [1, 25], [2, 15], [3, 35], [4, 30], [5, 15], [6, 10], [7, 20], [8, 25], [9, 20], [10, 30], [11, 0],  [12, 10] ];

    var dataset = [
        {
            label: "Team kbarnes",           
            data: data2
        },
        {
            label: "Team rwallace",           
            data: data1            
        },
        {
            label: "Team gharper",           
            data: data3            
        },
        {
            label: "Team cmarshall",           
            data: data4            
        },
        {
            label: "Team sharrison",           
            data: data1            
        }
    ];

    var options = {
        series: {
            lines: {
                show: false,
                fill: true
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.4
            },
            points: {
                radius: 0,
                show: true
            },
            shadowSize: 2,
            grow: {stepMode:"linear",stepDirection:"up",steps:80}
        },
        grow: {stepMode:"linear",stepDirection:"up",steps:80},
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#1C84C6","#163daf","#16af44","#68656b"],
        xaxis: {
        },
        yaxis: {
            ticks: 4
        },
        tooltip: true,
        legend: false
        
    };

    /**
     * Definition of variables
     * Flot chart
     */
    this.flotData = dataset;
    this.flotOptions = options;
}

/**
 * dashboardComplianceTrend - simple controller for data
 * for ComplianceTrend in Dashboards
 */

function dashboardComplianceTrend($scope, SweetAlert) {
    $scope.demo1 = function (message,description) {
        SweetAlert.swal({
            title: message,
            text: description
        });
    }
    $scope.Notifications = [
        {
            Title : 'Develop Access Control Policy.',
            Description: 'Develop and document an access control policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance'
        },
        {
            Title : 'Develop Access Control Procedures.',
            Description: 'Review and update the current access control procedures *--ORGANIZATION-DEFINED FREQUENCY--*'
        },
        {
            Title : 'Distribute Access Control Policy.',
            Description: 'Identify and select the following types of information system accounts to support organizational missions/business functions: *--ORGANIZATION-DEFINED INFORMATION SYSTEM ACCOUNT TYPES--*'
        },
        {
            Title : 'Distribute Access Control Procedures.',
            Description: 'Require approvals by *--ORGANIZATION-DEFINED PERSONNEL OR ROLES--* for requests to create information system accounts'
        },
        {
            Title : 'Review Access Control Procedures.',
            Description: 'Monitor the use of information system accounts'
        },
        {
            Title : 'Review Access Control Policy.',
            Description: 'Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies'
        }
    ];
     /**
     * Data for Doughnut chart
     */
    this.doughnutData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "Tasks OnTime"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Tasks OverDue"
        },
        {
            value: 100,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Tasks InJeopardy"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    this.doughnutOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

}


/**
 * dashboardFlotFive - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFive() {

    var data1 = [
        [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,20],[11,10],[12,13],[13,4],[14,7],[15,8],[16,12]
    ];
    var data2 = [
        [0,0],[1,2],[2,7],[3,4],[4,11],[5,4],[6,2],[7,5],[8,11],[9,5],[10,4],[11,1],[12,5],[13,2],[14,5],[15,2],[16,0]
    ];

    var options = {
        series: {
            lines: {
                show: false,
                fill: true
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.4
            },
            points: {
                radius: 0,
                show: true
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,

            borderWidth: 2,
            color: 'transparent'
        },
        colors: ["#1ab394", "#1C84C6"],
        xaxis:{
        },
        yaxis: {
        },
        tooltip: false
    };

    /**
     * Definition of variables
     * Flot chart
     */
    this.flotData = [data1, data2];
    this.flotOptions = options;


    var sparkline1Data = [34, 43, 43, 35, 44, 32, 44, 52];
    var sparkline1Options = {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#1ab394',
        fillColor: "transparent"
    };

    var sparkline2Data = [32, 11, 25, 37, 41, 32, 34, 42];
    var sparkline2Options = {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#1ab394',
        fillColor: "transparent"
    };

    this.sparkline1 = sparkline1Data;
    this.sparkline1Options = sparkline1Options;
    this.sparkline2 = sparkline2Data;
    this.sparkline2Options = sparkline2Options;

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

    /**
     * Data for Polar chart
     */
    this.polarData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Polar chart
     */
    this.polarOptions = {
        scaleShowLabelBackdrop : true,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : true,
        scaleBackdropPaddingY : 1,
        scaleBackdropPaddingX : 1,
        scaleShowLine : true,
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Doughnut chart
     */
    this.doughnutData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    this.doughnutOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Line chart
     */
    this.lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    this.lineDataDashboard4 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 40, 51, 36, 25, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [48, 48, 60, 39, 56, 37, 30]
            }
        ]
    };

    /**
     * Options for Line chart
     */
    this.lineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };

    /**
     * Options for Bar chart
     */
    this.barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
};

    /**
     * Data for Bar chart
     */
    this.barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    /**
     * Data for Radar chart
     */
    this.radarData = {
        labels: ["On Time", "OverDue", "InProgress", "UnAssigned"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19]
            }
        ]
    };

    /**
     * Options for Radar chart
     */
    this.radarOptions = {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 3,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };


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
 * sideBarAgileBoard - Controller for sidebar-agile Board
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
 * businessControlProfile  - Controller for Business Control Profiles-agile Board
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
    $scope.AvailableUsers = [
                        {
                            Initials: 'RD',
                            img: 'img/RD.png',
                            Due: '12/30/2016',
                            DueStatus: 'OverDue',
                            Id: '3',
                            ResponsibleUsername: 'emendoza',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Distribute Access Control Procedures'
                        },
                        {
                            Initials: 'CB',
                            img: 'img/CB.png',
                            Due: '1/7/2017',
                            DueStatus: 'InJeopardy',
                            Id: '4',
                            ResponsibleUsername: 'jchapman',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Establish a Process for Reissuing Credentials'
                        },
                        {
                            Initials: 'EK',
                            img: 'img/EK.png',
                            Due: '1/30/2017',
                            DueStatus: 'OnTime',
                            Id: '5',
                            ResponsibleUsername: 'UnAssigned',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Distribute Access Control Policy'
                        },
                        {
                            Initials: 'LB',
                            img: 'img/LB.png',
                            Due: '1/10/2017',
                            DueStatus: 'OnTime',
                            Id: '6',
                            ResponsibleUsername: 'emendoza',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Notify Account Managers'
                        },
                        {
                            Initials: 'NG',
                            img: 'img/NG.png',
                            Due: '1/9/2017',
                            DueStatus: 'InJeopardy',
                            Id: '7',
                            ResponsibleUsername: 'emendoza',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Display Privacy and Security Notices'
                        },
                        {
                            Initials: 'VT',
                            img: 'img/VT.png',
                            Due: '1/9/2017',
                            DueStatus: 'InJeopardy',
                            Id: '8',
                            ResponsibleUsername: 'emendoza',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Enforce approved authorizations'
                        }
                        
                    ];
    $scope.RACITeam = [{
                            Initials: 'VT',
                            img: 'img/VT.png',
                            Due: '1/9/2017',
                            DueStatus: 'InJeopardy',
                            Id: '8',
                            ResponsibleUsername: 'emendoza',
                            Source: 'Nist',
                            TaskState: 'In Progress',
                            Title: 'Enforce approved authorizations'
                        }
        
    ];
     $scope.sortableOptions = {
        connectWith: ".connectList"
    };
    $scope.openFilterDialog = function(name,dueStatus,assignedTo,workingSet,nistCF,nistBaseline) {
        
        var text= 'This text is a dummy text';
        $scope.filterTextName=name;
        $scope.filterTextDueStatus= dueStatus;
        $scope.filterTextAssignedTo=assignedTo;
        $scope.filterTextWorkingSet=workingSet;
        $scope.filterTextNistCF=nistCF;
        $scope.filterTextNistBaseLine=nistBaseline;
       
        var modalInstance = $uibModal.open( {
            
            templateUrl : 'views/modal_example.html',
            size : 'lg',
            backdrop : 'static',
            keyboard : false,
            windowClass : "animated rotateInDownLeft",
            scope : $scope,
            controller : ModalInstanceCtrl
        });
        
        modalInstance.result.then(function (selectedItem) {
          }, function () {
          });
    }
}

/**
 * agileBoard - Controller for agile Board view
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
        Authorization.go('dashboards.Home');
//        $state.go('dashboards.Home');
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