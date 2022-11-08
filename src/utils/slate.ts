import escapeHtml from 'escape-html';
import { Text } from 'slate';

import { CustomElement, CustomText } from '../components/molecules/RichtextEditor';

export const serialize = (node: CustomElement | CustomText) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  const children = node.children.map(n => serialize(n)).join('');

  console.log(node.type);

  switch (node.type) {
    case 'block-quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};
