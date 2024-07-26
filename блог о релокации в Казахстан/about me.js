// Get the email link element
const emailLink = document.querySelector('a[href^="mailto:"]');

// Add a click event listener to the email link
emailLink.addEventListener('click', (event) => {
  // Prevent the default behavior of opening the link in the browser
  event.preventDefault();

  // Get the email address from the href attribute of the link
  const emailAddress = emailLink.getAttribute('href').replace('mailto:', '');

  // Create a new email message with the email address as the recipient
  const message = `mailto:${emailAddress}?subject=Message from your website&body=Hi Arseniy,`;

  // Open the user's default email client with the new email message
  window.location.href = message;
});
