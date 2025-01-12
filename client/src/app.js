const guestbook = document.querySelector("#guestbook");


function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(guestbook);
  const formValues = Object.fromEntries(formData);


  
  fetch("http://localhost:8080/new-data", {
   
    method: "POST",
   
    headers: {
      "Content-Type": "application/json",
    },
 
    body: JSON.stringify({formValues}),

  });
  console.log(formValues);
  setTimeout(guestbook.onsubmit = function(){
    alert("Message submitted!")
    location.reload(true);
}
, 3000)

}
guestbook.addEventListener("submit", handleSubmitMessageForm);


const Messageshop = document.getElementById("message");
let MessageBox = [];

async function messages() {
const response = await fetch(
    "http://localhost:8080/guestbook"
  );
  const data = await response.json();
  MessageBox.push(data);
  console.log(MessageBox);
  async function MessagesDetail() {
   for (let i = 0; i < MessageBox[0].length; i++) {
      console.log(i);

      const MessageContainer = document.createElement("div");
      MessageContainer.className = "message-container";
      Messageshop.appendChild(MessageContainer);

      const MessageUserName = document.createElement("h4");
      MessageUserName.textContent = `${MessageBox[0][i].guest_name } :`;
      MessageUserName.className = "guestname";
      MessageContainer.appendChild(MessageUserName);

      
      const MessageText = document.createElement("p");
      MessageText.textContent = `"${MessageBox[0][i].guest_comment}"`;
      MessageText.className = "message-text";
      MessageContainer.appendChild(MessageText);

      
}
  }
  MessagesDetail();
}

messages();
