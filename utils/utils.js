/**
 * Hide email address, e.g. yangfan@163.com -> y*****n@163.com
 */
export const hideEmail = email => {
  const [emailName, domainName] = email.split("@");
  let hiddenEmailName = "";
  for (let i = 0; i < emailName.length; i++) {
    if (i === 0 || i === emailName.length - 1) {
      hiddenEmailName += emailName[i];
    } else {
      hiddenEmailName += "*";
    }
  }
  return hiddenEmailName + "@" + domainName;
};
