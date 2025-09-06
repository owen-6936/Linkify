document.addEventListener('DOMContentLoaded', () => {
  const longUrlInput = document.getElementById('longUrlInput');
  const shortenBtn = document.getElementById('shortenBtn');
  const resultContainer = document.getElementById('resultContainer');
  const shortenedLink = document.getElementById('shortenedLink');
  const copyBtn = document.getElementById('copyBtn');
  const errorMessage = document.getElementById('errorMessage');

  // the api endpoint should be changed for production
  const API_ENDPOINT = 'http://localhost:3000/api/shorten';

  shortenBtn.addEventListener('click', async () => {
    const longUrl = longUrlInput.value.trim();

    // Reset previous states
    hideElement(resultContainer);
    hideElement(errorMessage);
    errorMessage.textContent = '';
    longUrlInput.classList.remove('error-border');

    if (!longUrl) {
      showError('Please enter a URL to shorten.');
      longUrlInput.classList.add('error-border');
      return;
    }

    // Basic URL validation
    try {
      new URL(longUrl); // Throws error if not a valid URL
    } catch {
      showError('Please enter a valid URL (e.g., https://example.com).');
      longUrlInput.classList.add('error-border');
      return;
    }

    shortenBtn.disabled = true;
    shortenBtn.textContent = 'Shortening...';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        shortenedLink.href = data.shortUrl;
        shortenedLink.textContent = data.shortUrl;
        showElement(resultContainer);
        longUrlInput.value = '';
      } else {
        showError(
          data.message || 'An error occurred while shortening the URL.'
        );
      }
    } catch {
      showError('Could not connect to the server. Please try again later.');
    } finally {
      shortenBtn.disabled = false;
      shortenBtn.textContent = 'Shorten It!';
    }
  });

  copyBtn.addEventListener('click', () => {
    const textToCopy = shortenedLink.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 1500); // Revert text after 1.5 seconds
      })
      .catch(() => {
        showError('Failed to copy. Please copy manually.');
      });
  });

  function showElement(element) {
    element.classList.remove('hidden');
  }

  function hideElement(element) {
    element.classList.add('hidden');
  }

  function showError(message) {
    errorMessage.textContent = message;
    showElement(errorMessage);
  }
});
