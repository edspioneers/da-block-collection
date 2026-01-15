import { getMetadata, readBlockConfig } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // AI Generated Code by Deloitte + Cursor (BEGIN)
  const config = readBlockConfig(block);
  const fragmentOverride = config.fragment || config.path || '';
  // AI Generated Code by Deloitte + Cursor (END)
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  // AI Generated Code by Deloitte + Cursor (BEGIN)
  const footerPath = fragmentOverride
    ? new URL(fragmentOverride, window.location).pathname
    : (footerMeta ? new URL(footerMeta, window.location).pathname : '/footer');
  // AI Generated Code by Deloitte + Cursor (END)
  const fragment = await loadFragment(footerPath);
  // AI Generated Code by Deloitte + Cursor (BEGIN)
  if (!fragment) {
    // eslint-disable-next-line no-console
    console.warn(`Footer fragment not found at ${footerPath}`);
    return;
  }
  // AI Generated Code by Deloitte + Cursor (END)

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
