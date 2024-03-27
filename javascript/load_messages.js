document.addEventListener("DOMContentLoaded", function () {
	// Select all conversation elements
	var conversations = document.querySelectorAll('[id^="conversation-"]');

	// Iterate over each conversation
	conversations.forEach(function (conversation) {
		// Extract the conversation ID from the element's ID
		var conversationId = conversation.id.split("-")[1];

		// Assign a click event listener to the conversation
		conversation.addEventListener("click", function () {
			// Call the loadMessages function with the conversationId
			loadMessages(conversationId);
		});
	});
});

export function loadMessages(conversationId) {
	console.log("loadMessages called with conversationId: " + conversationId);
	function fetchMessages() {
		console.log("fetchMessages called");
		$.ajax({
			url: "/conversations/" + conversationId + "/messages",
			method: "GET",
			dataType: "json",
			success: function (messages) {
				console.log("AJAX request successful");
messages.forEach((message) => {
	console.log(message.content);
});
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log("AJAX request failed: " + textStatus);
				console.log("Error thrown: " + errorThrown);
			},
		});
	}
	fetchMessages();
}
