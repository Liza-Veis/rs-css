function collectMarkup(tags) {
  let markup = '';

  tags.forEach((elem) => {
    const tag = `&lt;${elem.replace('>', '&gt;')}`;

    if (tag.endsWith('/&gt;')) {
      markup += `<div>${tag}</div>`;
    } else if (tag.startsWith('&lt;/')) {
      markup += `${tag}</div>`;
    } else {
      markup += `<div>${tag}`;
    }
  });

  return `&lt;div class="shelf"&gt;${markup}&lt;/div&gt;`;
}

function addSyntaxHighlight(markup) {
  const arr = markup.split(' ');

  arr.forEach((chunk, idx) => {
    if (chunk[0] === '<' || chunk[0] === '/' || chunk.startsWith('&lt;')) {
      return;
    }

    let res = chunk;
    const valueStartIdx = chunk.indexOf('"');
    const valueEndIdx = chunk.indexOf('"', valueStartIdx + 1) + 1;

    if (valueStartIdx !== -1 && valueEndIdx !== -1) {
      const value = `<span class="value">${chunk.slice(valueStartIdx, valueEndIdx)}</span>`;
      res = `${res.slice(0, valueStartIdx)}${value}`;
    }
    arr[idx] = `<span class="attribute">${res}</span>${chunk.slice(valueEndIdx)}`;
  });

  return arr.join(' ');
}

function getMarkup(srcMarkup) {
  const tags = srcMarkup
    .replace(/[\t\n]/g, '')
    .split('<')
    .slice(1)
    .map((elem) => elem.trim());

  for (let i = 0; i < tags.length; i += 1) {
    const tag = tags[i];
    if (tag === 'div>' && tags[i + 1] === '/div>') {
      tags.splice(i, 2);
      i -= 2;
    } else if (tags[i + 1] && tag.startsWith(tags[i + 1].slice(1, -1))) {
      tags.splice(i, 2, tag.replace('>', ' />'));
      i -= 1;
    }
  }

  const markup = collectMarkup(tags);
  return addSyntaxHighlight(markup);
}

export { getMarkup };
