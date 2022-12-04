/**
 * Utilities for URL handling
 */

export const validateUrl = (url: string): string => {
  let validated = url;
  const re = new RegExp('http[s]?:\\/\\/');
  if (url.endsWith('/')) {
    validated = url + '/';
  }
  if (!re.test(url.slice(0, 8))) {
    validated = `http://${url}`;
  }
  return validated;
};

export const filterUrls = (urls: string[], filter: string): string[] => {
  const re = new RegExp(filter);
  const filtered = urls.filter((url) => re.test(url));
  if (filtered.length === 0 || filtered === undefined) {
    throw Error(`No filter matching URLs found!`);
  }
  return filtered;
};

export const groupByPrefix = (strings: string[]): Record<string, unknown> => {
  const groups: Record<string, unknown> = {};
  strings.sort();
  // let s = strings.shift()
  // let s = strings[0]
  // let count = strings.length
  // strings.map()
  // for (let i = 0; i < strings.length; i++) {

  // }
  return groups;
};
