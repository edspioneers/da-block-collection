// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the code block
 * @param {Element} block The code block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Expected structure:
  // Row 1: Language (optional)
  // Row 2: Code content

  block.classList.add('code-container');

  let language = '';
  let codeContent = '';

  if (rows.length === 1) {
    // Single row - just code
    codeContent = rows[0].textContent;
  } else if (rows.length >= 2) {
    // Multiple rows - first is language, rest is code
    language = rows[0].textContent.trim().toLowerCase();
    codeContent = rows.slice(1).map((row) => row.textContent).join('\n');
  }

  // Clear the block
  block.textContent = '';

  // Create code wrapper
  const codeWrapper = document.createElement('div');
  codeWrapper.classList.add('code-wrapper');

  // Add language label if present
  if (language) {
    const langLabel = document.createElement('div');
    langLabel.classList.add('code-language');
    langLabel.textContent = language;
    codeWrapper.appendChild(langLabel);
  }

  // Create pre and code elements
  const pre = document.createElement('pre');
  const code = document.createElement('code');

  if (language) {
    code.classList.add(`language-${language}`);
  }

  code.textContent = codeContent.trim();
  pre.appendChild(code);
  codeWrapper.appendChild(pre);

  // Add copy button
  const copyButton = document.createElement('button');
  copyButton.classList.add('code-copy-button');
  copyButton.textContent = 'Copy';
  copyButton.setAttribute('aria-label', 'Copy code to clipboard');

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeContent.trim());
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy code:', err);
    }
  });

  codeWrapper.appendChild(copyButton);
  block.appendChild(codeWrapper);
}
// AI Generated Code by Deloitte + Cursor (END)
