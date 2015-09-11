possibleResponses = {
  webinar: {
    title: "Webinar Bonus",
    body: "Fuck yo webinar"
  },
  dripContent: {
      title: "Drip Content",
      body: "Nevahhh"
    }
};

getResponsesForMessage = function(message) {
  responses = [{title: "Options 1", body: "foo 1"},
    {title: "Options 2", body: "bar 2"},
    {title: "Options 3", body: "baz 3"}]

  // if it's in bonus box add webinar prompt
  if(_.any(message.recipients, {inbox_alias: "bonus"})) {
    responses.push(possibleResponses.webinar);
  }
  if(message.body.indexOf("drip") != -1) {
    responses.push(possibleResponses.webinar);
  }
  return responses
}
