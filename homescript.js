(function ($) {
    var skillsRatingOne = [
        {
            name: 'Javascript',
            rating: '4'
        },
        {
            name: 'React JS',
            rating: '4'
        },
        {
            name: 'Angular JS',
            rating: '4'
        },
        {
            name: 'ES6',
            rating: '3'
        },
        {
            name: 'Bootstrap Framework',
            rating: '4'
        },
        {
            name: 'CSS(3)',
            rating: '4'
        },
        {
            name: 'HTML(5)',
            rating: '4'
        },
        {
            name: 'JSON',
            rating: '4'
        },

        {
            name: 'Java',
            rating: '3'
        },
        {
            name: 'C++',
            rating: '3'
        },
        {
            name: 'Node JS',
            rating: '3'
        }
    ];
    var skillsRatingTwo = [
        {
            name: 'Git/Git Flow',
            rating: '4'
        },
        {
            name: 'Redux',
            rating: '3'
        },
        {
            name: 'Object Oriented Programming',
            rating: '4'
        },
        {
            name: 'MVC Pattern',
            rating: '4'
        },
        {
            name: 'Singleton Pattern',
            rating: '4'
        },
        {
            name: 'Performance Optimisation',
            rating: '4'
        },
        {
            name: 'MySQL',
            rating: '2'
        },
        {
            name: 'Mongo DB',
            rating: '2'
        },
        {
            name: 'LESS',
            rating: '3'
        },
        {
            name: 'Command line Interface',
            rating: '3'
        },
        {
            name: 'Material Design',
            rating: '3'
        }
    ];
    var templateOne = '';
    var templateTwo = '';
    skillsRatingOne.forEach(function (skill) {
        templateOne += '<li><span class="ability-title">' + skill.name + '</span><span class="ability-score">'
        for (var i = 0; i < skill.rating; i++) {
            templateOne += '<span class="glyphicon glyphicon-star filled"></span>';
        }
        for (var i = 0; i < 5 - skill.rating; i++) {
            templateOne += '<span class="glyphicon glyphicon-star"></span>';
        }
        templateOne += '</span></li>'
    });

    skillsRatingTwo.forEach(function (skill) {
        templateTwo += '<li><span class="ability-title">' + skill.name + '</span><span class="ability-score">'
        for (var i = 0; i < skill.rating; i++) {
            templateTwo += '<span class="glyphicon glyphicon-star filled"></span>';
        }
        for (var i = 0; i < 5 - skill.rating; i++) {
            templateTwo += '<span class="glyphicon glyphicon-star"></span>';
        }
        templateTwo += '</span></li>'
    });

    document.getElementById('skills-sec-one').innerHTML += templateOne;
    document.getElementById('skills-sec-two').innerHTML += templateTwo;

    /************** nav position handler **************/
    var navBar = $('#navbar-stack');
    var windowHeight = $(window).height() + 80;
    $(window).on('scroll', function (e) {
        if($(window).scrollTop() > windowHeight){
            navBar.addClass('fixed');
        }else{
            navBar.removeClass('fixed');
        }
            
    });
})($);