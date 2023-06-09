/**
 * @template T
 * @param {Array<Array<T>>} array
 * @returns {Array<T>}
 */
// TODO: Remove this when we drop support for Node.js v10
// eslint-disable-next-line unicorn/prefer-spread
const flat = (array) => [].concat(...array);

const urls = [
  "http://www.example.com:80/_a",
  "http://www.example.com:80/_a_",
  "http://www.example.com:80/_a__",
  "http://www.example.com:80/_a_b",
  "http://www.example.com:80/_a_/",
  "http://www.example.com:80/_a_/_",
  "http://www.example.com:80/*a",
  "http://www.example.com:80/*a*",
  "http://www.example.com:80/*a**",
  "http://www.example.com:80/*a*b",
  "http://www.example.com:80/*a*/",
  "http://www.example.com:80/*a*/*",
  "http://www.example.com:80/_a*",
  "http://www.example.com:80/_a_*",
  "http://www.example.com:80/_a*b",
  "http://www.example.com:80/_a*/",
  "http://www.example.com:80/_a_/*",
];

const wrappers = [
  (url) => url,

  (url) => `_${url}_`,
  (url) => `*${url}*`,
  (url) => `_${url}*`,
  (url) => `*${url}_`,
  // (url) => `__${url}__`,
  // (url) => `**${url}**`,
  // (url) => `*_${url}_*`,
  // (url) => `_*${url}*_`,
  // (url) => `*_${url}*_`,
  // (url) => `_*${url}_*`,

  (url) => `_ ${url}_`,
  (url) => `* ${url}*`,
  (url) => `_ ${url}*`,
  (url) => `* ${url}_`,
  // (url) => `__ ${url}__`,
  // (url) => `** ${url}**`,
  // (url) => `*_ ${url}_*`,
  // (url) => `_* ${url}*_`,
  // (url) => `*_ ${url}*_`,
  // (url) => `_* ${url}_*`,

  (url) => `_${url} _`,
  (url) => `*${url} *`,
  (url) => `_${url} *`,
  (url) => `*${url} _`,
  // (url) => `__${url} __`,
  // (url) => `**${url} **`,
  // (url) => `*_${url} _*`,
  // (url) => `_*${url} *_`,
  // (url) => `*_${url} *_`,
  // (url) => `_*${url} _*`,

  (url) => `_ ${url} _`,
  (url) => `* ${url} *`,
  (url) => `_ ${url} *`,
  (url) => `* ${url} _`,
  // (url) => `__ ${url} __`,
  // (url) => `** ${url} **`,
  // (url) => `*_ ${url} _*`,
  // (url) => `_* ${url} *_`,
  // (url) => `*_ ${url} *_`,
  // (url) => `_* ${url} _*`,
];

const cases = flat(urls.map((url) => wrappers.map((fn) => fn(url))));

run_spec(
  {
    dirname: __dirname,
    snippets: cases.map((code) => ({ code, name: code })),
  },
  ["markdown"]
);
