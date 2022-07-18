//       18/7/2022

/* Given a string that has a valid email address, write a function to hide the first part of the email 
(before the @ sign), minus the first and last character. For extra credit, add a flag to hide 
the second part after the @ sign to your function excluding the first character and the domain extension.*/

const hideEmail = function (emailAddress, hideFull = false) {
  const split = emailAddress.split("@");
  const userName = split[0];
  const domain = split[1].split(".");
  const [mailServer, ...restDomain] = domain;

  return hideFull
    ? userName.slice(0, 1) +
        userName.slice(-1).padStart(userName.length - 1, "*") +
        "@" +
        mailServer.slice(0, 1).padEnd(domain[0].length, "*") +
        restDomain.join(".")
    : userName.slice(0, 1) +
        userName.slice(-1).padStart(userName.length - 1, "*") +
        "@" +
        split[1];
};

console.log(hideEmail("example@example.com")); //e*****e@example.com

console.log(hideEmail("example+test@example.co.uk", true)); //e**********t@e******co.uk
