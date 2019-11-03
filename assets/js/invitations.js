//This functions collects the data from all the fields and returns a mailto string
var getInvitationData = function() {
    let emailTo = $("#emails").val();
    let host = "Invitation from: " + $("#host").val();
    let address = "Where? : " + $("#eventAddress").val();
    let dateTime = "When? : " + $("#eventDate").val();
    let message =$("#message").val();

    let mailto = "mailto:" + emailTo + "?subject=" + encodeMailTo(host) + "&body=" + encodeMailTo(message) + "%0D%0A%0D%0A" + encodeMailTo(address) + "%0D%0A%0D%0A" + encodeMailTo(dateTime);

    return mailto;


}

//This functions encodes the string for mailto
var encodeMailTo = function(str) {
    return encodeURIComponent(str);
}

//This function opens default mail client and populates email

var sendEmail = function(mailto) {
    window.location.href = mailto;
}

$("#submit").click(function () {
    sendEmail(getInvitationData());
})