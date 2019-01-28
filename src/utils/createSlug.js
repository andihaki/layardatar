const createSlug = id => title =>
  `${id}-${title
    .replace(/[^A-Za-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
export default createSlug;
