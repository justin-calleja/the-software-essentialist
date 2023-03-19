const isPalindrome = (str: string) => {
  if (str.length === 0) return false;

  for (let iHead = 0, iTail = str.length - 1; iTail > iHead; iHead++, iTail--) {
    if (str[iHead] !== str[iTail]) return false;
  }

  return true;
};

export default isPalindrome;
