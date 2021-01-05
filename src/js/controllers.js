/**
 * Created by dkvelusa on 2/11/2018.
 */
 var controllers = angular.module('controllers', []);
 var templ;

 controllers.controller('LandingController',
    function LandingControllerFnc($scope){

        //Declarations

        $scope.name             = 'ARUN PALANISAMY';
        $scope.role             = 'ASSOCIATE PRODUCT MANAGER & UI/UX DESIGNER & FRONTEND DEVELOPER';

        //About Me
        $scope.title1           = 'ABOUT ME';
        $scope.shortDescription = 'A Software Developer turned into a Product Manager with a demonstrated history of working in a SAAS based Company. Skilled in Problem-solving, Wire-framing, UI/UX, User Stories, Product Lifecycle Management and User Experience Testing.';
        $scope.contactDetails   = [
        ['Age',                 '24'],
        ['Email',               'arunpalanisamy21@gmail.com'],
        ['Phone',               '+91-9445528764'],
         ['Address',             'Bangalore 560103'],
        ];
        $scope.contactLink      = [
            ['', 'https://www.linkedin.com/in/arun-p-5596b989/'],
            ['fab fa-github', 'https://github.com/dhilipkmr/', ]
        ];

        //Skills
        //Right
        $scope.technicalSkills1 = [
        ['Javascript', '90%'],
        ['JQuery', '90%'],
        ['React', '85%'],
        ['Redux', '80%'],
        ['Backbone', '80%'],
        ['NodeJS', '60%'],
        ['Mocha', '60%']
        ];

        //Left
        $scope.technicalSkills2 = [
        ['HTML', '85%'],
        ['Css', '75%'],
        ['Bootstrap', '70%'],
        ['ExpressJS', '60%'],
        ['Java', '65%'],
        ['SQL', '80%'],
        ['Progressive Web Apps', '70%']
        ];

        //Portfolio
        //Please add your font icon name in the second index of the array Preferred : Google fonts
        $scope.portfolioDetails =  [
        ['DASHBOARD',           'fa-chart-line',  'A Summary Dashboard on Data Transfers Status for each jobs to identify & rectify errors'],
        ['JOB SCHEDULE',        'fa-clock',  'Implemented a Wizard which allows users to schedule a Job, based on their choice'],
        ['QUICK SAVE',          'fa-save',  'Ability to immediately save Flows before the last screen which helped in faster modification of Flows'],
        ['TREE GRID',           'fa-th',  'Reduced the Page Loading time by implementing Lazy Load functionality as a part of Tree Grid'],
        ['QUICK FILTERS',       'fa-filter',  'Condition-based Record Filtering for Grids, based on Job\'s Start/End Time and Status'],
        ['OBJECT MANIPULATION', 'fa-edit',  'Provided the ability to modify the configurations for Out of the Box Flows'],
        ['FARE CALENDAR',      'far fa-calendar-alt', 'Created Lazyloaded Fare Calendar to let user the Cheapest Fare upfront just by scrolling through dates.'],
        ['PWA MIGRATION',      'fas fa-mobile-alt', 'Migrated Goibibo Flights Mobile Website to PWA from Booking till Traveller Details page']
        ];
        
        //Education
        $scope.education        = [
         {
        'name'                  : 'Karpagam College of Engineering',
        'branch'                : 'B.Tech .Information Technology',
        'period'                : '2014-2018',
        'project'               : 'Moving Object Detection and Alarming'
        },
        {
        'name'                  : 'Bala Barathi Matriculation Higher Secondary School',
        'branch'                : 'Maths- Science',
        'period'                : '2012-2014',
        'project'               : 'Library Management System'
        }
        ];


        //Professional Experiennce
        $scope.experience       = [
         {
        'name'                  : 'Un Named Startup',
        'role'                  : 'Co-founder & Developer & UI/UX',
        'period'                : 'Jun 2020 - Nov 2020',
        },
        {
        'name'                  : 'Bluehoods Tech',
        'role'                  : 'Associate Product Manager',
        'period'                : 'Jun 2019 - Jun 2020',
        },
        {
        'name'                  : 'GyanMatrix ',
        'role'                  : 'Software Developer - Full Stack',
        'period'                : 'Mar 2018 - Jan 2019'
        },
        {
        'name'                  : 'GyanMatrix ',
        'role'                  : 'Software Developer - Intern',
        'period'                : 'Jan 2018 - Feb 2019'
        },
        {
        'name'                  : 'Juspay',
        'role'                  : 'SDE-Intern',
        'period'                : 'Jun 2017 - Jan 2018'
        }
        ];
    
});
      
