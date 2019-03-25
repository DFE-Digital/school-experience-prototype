class SchoolDetails {
  constructor(storage) {
    this.storage = storage;
    this.storageKey = `school-onboarding`
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(`${this.storageKey}:${key}`));
  }

  get feesCharged() {
    let adminCost = this.getItem('fees-charged:admin-costs');
    let dbsCheckCost = this.getItem('fees-charged:dbs-check-costs');
    let otherCosts = this.getItem('fees-charged:other-costs');

    let output = [];
    if (adminCost) {
      output.push(this.feeDescription('administration fee', 'admin-costs'));
    }
    if (dbsCheckCost) {
      output.push(this.feeDescription('DBS check fee', 'dbs-costs'));
    }
    if (otherCosts) {
      output.push(this.feeDescription('Other fee', 'other-costs'));
    }

    if (output.length > 0) {
      return output.join(".<br>");
    } else {
      return 'No';
    }
  }

  feeDescription(name, key) {
    let pounds = this.getItem(`${key}:cost-pounds`);
    let covering = this.getItem(`${key}:fee-covers`);
    let daily = this.getItem(`${key}:payment-daily`);
    let oneOff = this.getItem(`${key}:payment-one-off`);
    let method = this.getItem(`${key}:payment-method`);

    let frequency = daily ? 'daily' : 'one off';

    return `£${pounds} ${frequency} ${name} ${covering}`;
  }

  get dbsCheckRequired() {
    let always = this.getItem('candidate-requirements:DBS-required-Always');
    let sometimes = this.getItem('candidate-requirements:DBS-required-Sometimes');
    let never = this.getItem('candidate-requirements:DBS-required-Never');
    let policy = this.getItem('candidate-requirements:DBS-policy');
    if (always) { return 'Yes - Always.'; }
    if (never) { return 'No - Never.'; }
    return `Yes - Sometimes. ${policy}`;
  }

  get individualRequirements() {
    let no = this.getItem('candidate-requirements:candidate-requirements-No');
    let yes = this.getItem('candidate-requirements:candidate-requirements-Yes');
    let details = this.getItem('candidate-requirements:candidate-requirements-details');
    if (yes) {
      return details;
    } else {
      return 'No';
    }
  }

  get experiencePhases() {
    let primary = this.getItem('phases:primary');
    let seconday = this.getItem('phases:secondary');
    let college = this.getItem('phases:sixteen_to_eighteen');
    let both = this.getItem('phases:both-primary-and-secondary');
    let phases = [];
    if (primary) { phases.push('Primary'); }
    if (seconday) { phases.push('Seconday'); }
    if (college) { phases.push('16 to 18'); }
    if (both) { phases.push('Both primary and secondary'); }
    return phases.join(", ")
  }

  get secondarySubjects() {
    let isSubject = /school-onboarding:secondary-subjects:.*$/;
    let replace = /school-onboarding:secondary-subjects:/;
    let seperator = /-/g;
    let otherSubjects = this.getItem('secondary-subjects:Enter-subjects');
    let subjects = Object.keys(this.storage)
      .filter(key => isSubject.test(key))
      .filter(key => JSON.parse(this.storage.getItem(key)))
      .map(key => key.replace(replace, ''))
      .map(key => key.replace(seperator, ' '))
      .filter(key => key != 'Other')
      .filter(key => key != 'Enter subjects')

    subjects.push(otherSubjects)

    return subjects.join(', ');
  }

  get specialisms() {
    let yes = this.getItem('specialisms:yes');
    let no = this.getItem('specialisms:no');
    let details = this.getItem('specialisms:more-detail');

    if (yes) {
      return details;
    } else {
      return 'No';
    }
  }

  get experienceOffered() {
    return this.getItem('candidate-experience:experience-offered');
  }

  get teacherTrainingLinks() {
    let yes = this.getItem('candidate-experience:offers-placement-Yes');
    let no = this.getItem('candidate-experience:offers-placement-No');
    let details = this.getItem('candidate-experience:offers-placement-details');
    let url = this.getItem('candidate-experience:offers-placement-url');

    if (yes) {
      return `${details} <a href="${url}">${url}</a>`;
    } else {
      return 'No';
    }
  }

  get dressCode() {
    let seperator = /-/g;
    let dressCodeDetails = this.getItem('candidate-details:dress-code-other-details');
    let rules = ['smart-casual', 'remove-piercings', 'cover-up-tattoos']
      .filter((rule) => this.getItem(`candidate-details:${rule}`))
      .map((rule) => rule.replace(seperator, ' '))

    rules.push(dressCodeDetails);

    return rules.join(', ')
  }

  get parking() {
    let yes = this.getItem('candidate-details:parking-Yes');
    let no = this.getItem('candidate-details:parking-No');
    let onSiteDetails = this.getItem('candidate-details:parking-details');
    let offSiteDetails = this.getItem('candidate-details:parking-near-by-details');

    if (yes) {
      return 'Yes - ' + onSiteDetails;
    } else {
      return 'No - ' + offSiteDetails;
    }
  }

  get disabilityNeeds() {
    let yes = this.getItem('candidate-details:disabled-access-Yes');
    let no = this.getItem('candidate-details:disabled-access-No');
    let details = this.getItem('candidate-details:disabled-access-details');

    if (yes) {
      return 'Yes - ' + details
    } else {
      return 'No'
    }
  }

  get startTime() {
    return this.getItem('candidate-details:start-time');
  }

  get finishTime() {
    return this.getItem('candidate-details:finish-time');
  }

  get flexibleTimes() {
    let yes = this.getItem('candidate-details:time-flexible-Yes');
    let no = this.getItem('candidate-details:time-flexible-No');

    if (yes) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  get placementAvailability() {
    return this.getItem('candidate-experience:experience-offered');
  }

  get adminFullName() {
    return this.getItem('admin-contact:full-name');
  }

  get adminPhone() {
    return this.getItem('admin-contact:phone');
  }

  get adminEmail() {
    return this.getItem('admin-contact:email');
  }
}

$('*[data-school-details]').each((index, element) => {
  if (window.sessionStorage['local-storage'] != 'ON') { return; }

  let details = new SchoolDetails(window.localStorage);
  let key = $(element).data('school-details');
  let value = details[key];
  $(element).html(value);
});
