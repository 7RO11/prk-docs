export default function dashify(string) {
  // returns a url friendly string from a user friendly string
  if (string === undefined) {
    return undefined;
  }
  let lowerString = string.toLowerCase();
  let dashedString = lowerString.replace(/\s/g, "-");
  let noParensString = dashedString.replace(/[()]/g, "");
  return noParensString;
}
