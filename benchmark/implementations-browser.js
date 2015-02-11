function startsWithIndexOf(a, b) {
  a = String(a);
  b = String(b);
  return a.indexOf(b) === 0;
}

function startsWithLastIndexOf(a, b) {
  a = String(a);
  b = String(b);
  var i = a.lastIndexOf(b)
  return i === 0;
}

function startsWithReExec(a, b) {
  a = String(a);
  b = String(b);
  var re = new RegExp('^' + b);
  return !!re.exec(a);
}

function startsWithReTest(a, b) {
  a = String(a);
  b = String(b);
  var re = new RegExp('^' + b);
  return !!re.test(a);
}

function startsWithReSearch(a, b) {
  a = String(a);
  b = String(b);
  var re = new RegExp('^' + b);
  return a.search(re) !== -1;
}

function startsWithSlice(a, b) {
  a = String(a);
  b = String(b);
  return a.slice(0, b.length) === b;
}

function startsWithNative(a, b) {
  a = String(a);
  b = String(b);
  return a.startsWith(b);
}

function startsWithSubStr(a, b) {
  a = String(a);
  b = String(b);
  return a.substr(0, b.length) === b;
}

function startsWithSubString(a, b) {
  a = String(a);
  b = String(b);
  return a.substring(0, b.length) === b;
}

function startsWithTricky(a, b) {
  a = String(a);
  b = String(b);
  if (a.charAt(0) !== b.charAt(0)) {
    return false;
  }
  return true;
}

function startsWithWhile(a, b) {
  a = String(a);
  b = String(b);

  var i = b.length;
  while (i--) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
