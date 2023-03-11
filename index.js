const { Amplify,graphqlOperation, API } = require("aws-amplify");
module.exports.handler = async (event) => {
  Amplify.configure({
    aws_cognito_identity_pool_id:
      "ap-south-1:f65f4e7e-47ee-4c90-8704-2e5202e565d9",
    aws_project_region: "ap-south-1",
    aws_appsync_graphqlEndpoint:
      "https://gxijmzd455fgzchagclxtvqxlq.appsync-api.ap-south-1.amazonaws.com/graphql",
    aws_appsync_authenticationType: "AWS_IAM",
    aws_appsync_region: "ap-south-1",
    Auth: {
      region: "ap-south-1",
    },
  });
  const query = `query MyQuery {
    getInfoMeeting(marketCode: "ww") {
      City
      Comment
      Country
      Day
      Endtime
      EFMarketCode
      InfoMeetingId
      LongDescription
      MeetingDate
      MeetingPlace
      MeetingType
      MeetingTypeCode
      Month
      Monthnum
      ProgramCode
      SalesOfficeCode
      ShortDescription
      Speakers {
        SpeakerDescription
        SpeakerImageURL
        SpeakerName
        SpeakerTitle
      }
      Starttime
      ZipCode
      Year
      Weekday
      Topic
      Street
      StatusCode
      State
    }
  }`;
  try {
    console.log("entered request");
    let response = await API.graphql(graphqlOperation(query));
    console.log("getInfoMeeting ", JSON.stringify(response));
  } catch (e) {
    console.error("GET ERROR: ", e);
  }
};
