// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the ASO (App Store Optimization) block
 * @param {Element} block The ASO block element
 */
export default async function decorate(block) {
  // Add container class
  block.classList.add('aso-container');

  // Add classes to each row for styling
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    row.classList.add('aso-item');

    const cells = row.querySelectorAll(':scope > div');
    if (cells[0]) {
      cells[0].classList.add('aso-label');
    }
    if (cells[1]) {
      cells[1].classList.add('aso-value');
    }
  });
}
// AI Generated Code by Deloitte + Cursor (END)
