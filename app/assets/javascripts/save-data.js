function parseValue(field) {
  let value = null;
  switch(field.type) {
    case 'checkbox':
      value = field.checked;
      break;
    case 'radio':
      value = field.checked;
      break;
    default:
      value = field.value;
  }
  return value;
}

function restoreValue(field, value) {
  switch(field.type) {
    case 'checkbox' :
      field.attr('checked') = value ;
    case 'radio' :
      field.attr('checked') = value ;
    default:
      field.val(value) ;
  }
}

function parseName(field) {
  if (field.dataset.saveName) {
    return field.dataset.saveName;
  } else {
    return field.id;
  }
}

let shouldKeepInput = (field) => { return !["submit"].includes(field.type) };

let saveInputs = (form) => {
  let prefix = $(form).data('local-save');
  let $fields = $(form).find(':input');
  Array.from($fields).filter(shouldKeepInput).forEach((field) => {
    let key = `${prefix}:${parseName(field)}`;
    let value = JSON.stringify(parseValue(field));
    window.localStorage.setItem(key, value);
  });
}

let restoreInput = (input) => {
  let jqInput = $(input) ;
  let localStorageKey = jqInput.data('local-restore') ;
  console.log('RESTORING ' + localStorageKey) ;

  let encodedValue = window.localStorage.getItem(localStorageKey) ;
  if (encodedValue == null) {
    console('FOUND ' +localStorageKey + '=' + encodedValue ) ;
    return ;
  }

  let value = JSON.parse(encodedValue) ;

  restoreValue(jqInput, value) ;
}

$('form[data-local-save]').submit(function (e) {
  saveInputs(this);
});
$('a[data-save-inputs]').click(function (e) {
  saveInputs($('form[data-local-save]'));
});

$(document).ready(function(e) {
  let inputs = $('input[data-local-restore]') ;
  inputs.each(function(index) {
    restoreInput(inputs[index]) ;
  }) ;
}) ;

$('a[href="/prototype-admin/clear-data"]').click(function (e) {
  window.localStorage.clear();
});

$(document).ready(function (e) {
  let storageLink = $('a[href="/prototype-admin/local-storage"]');
  if (window.sessionStorage['local-storage'] == 'ON') {
    storageLink.text('Local storage - ON');
  } else {
    storageLink.text('Local storage - OFF');
  }
});

$('a[href="/prototype-admin/local-storage"]').click(function (e) {
  e.preventDefault();
  if (window.sessionStorage['local-storage'] == 'ON') {
    window.sessionStorage['local-storage'] = 'OFF';
    $(this).text('Local storage - OFF');
  } else {
    window.sessionStorage['local-storage'] = 'ON';
    $(this).text('Local storage - ON');
  }

  location.reload();
});
