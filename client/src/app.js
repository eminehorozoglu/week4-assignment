const guestbook = document.querySelector("#guestbook");

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(guestbook);
  const formValues = Object.fromEntries(formData);


  fetch("http://localhost:8080/messages", {
   
    method: "POST",
   
    headers: {
      "Content-Type": "application/json",
    },
 
    body: JSON.stringify({ formValues }),

  });
  console.log(formValues);

}
guestbook.addEventListener("submit", handleSubmitMessageForm);


