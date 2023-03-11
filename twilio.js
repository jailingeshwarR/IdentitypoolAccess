const accountSid = "ACff12403a97241926020cfee71d705f03";
const authToken = "27f1c312b5ab155afcfb9bc73832b741";
const client = require("twilio")(accountSid, authToken);

client.lookups.v2
  .phoneNumbers("+919360498733")
  .fetch()
  .then((phone_number) => console.log(phone_number.phoneNumber));
