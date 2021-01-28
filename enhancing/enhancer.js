module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement++ };
  }
}

function fail(item) {
  if (item.enhancement > 16) {
    return { ...item, enhancement: item.enhancement-- };
  } else if (item.enhancement >= 15) {
    if (item.durability >= 10) {
      return { ...item, durability: item.durability = item.durability - 10 };
    } else {
      return { ...item, durability: 0 };
    }
  } else {
    if (item.durability >= 5) {
      return { ...item, durability: item.durability = item.durability - 5 };
    } else {
      return { ...item, durability: 0 };
    }
  }
}

function repair(item) {
  return { ...item, durability: item.durability = 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else {
    return {
      ...item, name: item.name = `+[${item.enhancement}] ${item.name}`
    };
  }
}
