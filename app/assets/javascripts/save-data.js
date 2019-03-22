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

$('form[data-local-save]').submit(function (e) {
  saveInputs(this);
});
$('a[data-save-inputs').click(function (e) {
  saveInputs($('form[data-local-save]'));
});
