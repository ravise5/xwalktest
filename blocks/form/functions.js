/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`?.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * Formats Credit Card Number
 * @name formatCreditCardNumber Formats Credit Card Number
 * @param {object} field field whose value to be formatted
 * @return {string}
 */
function formatCreditCardNumber(field) {
  const cardNumber = field.$value ? `${field.$value}` : field.$value;
  var formattedNumber = cardNumber;
  if (cardNumber) {
    const maskedNumber = cardNumber.replace(/\d(?=\d{4})/g, '*'); // Replace digits with masked characters except for the last four
    var formattedNumber = maskedNumber.replace(/(.{4})/g, '$1 '); // Add spaces after every 4 letters
  }
  return formattedNumber;
}

/**
 * Formats Date input
 * @name formatDateInput Formats Date input
 * @param {object} field field whose value to be formatted
 * @return {string}
 */
function formatDateInput(field) {
  const date = field.$value;
  return date ? `${date} today` : date;
}

/**
 * Formats email input
 * @name formatEmailInput Formats email input
 * @param {object} field field whose value to be formatted
 * @return {string}
 */
function formatEmailInput(field) {
  const email = field.$value;
  let transformedEmail;
  if (email) {
    const parts = email.split('@');
    if (parts[0].length > 1) {
      transformedEmail = `${parts[0][0] + '*'.repeat(parts[0].length - 1)}@${parts[1]}`;
    } else {
      transformedEmail = email;
    }
  }

  return transformedEmail;
}

/**
 * Formats telephone input
 * @name formatTelephoneInput Formats telephone input
 * @param {object} field field whose value to be formatted
 * @return {string}
 */
function formatTelephoneInput(field) {
  const phoneNumber = field.$value;
  if (phoneNumber) {
    const maskedDigits = phoneNumber.substring(0, 7).replace(/\d/g, '*');
    const lastThreeDigits = phoneNumber.substring(7);
    return maskedDigits + lastThreeDigits;
  }
  return phoneNumber;
}

// eslint-disable-next-line import/prefer-default-export,max-len
export {
  getFullName, days, formatCreditCardNumber, formatDateInput, formatEmailInput,
  formatTelephoneInput,
};
