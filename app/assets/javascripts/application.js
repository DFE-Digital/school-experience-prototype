/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production');
}

$(document).ready(function () {
    window.GOVUKFrontend.initAll();
    var param = parseParam(window.location);
    var selected = param["id"];
    if (selected) {
        $('#schooladmin-menu-item-' + selected).addClass('schooladmin-menu-item-selected');
    }
});

var parseParam = function (a) {
    var ret = {},
        seg = a.search.replace(/^\?/, '').split('&'),
        len = seg.length,
        i = 0,
        s;
    for (; i < len; i++) {
        if (!seg[i]) {
            continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
    }
    return ret;
};
