$(document).ready(function () {

    var options = {
        valueNames: [
            { data: ['id'] },
            'dates',
            'availability'
        ]
    };

    var initialRows = [
        //{ id: 1, dates: '1-2-3', availability: 'yes' }
    ];

    // Init list
    var contactList = new List('date-list', options, initialRows);

    contactList.clear(); //  clear out existing items

    var idField = $('#id-field'),
        startDayField = $('#start-day'),
        startMonthField = $('#start-month'),
        startYearField = $('#start-year'),
        finishDayField = $('#finish-day'),
        finishMonthField = $('#finish-month'),
        finishYearField = $('#finish-year'),
        availabilityRangeField = $('#availability-range-field'),
        singleDayField = $('#single-day'),
        singleMonthField = $('#start-month'),
        singleYearField = $('#single-year'),
        availabilitySingleField = $('#availability-single-field'),
        addRangeBtn = $('#add-range'),
        addSingleBtn = $('#add-single'),
        removeBtns = $('.remove-item-btn');

    //// Sets callbacks to the buttons in the list
    refreshCallbacks();

    var addItem = function (dates, availability) {
        contactList.add({
            id: Math.floor(Math.random() * 1234567),
            dates: dates,
            availability: availability,
        });
        clearFields();
        refreshCallbacks();
    };

    addRangeBtn.click(function (e) {
        var startDate = startDayField.val() + '/' + startMonthField.val() + '/' + startYearField.val();
        var finishDate = finishDayField.val() + '/' + finishMonthField.val() + '/' + finishYearField.val();

        addItem(startDate + '-' + finishDate, availabilityRangeField.val());

        e.preventDefault();
        return false;
    });

    addSingleBtn.click(function (e) {
        var date = singleDayField.val() + '/' + singleMonthField.val() + '/' + singleYearField.val();

        addItem(date, availabilitySingleField.val());

        e.preventDefault();
        return false;
    });

    function refreshCallbacks() {
        // Needed to add new buttons to jQuery-extended object
        removeBtns = $(removeBtns.selector);

        removeBtns.click(function () {
            var itemId = $(this).closest('tr').data('id');
            contactList.remove('id', itemId);
        });
    }

    function clearFields() {
        startDayField.val('');
        startMonthField.val('');
        startYearField.val('');
        finishDayField.val('');
        finishMonthField.val('');
        finishYearField.val('');
        // availabilityRangeField = $('#availability-range-field'),
        singleDayField.val('');
        singleMonthField.val('');
        singleYearField.val('');
        //  availabilitySingleField = $('#availability-single-field'),
    }

});

