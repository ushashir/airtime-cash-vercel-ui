function sum(a, b) {
  return a + b;
}
export default sum;

test("test sum of two numbers", () => {
  expect(sum(4, 5)).toEqual(9);
});
