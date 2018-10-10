const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

function offsetDate(offsetInDays) {

    var d = new Date();
    d.setDate(d.getDate() + offsetInDays);

    return d.getDate() + ' ' + (d.getMonth() + 1) + ' ' + d.getFullYear();
}

router.get('/booking-v1/dashboard', function (req, res) {

    var items = [
        { name: 'N\'golo Ake Akenfyewe', colourClass: 'red', dateOffset: 1, respondBy: '10th December', subjects: 'German', dateRange: '1st Jul 2018 - 22nd Dec 2019', dbs: 'Yes' },
        { name: 'Matias Goodwin', colourClass: 'red', dateOffset: 2, respondBy: '1st Nov 2018', subjects: 'Physical education', dateRange: '10th Jan 2019 - 10th Dec 2019', dbs: 'Yes' },
        { name: 'Emilia Coleman', colourClass: 'red', dateOffset: 3, respondBy: '1st Nov 2018', subjects: 'English', dateRange: '25st Aug 2019 - 5 Nov 2019', dbs: 'Yes' },

        { name: 'Donell Reyes', colourClass: 'amber', dateOffset: 7, respondBy: '1st Nov 2018', subjects: 'Physical education', dateRange: '9th Feb 2019 - 1st Jun 2019', dbs: 'No' },
        { name: 'Mayur Briggs', colourClass: 'amber', dateOffset: 8, respondBy: '1st Nov 2018', subjects: 'Science', dateRange: '1st Jan 2019 - 1st Dec 2019', dbs: 'Yes' },
        { name: 'Joao Lord', colourClass: 'amber', dateOffset: 9, respondBy: '1st Nov 2018', subjects: 'Chemistry', dateRange: '1st Jul 2019 - 22 Dec 2019', dbs: 'No' },

        { name: 'Felix Finney', colourClass: 'green', dateOffset: 14, respondBy: '10th December', subjects: 'French', dateRange: '1st March 2019 - 21st Oct 2019', dbs: 'Yes' },
        { name: 'Kendal Vazquez', colourClass: 'green', dateOffset: 15, respondBy: '10th December', subjects: 'Computing', dateRange: '1st Apr 2019 - 1st Jan 2020', dbs: 'Yes' },
        { name: 'Laaibah Regan', colourClass: 'green', dateOffset: 16, respondBy: '10th December', subjects: 'Computing', dateRange: '31st Feb 2019 - 1st Jul 2019', dbs: 'No' },
    ];

    items.forEach(function (item) {
        item.respondBy = offsetDate(item.dateOffset);
        if (item.dateOffset < 7) {
            item.colourClass = 'red';
        }
        else if (item.dateOffset < 10) {
            item.colourClass = 'amber';
        }
        else {
            item.colourClass = 'green';
        }
    });

    req.session.data['data-items'] = items;

    res.redirect('/booking-v1/dashboard-results');
});

var getWords = function (text) {
    return text.split(' ');
};

var expectedSubjects = ['art', 'english', 'physics', 'maths'];

var extractSubject = function (words) {

    var foundSubjects = [];
    var remainder = [];

    words.forEach(function (word) {
        word = word.toLowerCase();
        if (expectedSubjects.indexOf(word) !== -1) {
            foundSubjects.push(word);
        }
        else {
            remainder.push(word);
        }
    });

    return { subjects: foundSubjects.join(' '), remainder: remainder.join(' ') };
};

var schools = [
    {
        Name: 'Abbey College',
        Address: 'Long Millgate, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£50',
        Subjects: 'Maths, English, Art, Physics, Geography',
        Distance: 1
    },
    {
        Name: 'Chetham\'s School of Music',
        Address: 'Long Millgate, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£0',
        Subjects: 'Maths, English, Art, Physics, Music',
        Distance: 1.5
    },
    {
        Name: 'The Creative Studio',
        Address: '16 Blossom Street, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Academy',
        Fees: '£5',
        Subjects: 'Maths, Art, Physics, Geography',
        Distance: 2.5
    },
    {
        Name: 'King of Kings School',
        Address: '142 Dantzic Street, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£25',
        Subjects: 'Maths, English, Art',
        'Distance': 5
    },
    {
        Name: 'New Islington Free School',
        Address: '10 Hugh Oldham Way, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£60',
        Subjects: 'Maths, English, Geography',
        Distance: 10
    }];

