// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the form thank you block
 * @param {Element} block The form thank you block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Expected structure:
  // Row 1: Heading
  // Row 2: Message (richtext)
  // Row 3: Optional button/link

  block.classList.add('form-thank-you-container');

  rows.forEach((row, index) => {
    const cells = [...row.children];
    row.remove();

    if (index === 0 && cells.length > 0) {
      // Heading row
      const heading = cells[0];
      heading.classList.add('form-thank-you-heading');
      // Wrap text in h1 if not already a heading
      if (!heading.querySelector('h1, h2, h3, h4, h5, h6')) {
        const h1 = document.createElement('h1');
        h1.textContent = heading.textContent.trim();
        heading.textContent = '';
        heading.appendChild(h1);
      }
      block.appendChild(heading);
    } else if (index === 1 && cells.length > 0) {
      // Message row
      const message = cells[0];
      message.classList.add('form-thank-you-message');
      block.appendChild(message);
    } else if (index === 2 && cells.length > 0) {
      // Action button row
      const action = cells[0];
      action.classList.add('form-thank-you-action');
      block.appendChild(action);
    }
  });
}
// AI Generated Code by Deloitte + Cursor (END)
