export default function bsolve(f: Function, a: number, b: number) {
  const c = (a+b)/2;
  if (Math.abs(a-b) < 0.00001)
    return c;
  if (f(c)*f(a)>=0)
    return bsolve(f, c, b);
  else
    return bsolve(f, a, c);
}