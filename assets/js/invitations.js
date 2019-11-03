//This functions collects the data from all the fields and returns a mailto string
var getInvitationData = function () {
    let emailTo = $("#emails").val().trim();
    let host = "Invitation from: " + $("#host").val().trim();
    let address = "Where? : " + $("#eventAddress").val().trim();
    let dateTime = "When? : " + $("#eventDate").val().trim();
    let message = $("#message").val().trim();

    let mailto = "mailto:" + emailTo + "?subject=" + encodeMailTo(host) + "&body=" + encodeMailTo(message) + "%0D%0A%0D%0A" + encodeMailTo(address) + "%0D%0A%0D%0A" + encodeMailTo(dateTime);

    return mailto;


}

//This functions encodes the string for mailto
var encodeMailTo = function (str) {
    return encodeURIComponent(str);
}

//This function opens default mail client and populates email
var sendEmail = function (mailto) {
    window.location.href = mailto;
}

//This function shows an error message if a required field is empty
var valError = function (elId) {
    if ($(elId).val == "") {
        elId.append($("<p>").text("This is a required field"));
    }
}


$("#submit").click(function (e) {
    e.preventDefault();
    if ($("#emails").val().trim() == "" || $("#host").val().trim() == "" || $("#eventAddress").val().trim() == "" || $("#eventDate").val().trim() == "") {
        $("p").remove();
        $("#invitations").append($("<p>").text("Please fill all required fields."))
    }
    else {
        $("p").remove();
        sendEmail(getInvitationData());
    }
})