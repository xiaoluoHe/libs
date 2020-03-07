export default class Sort {
  constructor() {}
  /**
   * recursive quick sort
   *
   * @static
   * @memberof Sort
   */
  static quickSort(arr: Array<number> = []): Array<number> {
    let result = [...arr];
    const start = 0;
    const end = result.length - 1;
    recursiveSort(result, start, end);

    // start , key - 1 | key | key + 1, end
    function recursiveSort(
      originArr: Array<number>,
      start: number,
      end: number
    ) {
      if (start < end) {
        let key = findkey(originArr, start, end);
        recursiveSort(originArr, start, key - 1);
        recursiveSort(originArr, key + 1, end);
      }
    }

    function findkey(
      partitialArr: Array<number>,
      start: number,
      end: number
    ): number {
      const pivot = partitialArr[start];
      while (start < end) {
        while (partitialArr[end] >= pivot && start < end) end--;
        if (partitialArr[end] < pivot) {
          partitialArr[start] = partitialArr[end];
          partitialArr[end] = pivot;
          start++;
        }
        while (partitialArr[start] <= pivot && start < end) start++;
        if (partitialArr[start] > pivot) {
          partitialArr[end] = partitialArr[start];
          partitialArr[start] = pivot;
          end--;
        }
      }
      return start;
    }

    return result;
  }
}
