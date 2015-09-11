var frontData;

// add a reply to the message and optionally send it
function addReply(reply, sendReply) {
  console.log("prefilling response with", reply.body);
  Front.reply(reply, sendReply, frontData.conversation);

};

// present possible reply options to the user
// and prefill response with selected option
showReplyOptions = function(items, onSuccess, onFailure) {
  Front.fuzzylist({
    title: 'Title of the confirm dialog',
    items:items
  }, function (item) {
    if (item) { onSuccess(item); }
    else {
      onFailure();
    }
  });
}

logListCancellation = function() {
  console.log('selection canceled');
};

offerCannedResponses = function(message) {
  var possibleResponses = getResponsesForMessage(message);
  showReplyOptions(possibleResponses, addReply, logListCancellation);
};


// whenever a conversation is selected in front, present reply options
// https://frontapp.readme.io/docs/plugins-events to see format of data var
Front.on("conversation", function (data) {
  frontData = data;
  console.log("Data", data);
  console.log("message body", frontData.message.body);
  offerCannedResponses(frontData.message);
});
