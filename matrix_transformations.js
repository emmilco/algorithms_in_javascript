// dot product

const dotProduct = (n, m) => {
  let result = 0;
  for (var i = 0; i < n.length; i++) {
    result += n[i] * m[i];
  }
  return result;
};

// matrix transposition

const transpose = (A) => {
  const B = [...Array(A[0].length).keys()].map(i => Array(A.length));
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      B[j][i] = A[i][j];
    }
  }
  return B;
};

// matrix reflection on horizontal axis

const horizontalReflect = (A) => {
  const B = [];
  A.forEach((row) => {
    B.unshift(row);
  });
  return B;
};

// matrix clockwise rotation

const rotateClockwise = (A) => {
  return transpose(horizontalReflect(A));
};

// matrix anticlockwise rotation

const rotateAntiClockwise = (A) => {
  return horizontalReflect(transpose(A));
};

// matrix reflection on vertical axis

const verticalReflect = (A) => {
  return transpose((rotateAntiClockwise(A)));
};

// matrix multiplication (naive iterative algorithm)

const multiply = (A, B) => {
  const C = [...Array(A.length).keys()].map(i => Array(B[0].length));
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B[0].length; j++) {
      C[i][j] = dotProduct(A[i], transpose(B)[j]);
    }
  }
  return C;
};
