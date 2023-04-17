let c = [42, 54, 4, 2, 42, 42, 4, 56, 42];
let d = [];
while (c.includes(42)) {
  d.push(c.splice(c.lastIndexOf(42), 1)[0]);
}
console.log(d);
module.exports = {
  c,
  d,
};
