
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
        placementLength: 2,
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        motivations: 'Need to get experience for ITT',
        expectations: 'Want to find out if teaching is right for me',
        noShowCount: 1
    },
    {
        name: 'Tobi Brandt',
        dbs: 'Yes',
        dateOffset: 15,
        placementLength: 1,
        degreeSubject: 'History',
        bookingSubject: 'English',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 August 1987',
        address: '5152 Denny street, Wilmslow, Cheshire',
        email: 'tobib@hotmail.co.uk',
        phone: '0161 111 2313',
        accessibility: ['None'],
        howFarTeacher: 'Just investigating',
        motivations: '',
        expectations: 'Want to find out if teaching is right for me',
        noShowCount: 0
    },
    {
        name: 'Asia Benton',
        dbs: 'Yes',
        dateOffset: 20,
        placementLength: 3,
        degreeSubject: 'Astrophysics',
        bookingSubject: 'French',
        criminalRecord: 'Yes',
        degreeLevel: 'Graduate',
        dob: '25 February 1967',
        address: '6920 Park Road,  Campbelltown, Scotland',
        email: 'asia@benton.co.uk',
        phone: '10 811 8055',
        accessibility: ['Space to get around in a wheel chair'],
        howFarTeacher: 'I was nearly a teacher but did not pass the exams',
        motivations: 'Dipping my toe in',
        expectations: 'Low',
        noShowCount: 0
    },
    {
        name: 'Amrit Shepherd',
        dbs: 'Yes',
        dateOffset: 25,
        placementLength: 5,
        degreeSubject: 'Physics',
        bookingSubject: 'Physics',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '31 September 1990',
        address: '71 Royal Lane, Westhaughton, Bolton M16 2LU',
        email: 'amrit.shepherd@gmail.com',
        phone: '0800 101 066',
        accessibility: ['None'],
        howFarTeacher: '',
        motivations: '',
        expectations: '',
        noShowCount: 5
    },
    {
        name: 'Doris Wickens',
        dbs: 'No',
        dateOffset: 45,
        placementLength: 2,
        degreeSubject: 'Maths',
        bookingSubject: 'Maths',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'Applying for teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'Not really sure',
        noShowCount: 1
    },
    {
        name: 'Karen Tillman',
        dbs: 'Yes',
        dateOffset: 55,
        placementLength: 4,
        degreeSubject: 'Geography',
        bookingSubject: 'History',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'Accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'Will hopefully convince me teaching is right for me',
        noShowCount: 1
    },
    {
        name: 'Hanifa Curry',
        dbs: 'Yes',
        dateOffset: 75,
        placementLength: 2,
        degreeSubject: 'Science',
        bookingSubject: 'English',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', 'Space to get around in a wheel chair'],
        howFarTeacher: 'Accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'Hopefully will enjoy it',
        noShowCount: 1
    },
    {
        name: 'Lola-Mae Patton',
        dbs: 'Yes',
        dateOffset: 85,
        placementLength: 2,
        degreeSubject: 'Music',
        bookingSubject: 'Music',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle  NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Jaxon Burgess',
        dbs: 'No',
        dateOffset: 90,
        placementLength: 3,
        degreeSubject: 'German',
        bookingSubject: 'German',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'Accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'Low',
        noShowCount: 1
    },
    {
        name: 'Henley Hurst',
        dbs: 'Yes',
        dateOffset: 95,
        placementLength: 4,
        degreeSubject: 'English',
        bookingSubject: 'English',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'Accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    },
    {
        name: 'Nyah Turner',
        dbs: 'Yes',
        dateOffset: 100,
        placementLength: 1,
        degreeSubject: 'French',
        bookingSubject: 'French',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        motivations: 'Need to get experience for ITT.',
        expectations: 'is the right career for me.',
        noShowCount: 1
    }
];

