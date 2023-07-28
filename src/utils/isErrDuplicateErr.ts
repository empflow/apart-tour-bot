export default function isErrDuplicateErr(err: any) {
  if (err.code === 11000) return true;
  return false;
}
