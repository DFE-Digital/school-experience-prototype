const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const bookingUsers = [
    {
        name: 'David Minelli',
        dbs: 'No',
        dateOffset: 14,
        subject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', ' Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Tobi Brandt',
        dbs: 'Yes',
        dateOffset: 15,
        subject: 'History',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 August 1987',
        address: '5152 Denny street, Wilmslow, Cheshire',
        email: 'tobib@hotmail.co.uk',
        tel: '0161 111 2313',
        accessibility: '',
        howFarTeacher: 'Just investigating',
        whyTeacher: '',
        expectations: 'is the right career for me.',
        noShowCount: 0
    },
    {
        name: 'Asia Benton',
        dbs: 'Yes',
        dateOffset: 20,
        subject: 'French',
        bookingSubject: 'Art',
        criminalRecord: 'Yes',
        degree: 'Astrophysics',
        dob: '25 February 1967',
        address: '6920 park rd.  Campbell Town, Scotland',
        email: 'asia@benton.co.uk',
        tel: '01 811 8055',
        accessibility: ['Space to get around in a wheel chair'],
        howFarTeacher: 'I was nearly a teacher but did not pass the exams',
        whyTeacher: 'Dipping my toe in',
        expectations: 'Low',
        noShowCount: 0
    },
    {
        name: 'Amrit Shepherd',
        dbs: 'Yes',
        dateOffset: 25,
        subject: 'Physics',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'English',
        dob: '31 September 1990',
        address: '71 Royal Lane, Westhaughton, Bolton',
        email: 'amrit.shepherd@gmail.com',
        tel: '0800 101 066',
        accessibility: [],
        howFarTeacher: '',
        whyTeacher: '',
        expectations: '',
        noShowCount: 5
    },
    {
        name: 'Doris Wickens',
        dbs: 'No',
        dateOffset: 45,
        subject: 'Maths',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Karen Tillman',
        dbs: 'Yes',
        dateOffset: 55,
        subject: 'Geography',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Hanifa Curry',
        dbs: 'Yes',
        dateOffset: 75,
        subject: 'Science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Lola-Mae Patton',
        dbs: 'Yes',
        dateOffset: 85,
        subject: 'Music',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Jaxon Burgess',
        dbs: 'No',
        dateOffset: 90,
        subject: 'German',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Henley Hurst',
        dbs: 'Yes',
        dateOffset: 95,
        subject: 'English',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Nyah Turner',
        dbs: 'Yes',
        dateOffset: 100,
        subject: 'French',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degree: 'Graduate',
        dob: '01 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        tel: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        whyTeacher: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    }
];

function offsetDate(offsetInDays) {

    var d = new Date();
    d.setDate(d.getDate() + offsetInDays);

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

router.get('/booking-v1/profile2', function (req, res) {
    console.log(res);

    var user = bookingUsers.find(function (item) {
        return item.name === req.session.data['candidate-selected-name'];
    });


    req.session.data['candidate-name'] = user.name;
    req.session.data['candidate-dob'] = user.dob;
    req.session.data['candidate-address'] = user.address;
    req.session.data['candidate-email'] = user.email;
    req.session.data['candidate-phone'] = user.phone;
    req.session.data['candidate-accessibility'] = Object.assign(user.accessibility);
    req.session.data['candidate-degree'] = user.degree;
    req.session.data['candidate-subject'] = user.subject;
    req.session.data['candidate-dbs'] = user.dbs;
    req.session.data['candidate-criminal'] = user.criminal;
    req.session.data['candidate-booking-subject'] = user.bookingSubject;
    req.session.data['candidate-no-shows'] = user.noShowCount;
    req.session.data['candidate-how-far'] = user.howFarTeacher;
    req.session.data['candidate-why'] = user.whyTeacher;
    req.session.data['candidate-expectations'] = user.expectations;

    res.redirect('/booking-v1/profile2-template');
});


router.post('/booking-v1/noti-confirm', function (req, res) {

    if (req.session.data['result'] === 'confirm') {
        res.render('booking-v1/noti-confirm');
    }
    else if (req.session.data['result'] === 'cancel') {
        res.render('booking-v1/noti-cancel');
    }
    else {
        res.render('booking-v1/dashboard');
    }
});

router.get('/schools-pre/add-school', function (req, res) {
    res.session.data['school-request'] = null;
    res.render('schools-pre/add-school-template');
});


router.get('/booking-v1/dashboard', function (req, res) {

    var requestItems = [
        { name: 'N\'golo Ake Akenfyewe', colourClass: 'red', dateOffset: 1, subjects: 'German', dateRange: '1 July 2018 - 22 December 2019', dbs: 'Yes' },
        { name: 'Matias Goodwin', colourClass: 'red', dateOffset: 2, subjects: 'Physical education', dateRange: '10 January 2019 - 10 December 2019', dbs: 'Yes' },
        { name: 'Emilia Coleman', colourClass: 'red', dateOffset: 3, subjects: 'English', dateRange: '25st August 2019 - 5 November 2019', dbs: 'Yes' },

        { name: 'Donell Reyes', colourClass: 'amber', dateOffset: 7, subjects: 'Physical education', dateRange: '9 February 2019 - 1st June 2019', dbs: 'No' },
        { name: 'Mayur Briggs', colourClass: 'amber', dateOffset: 8, subjects: 'Science', dateRange: '1st January 2019 - 1st December 2019', dbs: 'Yes' },
        { name: 'Joao Lord', colourClass: 'amber', dateOffset: 9, subjects: 'Chemistry', dateRange: '1st July 2019 - 22 December 2019', dbs: 'No' },

        { name: 'Felix Finney', colourClass: 'green', dateOffset: 14, subjects: 'French', dateRange: '1st March 2019 - 21st October 2019', dbs: 'Yes' },
        { name: 'Kendal Vazquez', colourClass: 'green', dateOffset: 15, subjects: 'Computing', dateRange: '1st April 2019 - 1st January 2020', dbs: 'Yes' },
        { name: 'Laaibah Regan', colourClass: 'green', dateOffset: 16, subjects: 'Computing', dateRange: '31st March 2019 - 1st Jul 2019', dbs: 'No' },
    ];

    requestItems.forEach(function (item) {
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

    req.session.data['requestItems'] = requestItems;

    var bookingItems = [];
    bookingUsers.forEach(function (item) {
        bookingItems.push(Object.assign(item));
    });

    bookingItems.forEach(function (item) {
        item.bookingDate = offsetDate(item.dateOffset);
        if (item.dateOffset < 30) {
            item.colourClass = 'red';
        }
        else if (item.dateOffset < 60) {
            item.colourClass = 'amber';
        }
        else {
            item.colourClass = 'green';
        }
    });

    req.session.data['bookingItems'] = bookingItems;

    res.redirect('/booking-v1/dashboard-template');
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
        Phase: 'Primary, Secondary a 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£50',
        Subjects: 'Maths, English, Art, Physics, Geography',
        Distance: 1
    },
    {
        Name: 'Chetham\'s School of Music',
        Address: 'Long Millgate, Manchester',
        Phase: 'Primary, Secondary a 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£0',
        Subjects: 'Maths, English, Art, Physics, Music',
        Distance: 1.5
    },
    {
        Name: 'The Creative Studio',
        Address: '16 Blossom Street, Manchester',
        Phase: 'Primary, Secondary a 16 to 18',
        SchoolType: 'Academy',
        Fees: '£5',
        Subjects: 'Maths, Art, Physics, Geography',
        Distance: 2.5
    },
    {
        Name: 'King of Kings School',
        Address: '142 Dantzic Street, Manchester',
        Phase: 'Primary, Secondary a 16 to 18',
        SchoolType: 'Independent School',
        Fees: '£25',
        Subjects: 'Maths, English, Art',
        'Distance': 5
    },
    {
        Name: 'New Islington Free School',
        Address: '10 Hugh Oldham Way, Manchester',
        Phase: 'Primary, Secondary a 16 to 18',
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

    //if (searchCriteria.leng > 0) {
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
