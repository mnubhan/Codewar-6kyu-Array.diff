function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
