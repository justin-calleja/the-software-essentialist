const isPalindrome = (str: string) => {
  if (str.length === 0) return false;

  const lowerStr = str.toLowerCase()

  for (let iHead = 0, iTail = lowerStr.length - 1; iTail > iHead; iHead++, iTail--) {
    if (lowerStr[iHead] !== lowerStr[iTail]) return false;
  }

  return true;
};

export default isPalindrome;
