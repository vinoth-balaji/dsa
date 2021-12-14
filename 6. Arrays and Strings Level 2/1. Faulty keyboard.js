let name = "mannu";
let typed = "mmaannuu";

function faulty(name, typed) {
  if (name.length > typed.length) return false;
  let i = 0,
    j = 0;

  while (i < name.length && j < typed.length) {
    if (name[i] == typed[j]) {
      i++;
      j++;
    } else if (i > 0 && name[i - 1] == typed[j]) {
      j++;
    } else {
      return false;
    }
  }

  while (j < typed.length) {
    if (name[i - 1] == typed[j]) {
      j++;
    } else return false;
  }

  return i < name.length ? false : true;
}

console.log(faulty(name, typed));