router.post('/candidate-search2/search-result-post', function (req, res) {

    var school = schools.find(function (item) {
        return (item.Name === req.session.data['school-name']);
    });

    req.session.data['school-address'] = school.Address;
    req.session.data['school-name'] = school.Name;
    req.session.data['school-subjects'] = school.Subjects;

    res.redirect('/candidate-search2/school-result');

});


router.post('/candidate-search2/search-results-post', function (req, res) {

    var radius = 0;
    var searchCriteria = '(NONE)';
    var searchLocation = 'XXX';

    switch (req.session.data['searchType']) {
        case 'isLocationSearch':
            radius = req.session.data['locationRadius'];
            searchCriteria = req.session.data['searchByLocation'];
            searchLocation = req.session.data['searchByLocation'];
            break;

        case 'isSubjectAndSchoolTypeSearch':
            radius = 99;
            searchCriteria = req.session.data['searchBySubjectAndSchoolType'];
            var extractSubjectAndType = extractSubject(getWords(searchCriteria));
            searchLocation = extractSubjectAndType.remainder;
            searchCriteria = extractSubjectAndType.subjects;
            break;

        case 'isSubjectAndLocationSearch':
            radius = req.session.data['subjectAndLocationRadius'];
            searchCriteria = req.session.data['subjectAndLocation'];
            var extractSubjectAndLocation = extractSubject(getWords(searchCriteria));
            searchLocation = extractSubjectAndLocation.remainder;
            searchCriteria = extractSubjectAndLocation.subjects;
            break;
    }

    req.session.data['searchCriteria'] = searchCriteria;
    req.session.data['searchRadius'] = radius;
    req.session.data['searchLocation'] = searchLocation;

    var schoolResults = schools.slice(0);

    schoolResults.forEach(function (item) {
        item.Address = item.Address.replace('Manchester', searchLocation);
    });

    req.session.data['schools'] = schoolResults;

    //if (searchCriteria.length > 0) {
    res.redirect('/candidate-search2/search-results');
    //}
    //else {
    //    res.redirect('/candidate-search2/search-blank');
    //}
});


// Main journey sort
router.post('/version1/get-into-teaching', function (req, res) {

    let howfar = req.session.data['howfar']

    console.log(req.session.data['howfar'])

    //Option 1
    if (howfar === 'new-to-teach') {
        res.redirect('/version1/get-into-teaching')
    }
    //Option 2
    else if (howfar === 'assessing') {
        res.redirect('/version1/how-can-we-help')
    }
    //Option 3
    else if (howfar === 'make-decision') {
        res.redirect('/version1/have-you-got-a-degree')
    }
    //Option 4
    else if (howfar === 'confirming') {
        res.redirect('/version1/experience-before')
    }
    //Option 5
    else if (howfar === 'applying') {
        res.redirect('/version1/itt-placement')
    }
    //Option 6
    else if (howfar === 'training') {
        res.redirect('/version1/on-teacher-training')
    }
    //end
})





// Help Decide

router.post('/have-you-got-a-degree', function (req, res) {

    let helpdecide = req.session.data['help-decide']

    console.log(req.session.data['help-decide'])

    //Option 1
    if (helpdecide === 'eligiability') {
        res.redirect('https://getintoteaching.education.gov.uk/eligibility-for-teacher-training')
    }
    //Option 2
    else if (helpdecide === 'training-options') {
        res.redirect('https://getintoteaching.education.gov.uk/explore-my-options')
    }
    //Option 3
    else if (helpdecide === 'teacher-life') {
        res.redirect('https://getintoteaching.education.gov.uk/life-as-a-teacher')
    }
    //Option 4
    else if (helpdecide === 'teach-funding') {
        res.redirect('https://getintoteaching.education.gov.uk/funding-and-salary')
    }
    //Option 5
    else if (helpdecide === 'personalised') {
        res.redirect('https://getintoteaching.education.gov.uk/get-help-and-support')
    }
    //Option 6
    else if (helpdecide === 'events') {
        res.redirect('https://getintoteaching.education.gov.uk/teaching-events')
    }
    //Option 7
    else if (helpdecide === 'school-experience') {
        res.redirect('/version1/have-you-got-a-degree')
    }
    //Option 8
    else if (helpdecide === 'teacher-applications') {
        res.redirect('https://getintoteaching.education.gov.uk/how-to-apply')
    }
    //Option 9
    else if (helpdecide === 'something-else') {
        res.redirect('https://getintoteaching.education.gov.uk/contact')
    }

    //end
})




