// https://stackoverflow.com/a/51438474
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type PickAndFlatten<T, K extends keyof T> = UnionToIntersection<T[K]>;
