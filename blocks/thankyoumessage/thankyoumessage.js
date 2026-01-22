// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * Loads and decorates the thank you message block
 * @param {Element} block The thank you message block element
 */
export default async function decorate(block) {
  // Add container class
  block.classList.add('thankyoumessage-container');

  // Get all rows - DA creates a table structure with rows
  const rows = block.querySelectorAll(':scope > div');

  // Row 1: Icon/Image (optional)
  if (rows[0]) {
    rows[0].classList.add('thankyoumessage-icon');
    const img = rows[0].querySelector('img');
    if (img) {
      img.setAttribute('alt', 'Success icon');
    }
  }

  // Row 2: Heading
  if (rows[1]) {
    rows[1].classList.add('thankyoumessage-heading');
  }

  // Row 3: Message
  if (rows[2]) {
    rows[2].classList.add('thankyoumessage-message');
  }

  // Row 4: Action Button/Link
  if (rows[3]) {
    rows[3].classList.add('thankyoumessage-action');
    // Style any links as buttons
    const links = rows[3].querySelectorAll('a');
    links.forEach((link) => {
      link.classList.add('button', 'primary');
    });
  }

  // Row 5: Additional Info (optional)
  if (rows[4]) {
    rows[4].classList.add('thankyoumessage-info');
  }
}
// AI Generated Code by Deloitte + Cursor (END)