const requestUsers = [
    {
        name: 'N\'golo Ake Akenfyewe',
        dateOffset: 1,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'German',
        dateRange: '1 July 2018 to 22 December 2019',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'ake@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'Accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Matias Goodwin',
        dateOffset: 2,
        requestOffset: 70,
        placementLength: 5,
        subjects: 'Physical education',
        dateRange: '10 January 2019 to 10 December 2019',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '19 Lowrow, Lowton. L1 3AC',
        email: 'matias.goodwin@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['Will need ramp or lift access for any stairs.', ' Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Emilia Coleman',
        dateOffset: 3,
        requestOffset: 30,
        placementLength: 2,
        subjects: 'English',
        dateRange: '25st August 2019 to 5 November 2019',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        requestDates: '08 to 19 October 2019 (10 days)',
        preferredPlacementRole: 'Head teacher',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: '2:1',
        dob: '10 June 1987',
        address: 'The Moorings, Moire. M11 11M',
        email: 'emcole@hotmail.co.uk',
        phone: '987 654 3219',
        accessibility: [' Space to get around in a wheel chair'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Donell Reyes',
        dateOffset: 7,
        requestOffset: 32,
        placementLength: 2,
        subjects: 'Physical education',
        dateRange: '9 February 2019 to 1st June 2019',
        dbs: 'No',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 August 1937',
        address: '999 Letsby Avenue, Copperton, CP1 1NN',
        email: 'donny@example.com',
        phone: '0101 999 9999',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Mayur Briggs',
        dateOffset: 8,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'Science',
        dateRange: '1st January 2019 to 1st December 2019',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Watching from the back',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Postgraduate',
        dob: '10 January 1980',
        address: 'The Old Barn, Barnton, Barnet, B1 1BB',
        email: 'briggie-smalls@example.com',
        phone: '0987 654 3210',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Joao Lord',
        dateOffset: 9,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'Chemistry',
        dbs: 'No',
        dateRange: '1st July 2019 to 22 December 2019',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 April 1985',
        address: '15 Lorde Street, Lord Edge, A1 1AA',
        email: 'joaolord@example.com',
        phone: '0123 456 7890',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Felix Finney',
        dateOffset: 14,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'French',
        dateRange: '1st March 2019 to 21st October 2019',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Kendal Vazquez',
        dateOffset: 15,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'Computing',
        dateRange: '1st April 2019 to 1st January 2020',
        dbs: 'Yes',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    },
    {
        name: 'Laaibah Regan',
        dateOffset: 16,
        requestOffset: 60,
        placementLength: 2,
        subjects: 'Computing',
        dateRange: '31st March 2019 to 1st Jul 2019',
        dbs: 'No',
        motivations: 'I just want to be a teacher',
        expectations: 'is the right career for me.',
        preferredPlacementRole: 'Teaching assistant',
        degreeSubject: 'Computer science',
        bookingSubject: 'Art',
        criminalRecord: 'No',
        degreeLevel: 'Graduate',
        dob: '10 September 1997',
        address: '21 Byker Grove, Byker, Newcastle. NL1 5NU',
        email: 'mineliman97@hotmail.co.uk',
        phone: '0191 333 4545',
        accessibility: ['None'],
        howFarTeacher: 'I\'ve been accepted on teacher training',
        noShowCount: 1
    }
];

function formatDate(d) {
    return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

function offsetDate(offsetInDays) {

    var d = new Date();
    d.setDate(d.getDate() + offsetInDays);

    return formatDate(d);
}

function formatDayCount(numberOfDays) {
    var days = ' (' + numberOfDays + ' day';
    if (numberOfDays !== 1) {
        days += 's';
    }
    days += ')';

    return days;
}

function formatOffsetDateRange(offsetInDays, numberOfDays) {
    var startDate = new Date();
    startDate.setDate(startDate.getDate() + offsetInDays);

    var endDate = new Date();
    endDate.setDate(endDate.getDate() + offsetInDays + (numberOfDays-1));

    var days = formatDayCount(numberOfDays);

    if (startDate.getDate() === endDate.getDate()) {
        return formatDate(startDate) + days;
    }

    if (startDate.getMonth() == endDate.getMonth()) {
        return startDate.getDate() + ' to ' + formatDate(endDate) + days;
    }
    else {
        return formatDate(startDate) + ' to ' + formatDate(endDate) + days;
    }
}

router.get('/booking-v1/profile2', function (req, res) {

    var user = bookingUsers.find(function (item) {
        return item.name === req.session.data['candidate-selected-name'];
    });

    req.session.data['candidate-name'] = user.name;
    req.session.data['candidate-dob'] = user.dob;
    req.session.data['candidate-address'] = user.address;
    req.session.data['candidate-email'] = user.email;
    req.session.data['candidate-phone'] = user.phone;
    req.session.data['candidate-accessibility'] = Object.assign(user.accessibility);
    req.session.data['candidate-degree-level'] = user.degreeLevel;
    req.session.data['candidate-degree-subject'] = user.degreeSubject;
    req.session.data['candidate-dbs'] = user.dbs;
    req.session.data['candidate-criminal'] = user.criminal;
    req.session.data['candidate-booking-subject'] = user.bookingSubject;
    req.session.data['candidate-booking-dates'] = formatOffsetDateRange(user.dateOffset, user.placementLength);
    req.session.data['candidate-no-shows'] = user.noShowCount;
    req.session.data['candidate-how-far'] = user.howFarTeacher;
    req.session.data['candidate-motivations'] = user.motivations;
    req.session.data['candidate-expectations'] = user.expectations;
    req.session.data['candidate-profile-page'] = '/booking-v1/profile2?candidate-selected-name=' + user.name;

    console.log(user.dateOffset +' '+ user.placementLength + ' ' +req.session.data['candidate-booking-dates']);
    res.redirect('/booking-v1/profile2-template');
});

router.get('/booking-v1/profile3', function (req, res) {

    var user = requestUsers.find(function (item) {
        return item.name === req.session.data['candidate-selected-name'];
    });

    req.session.data['candidate-name'] = user.name;
    req.session.data['candidate-dob'] = user.dob;
    req.session.data['candidate-address'] = user.address;
    req.session.data['candidate-email'] = user.email;
    req.session.data['candidate-phone'] = user.phone;
    req.session.data['candidate-accessibility'] = Object.assign(user.accessibility);
    req.session.data['candidate-degree-level'] = user.degreeLevel;
    req.session.data['candidate-degree-subject'] = user.degreeSubject;
    req.session.data['candidate-dbs'] = user.dbs;
    req.session.data['candidate-criminal'] = user.criminal;
    req.session.data['candidate-booking-dates'] = formatOffsetDateRange(user.requestOffset, user.placementLength);
    req.session.data['candidate-booking-subject'] = user.bookingSubject;
    req.session.data['candidate-no-shows'] = user.noShowCount;
    req.session.data['candidate-how-far'] = user.howFarTeacher;
    req.session.data['candidate-motivations'] = user.motivations;
    req.session.data['candidate-expectations'] = user.expectations;
    req.session.data['candidate-profile-page'] = '/booking-v1/profile3?candidate-selected-name=' + user.name;

    res.redirect('/booking-v1/profile3-template');
});

router.post('/booking-v1/notify', function (req, res) {

    if (req.session.data['result'] === 'confirm') {
        res.render('booking-v1/noti-confirm');
    }
    else if (req.session.data['result'] === 'cancel') {
        res.render('booking-v1/noti-cancel');
    }
    else if (req.session.data['result'] === 'contact') {
        res.render('booking-v1/noti-contact');
    }
    else if (req.session.data['result'] === 'reject') {
        res.render('booking-v1/noti-reject');
    }
    else {
        res.render('booking-v1/dashboard');
    }
});


router.post('/schools/add-school', function (req, res) {
    console.log("post");
    req.session.data['school-request'] = 'A';
    res.render('schools/add-school-template');
});

router.get('/schools/signout', function (req, res) {
    req.session.data['school-request'] = null;
    console.log("signout");
    res.render('schools/signout');
});

router.get('/booking-v1/view-bookings', function (req, res) {

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

    res.redirect('/booking-v1/view-bookings-template');
});

router.get('/booking-v1/dashboard', function (req, res) {

    var requestItems = [];
    requestUsers.forEach(function (item) {
        var newItem = Object.assign(item);
        requestItems.push(newItem);
    });

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
        var newItem = Object.assign(item);
        newItem.dateRange = formatOffsetDateRange(item.dateOffset, item.placementLength);
        newItem.placementDays = formatDayCount(item.placementLength);
        bookingItems.push(newItem);
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
        Id: 1,
        Name: 'Ellen Wilkinson High School',
        Address: 'Long Millgate, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Secondary School',
        Fees: '£25 per day for placement / £50 for DBS check',
        Subjects: 'Maths, English, Art, Physics, Geography',
        Distance: 1,
        ShowLong: true
    },
    {
        Id: 2,
        Name: 'City College Manchester',
        Address: 'Long Millgate, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'College',
        Fees: '£0',
        Subjects: 'Maths, English, Art, Physics, Music',
        Distance: 1.5,
        ShowLong: true
    },
    {
        Id: 3,
        Name: 'New Islington High School',
        Address: '16 Blossom Street, Manchester',
        Phase: 'Primary, Secondary and 16 to 18',
        SchoolType: 'Secondary, Academy',
        Fees: '£10 daily admin fee / £50 one-off DBS fee',
        Subjects: 'Maths, Art, Physics, Geography',
        Distance: 2.5,
        ShowLong: true
    },
    {
        Id: 4,
        Name: 'Medlock Primary School',
        Address: '142 Dantzic Street, Manchester',
        Phase: 'Primary',
        SchoolType: 'Primary School',
        Fees: '£20 per day for placement / £75 for DBS check',
        Subjects: 'Maths, English, Art',
        Distance: 5,
        ShowLong: true
    },
    {
        Id: 5,
        Name: 'Ancoats Nursery School',
        Address: '10 Hugh Oldham Way, Manchester',
        Phase: 'Nursery School',
        SchoolType: 'Nursery School',
        Fees: '£0 per day for placement / £50 for DBS check',
        Subjects: 'Maths, English, Geography',
        Distance: 10,
        ShowLong: true
    }];

router.post('/candidate-search/search-result-post', function (req, res) {

    var school = schools.find(function (item) {
        return (item.Name === req.session.data['school-name']);
    });

    req.session.data['school-address'] = school.Address;
    req.session.data['school-name'] = school.Name;
    req.session.data['school-subjects'] = school.Subjects;
    req.session.data['school-phase'] = school.Phase;
    req.session.data['school-fees'] = school.Fees;

    res.redirect('/candidate-search/school-result');

});


router.post('/candidate-search/search-results-post', function (req, res) {

    var radius = 0;
    var searchCriteria = '(NONE)';
    var searchLocation = 'Manchester';

	req.session.data['searchCriteria'] = searchCriteria;
	req.session.data['searchRadius'] = radius;
	req.session.data['searchLocation'] = req.session.data.search;

	let subjects = [
		"Art and design",
		"Biology",
		"Business studies",
		"Chemistry",
		"Citizenship",
		"Classics",
		"Computing",
		"Dance",
		"Design and technology",
		"Drama",
		"Economics",
		"English",
		"French",
		"Geography",
		"German",
		"Health and social care",
		"History",
		"Languages (other)",
		"Maths",
		"Media studies",
		"Music",
		"Physical education (PE)",
		"Physics",
		"Physics with maths",
		"Primary",
		"Psychology",
		"Religious education (RE)",
		"Social sciences",
		"Spanish",
		"Vocational health"
	];
    req.session.data['subjects'] = subjects;

	var schoolResults = schools.slice(0);

    schoolResults.forEach(function (item) {
		item.Address = item.Address.replace('Manchester', searchLocation);
    });

    req.session.data['schools'] = schoolResults;

    //if (searchCriteria.leng > 0) {
    res.redirect('/candidate-search/search-results');
    //}
    //else {
    //    res.redirect('/candidate-search/search-blank');
    //}
});

router.get('^/schools/:schoolId([0-9]*)', function(req, res) {

    let sId = Number.parseInt(req.params.schoolId);
    let school = schools.find(s => s.Id === sId);

    // We need to do this so the old template will render,
    // just sending the school object would be more sensible...
    req.session.data['school-address']  = school.Address;
    req.session.data['school-name']     = school.Name;
    req.session.data['school-subjects'] = school.Subjects;
    req.session.data['school-phase']    = school.Phase;
    req.session.data['school-fees']     = school.Fees;

	// FIXME we're redirecting rather than rendering here because the
	// over-reliance on session data is complicating the page and
	// sometimes making schools data not load initially.
    if (school.ShowLong) {
        //res.render('candidate-search/school-result-long.html');
        res.redirect('/candidate-search/school-result-long.html');
    }
    else {
        //res.render('candidate-search/school-result.html');
        res.redirect('/candidate-search/school-result.html');
    }
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


// School type
router.post('/schools/subjects', function (req, res) {
    let schoolType = req.session.data['schooltype'] ;

    //Option 1
    if (schoolType === 'primary') {
        res.redirect('/schools/primary-key-stages')
    }
    //Option 2
    else if (schoolType === 'secondary') {
        res.redirect('/schools/subjects-secondary')
    }
    //Option 3
    else if (schoolType === 'both') {
        res.redirect('/schools/subjects-primary-and-secondary')
    }
    //Option 4
    else if (schoolType === '16 to 18') {
        res.redirect('/schools/subjects-secondary')
    }

    else {
      res.redirect('/schools/school-type');
    }
    //end
})

router.post('/schools/other-details-admin-save', function(req, res) {
  let admin_costs = req.body['checkbox_admin_costs'] ;
  let dbs_costs = req.body['checkbox_dbs_costs'] ;
  let other_costs = req.body['checkbox_other_costs'] ;

  req.session.data['checkbox_admin_costs'] = (admin_costs == '1') ;
  req.session.data['checkbox_dbs_costs'] = (dbs_costs == '1') ;
  req.session.data['checkbox_other_costs'] = (other_costs == '1') ;

  res.redirect('/schools/other-details-admin') ;
}) ;

router.get('/schools/other-details-admin', function(req, res) {
  if (!req.session.data['checkbox_admin_costs']) {
    res.redirect('/schools/other-details-dbs') ;
  } else {
    res.render('schools/other-details-admin') ;
  }
}) ;

router.get('/schools/other-details-dbs', function(req, res) {
  if (!req.session.data['checkbox_dbs_costs']) {
    res.redirect('/schools/other-details-other') ;
  } else {
    res.render('schools/other-details-dbs') ;
  }
}) ;

router.get('/schools/other-details-other', function(req, res) {
  if (!req.session.data['checkbox_other_costs']) {
    res.redirect('/schools/school-type') ;
  } else {
    res.render('schools/other-details-other') ;
  }
}) ;

router.get('/booking/profile', function(req, res) {
  let id = req.query['id'] || '1' ;

  let school = schools.find(function (item) {
      return (item.Id.toString() === id);
  });

  res.render('booking/profile', {school: school}) ;
})

module.exports = router
