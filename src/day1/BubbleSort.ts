// export default function bubble_sort(arr: number[]): void {
//     // sort in place
//      for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr.length - 1; ++j) {
//             if (arr[j] > arr[j + 1]) {
//                 const tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//      }
// }
export default function bubble_sort(arr: number[]): void {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

