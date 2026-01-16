// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * loads and decorates the ASO (App Store Optimization) block
 * @param {Element} block The ASO block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Expected structure:
  // Multiple rows with key-value pairs for ASO metadata

  block.classList.add('aso-container');

  const metadata = {};
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase();
      const value = cells[1];
      metadata[key] = value;
    }
  });

  // Clear the block
  block.textContent = '';

  // Build the ASO display
  if (metadata.title) {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('aso-title');
    const h2 = document.createElement('h2');
    h2.textContent = metadata.title.textContent.trim();
    titleDiv.appendChild(h2);
    block.appendChild(titleDiv);
  }

  if (metadata.developer) {
    const devDiv = document.createElement('div');
    devDiv.classList.add('aso-developer');
    const label = document.createElement('span');
    label.classList.add('aso-label');
    label.textContent = 'Developer: ';
    devDiv.appendChild(label);
    devDiv.appendChild(document.createTextNode(metadata.developer.textContent.trim()));
    block.appendChild(devDiv);
  }

  if (metadata.description) {
    const descDiv = document.createElement('div');
    descDiv.classList.add('aso-description');
    const h3 = document.createElement('h3');
    h3.textContent = 'Description';
    descDiv.appendChild(h3);
    const content = document.createElement('div');
    content.classList.add('aso-description-content');
    content.innerHTML = metadata.description.innerHTML;
    descDiv.appendChild(content);
    block.appendChild(descDiv);
  }

  if (metadata.descriptionrules) {
    const rulesDiv = document.createElement('div');
    rulesDiv.classList.add('aso-rules');
    const charCount = metadata.descriptionrules.textContent.trim();
    rulesDiv.innerHTML = `<span class="aso-label">Character Limit:</span> ${charCount} characters`;
    block.appendChild(rulesDiv);
  }
}
// AI Generated Code by Deloitte + Cursor (END)
