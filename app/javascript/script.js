export function script() {
	document.addEventListener("turbo:load", function () {
		//ima be real girlypop no idea what this is needed for but it gets broken more than my relationship with my parents when i came out as trans if i don't have this
		function $(id) {
			return document.getElementById(id);
		}

		var button = $("send");
		var text = $("text");
		var chat = $("chat-window");
		var logout = $("logout");
		var signup = $("signup");
		var conversationID;
		var username = document.body.dataset.username || "Anonymous";
		document.querySelector(".fa-bars").addEventListener("click", function () {
			document.getElementById("side-bar").classList.toggle("active");
			console.log("worked silly girl");
		});
		if (button) {
			button.onclick = function () {
				var inputText = text.value;

				if (inputText != "") {
					console.log(inputText);

					// Create a holder div
					var holderDiv = document.createElement("div");
					holderDiv.classList.add("message");

					// Create the username node then append it to the holder fingy
					var usernameNode = document.createElement("span");
					usernameNode.classList.add("username");
					usernameNode.textContent = username;
					holderDiv.appendChild(usernameNode);

					// Create the bubble thingy then appends shit i fink
					var newBubble = document.createElement("span");
					newBubble.classList.add("bubble");
					newBubble.innerHTML = inputText;
					holderDiv.appendChild(newBubble);

					// If this is the first message, add a top margin to the holder because spacing is more annoying than transphobes (just kidding but is kinda close)
					if (chat.childElementCount === 0) {
						holderDiv.style.marginTop = "10px"; // Adjust later girlypop cause that isn't it
					}

					// Append the holder to the chat and clear the input, basically just making the message <3
					chat.appendChild(holderDiv);
					text.value = "";
				}
			};
		} else {
			console.log("Button not found"); //in case things get messed up more than i did as a person lmao
		}
		if (username != "Anonymous") {
			logout.style.display = "block";
		}
		else {
			signup.style.display = "block"
		}
	});
}
