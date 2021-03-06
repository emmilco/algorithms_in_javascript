// selection sort

const selectionSort = (arr) => {
  const result = [];
  let copy = arr.slice();
  while (copy.length > 0) {
    let min = copy[0];
    for (var i = 0; i < copy.length; i++) {
      if (copy[i] < min) min = copy[i];
    }
    result.push(min);
    copy.splice(copy.indexOf(min), 1);
  }
  return result;
};

// insertion sort (in place)

const insertionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) continue;
    for (var j = 0; j < i; j++) {
      if (arr[i - j] >= arr[i - j - 1]) {
        break;
      } else {
        [arr[i - j], arr[i - j - 1]] = [arr[i - j - 1], arr[i - j]];
      }
    }
  }
  return arr;
};

// merge sort

const mergeSort = (arr) => {
  const merged = (left, right) => {
    const result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) { result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };

  if (arr.length <= 1) return arr;
  const mid = Math.trunc(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid, arr.length -1);
  return merged(mergeSort(left), mergeSort(right));
};

// quick sort

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const copy = Object.assign([], arr);
  const pivot = copy.pop();
  const left = copy.fileter((el) => {
    return el <= pivot;
  });
  const right = copy.fileter((el) => {
    return el > pivot;
  });

  return quickSort(left).concat(pivot, quickSort(right));
};


//
