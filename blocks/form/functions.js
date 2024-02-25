/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
 function getFullName(firstname, lastname) {
  // eslint-disable-next-line no-param-reassign
  firstname = (firstname == null) ? '' : firstname;
  // eslint-disable-next-line no-param-reassign
  lastname = (lastname == null) ? '' : lastname;
  return firstname.concat(' ').concat(lastname);
}

/**
 * @name formatCreditCardNumber Formats Credit Card Number
 * @param {object} field field whoes value to be formatted
 * @return {string}
 * @formatter
 */
 function formatCreditCardNumber(field)
 {
    var cardNumber = field.$value ? field.$value : field.$value + '';
    var formattedNumber = cardNumber;
    if(cardNumber) {
      var maskedNumber = cardNumber.replace(/\d(?=\d{4})/g, '*');  // Replace digits with masked characters except for the last four
      var formattedNumber = maskedNumber.replace(/(.{4})/g, '$1 '); // Add spaces after every 4 letters
    }
    return formattedNumber;
 }

// eslint-disable-next-line import/prefer-default-export
export { getFullName, formatCreditCardNumber };