// Have you got a degree
router.post('/version1/where-degree', function (req, res) {

    let gotdegree = req.session.data['got-degree']

    console.log(req.session.data['got-degree'])

    //Option 1
    if (gotdegree === 'yes') {
        res.redirect('/version1/where-degree')
    }
    //Option 2
    else if (gotdegree === 'working-towards') {
        res.redirect('/version1/where-degree-alt')
    }
    //Option 3
    else if (gotdegree === 'no') {
        res.redirect('/version1/get-into-teaching')
    }
    //end
})



// Where did you get your degree [5]
router.post('/version1/recognised', function (req, res) {

    let wheredegree = req.session.data['where-degree']

    console.log(req.session.data['where-degree'])

    //Option 1
    if (wheredegree === 'uk') {
        res.redirect('/version1/experience-before')
    }
    //Option 2
    else if (wheredegree === 'overseas') {
        res.redirect('/version1/recognised')
    }
    //end
})

// Where degree alt [5a]
router.post('/version1/check-qualification', function (req, res) {

    let degreeloction = req.session.data['degree-loction']

    console.log(req.session.data['degree-loction'])

    //Option 1
    if (degreeloction === 'uk') {
        res.redirect('/version1/experience-before')
    }
    //Option 2
    else if (degreeloction === 'overseas') {
        res.redirect('/version1/recognised')
    }
    //end
})


// Recognised check qualificatipon
router.post('/version1/experience-before', function (req, res) {

    let ukrow = req.session.data['ukrow']

    console.log(req.session.data['ukrow'])

    //Option 1
    if (ukrow === 'yes') {
        res.redirect('/version1/experience-before')
    }
    //Option 2
    else if (ukrow === 'no') {
        res.redirect('/version1/check-qualification')
    }
    //end
})



// Have you had a school experience before
router.post('/version1/find-and-book', function (req, res) {

    let undertaken = req.session.data['undertaken']

    console.log(req.session.data['undertaken'])

    //Option 1
    if (undertaken === 'yes') {
        res.redirect('/version1/find-and-book')
    }
    //Option 2
    else if (undertaken === 'no') {
        res.redirect('/version1/find-and-book')
    }
    //end
})






// What stage are you at
router.post('/version1/applied-yet', function (req, res) {

    let placement = req.session.data['placement']

    console.log(req.session.data['placement'])

    //Option 1
    if (placement === 'notyet') {
        res.redirect('/version1/applied-yet')
    }
    //Option 2
    else if (placement === 'applied') {
        res.redirect('/version1/experience-before')
    }
    //Option 3
    else if (placement === 'offered') {
        res.redirect('/version1/experience-before')
    }
    //end
})





// Why haven’t you applied yet?
router.post('/version1/find-itt', function (req, res) {

    let applied = req.session.data['applied']

    console.log(req.session.data['applied'])

    //Option 1
    if (applied === 'notsure') {
        res.redirect('/version1/experience-before')
    }
    //Option 2
    else if (applied === 'how') {
        res.redirect('/version1/find-itt')
    }
    //Option 3
    else if (applied === 'right-course') {
        res.redirect('/version1/find-itt')
    }
    //end
})







// Profile 1 directions
router.post('/booking/noti-contact', function (req, res) {

    let direct = req.session.data['direct']

    console.log(req.session.data['direct'])

    //Option 1
    if (direct === 'contact-candidate') {
        res.redirect('/booking/noti-contact')
    }
    //Option 2
    else if (direct === 'cancel-booking') {
        res.redirect('/booking/noti-cancel')
    }
    //end
})


// Profile 2 directions
router.post('/booking/noti-confirm', function (req, res) {

    let pro2direct = req.session.data['pro2-direct']

    console.log(req.session.data['pro2-direct'])

    //Option 1
    if (pro2direct === 'confirm-candidate') {
        res.redirect('/booking/noti-confirm')
    }
    //Option 2
    else if (pro2direct === 'reject-candidate') {
        res.redirect('/booking/noti-reject')
    }
    //Option 2
    else if (pro2direct === 'contact-candidate') {
        res.redirect('/booking/noti-contact')
    }
    //end
})

// Profile 3 directions
router.post('/booking/noti-contact', function (req, res) {

    let direct = req.session.data['direct']

    console.log(req.session.data['direct'])

    //Option 1
    if (direct === 'contact-candidate') {
        res.redirect('/booking/noti-contact')
    }
    //Option 2
    else if (direct === 'cancel-booking') {
        res.redirect('/booking/noti-cancel')
    }
    //end
})







module.exports = router
