// const lodash = require("lodash");

// const {cloneDeep} = lodash
const nestedArr = [
  {
    nestedProps1: {
      nested2: 2,
    },
  },
];
var child = {
  a: 1,
  nestedArr,
};

var obj = {
  x: 23,

  child,

  log: console.log,
};

// with lodash

function cloneDeep(obj, origObj = false) {
  // const newObj = Object.assign({} , obj);
  if (!origObj) {
    origObj = obj;
  }
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    const valueType = typeof value;
    if (value == obj) {
      console.log(123);
      process.exit();
      break;
      continue;
    }

    if (valueType == "object") {
      newObj[key] = cloneDeep(obj[key], origObj);
      continue;
    }
    newObj[key] = obj[key];
  }

  return newObj;
}

const clonnedObj = cloneDeep(obj);

// without lodash

// const clonnedObj = Object.assign({} , obj)

// const clonnedObj = Object.assign({} , obj)

console.log(JSON.stringify({ clonnedObj, child, obj }, null, 2));

child.a = 10;
nestedArr[0].xyz = 1;

console.log("After Changing Child");

console.log(JSON.stringify({ clonnedObj, child, obj }, null, 2));
// console.log({ clonnedObj, child, obj });
