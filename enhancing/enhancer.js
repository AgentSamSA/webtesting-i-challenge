module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else {
    return {
      ...item,
      name: `+[${item.enhancement}] ${item.name}`
    };
  }
}
