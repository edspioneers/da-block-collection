// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the form thank you block
 * @param {Element} block The form thank you block element
 */
export default async function decorate(block) {
  // Add container class
  block.classList.add('form-thank-you-container');

  // Add classes to rows for styling
  const rows = block.querySelectorAll(':scope > div');

  if (rows[0]) {
    rows[0].classList.add('form-thank-you-heading');
  }

  if (rows[1]) {
    rows[1].classList.add('form-thank-you-message');
  }

  if (rows[2]) {
    rows[2].classList.add('form-thank-you-action');
  }
}
// AI Generated Code by Deloitte + Cursor (END)
