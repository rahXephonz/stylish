// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (value: unknown): value is Function => {
  return typeof value === "function";
};

export default function runIfFn<Result, Args>(valueOrFn: Result | ((...fnArgs: Args[]) => Result), ...args: Args[]) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
