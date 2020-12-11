const checkForSpam = function (message) {
  const messageLowerCase = message.toLowerCase();
  const isIncludeSpam =
    messageLowerCase.includes('spam') || messageLowerCase.includes('sale');
  return isIncludeSpam;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true