// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the buttons block
 * @param {Element} block The buttons block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Expected structure:
  // Rows with button text and optional link

  block.classList.add('buttons-container');

  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length > 0) {
      const buttonCell = cells[0];

      // Find or create link
      const link = buttonCell.querySelector('a');

      if (!link) {
        // Create a button element if no link exists
        const button = document.createElement('button');
        button.textContent = buttonCell.textContent.trim();
        button.classList.add('button');
        buttonCell.textContent = '';
        buttonCell.appendChild(button);
      } else {
        // Style existing link as button
        link.classList.add('button');
      }
    }
  });
}
// AI Generated Code by Deloitte + Cursor (END)
