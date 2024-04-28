export function randomInt(minInclusive: number, maxExclusive: number): number {
  return Math.floor(Math.random() * (maxExclusive - minInclusive));
}

export function randomElement<T>(arr: ArrayLike<T>): T {
  return arr[randomInt(0, arr.length)];
}
