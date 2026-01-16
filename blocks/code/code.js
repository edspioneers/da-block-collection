// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the code block
 * @param {Element} block The code block element
 */
export default async function decorate(block) {
  // Add container class
  block.classList.add('code-container');

  // Add copy button to the first row
  const firstRow = block.querySelector(':scope > div:first-child');
  if (firstRow) {
    const copyButton = document.createElement('button');
    copyButton.classList.add('code-copy-button');
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');

    const codeRow = block.querySelector(':scope > div:nth-child(2)');
    const codeContent = codeRow ? codeRow.textContent.trim() : '';

    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeContent);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to copy code:', err);
      }
    });

    firstRow.appendChild(copyButton);
  }

  // Add language class if specified
  const languageRow = block.querySelector(':scope > div:first-child > div');
  if (languageRow) {
    const language = languageRow.textContent.trim().toLowerCase();
    if (language) {
      block.classList.add(`language-${language}`);
    }
  }
}
// AI Generated Code by Deloitte + Cursor (END)
