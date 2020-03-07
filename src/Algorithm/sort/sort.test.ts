import Sort from "./sort";

function innerSort(arr: Array<number>): Array<number> {
  return arr.sort((a, b) => a - b);
}

const arr1 = [8, 7, 4, 5, 1, 9, 8, 3, 7, 5, 8, 1, 2, 3, 7, 4, 5];
test("test quickSort case 1", () => {
  expect(Sort.quickSort(arr1)).toStrictEqual(innerSort(arr1));
});

const arr2: Array<number> = [];
test("test quickSort case 2", () => {
  expect(Sort.quickSort(arr2)).toStrictEqual(innerSort(arr2));
});

test("test quickSort case 2", () => {
  expect(Sort.quickSort()).toStrictEqual([]);
});
