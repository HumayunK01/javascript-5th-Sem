// Humayun Khan
// 2005690093
// CO5IA

A = ["a", "b", "c", "d"];
B = [];
console.log("Original Array is " + A);
l = A.length;
for (i in A) {
  B[l - i - 1] = A[i];
}
console.log(B);