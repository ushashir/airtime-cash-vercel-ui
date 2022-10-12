function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
export default sum;

test("test sum of two numbers", () => {
  expect(sum(4, 5)).toEqual(9);
});

test("test substration of two numbers", () => {
  expect(subtract(10, 5)).toEqual(5);
});

