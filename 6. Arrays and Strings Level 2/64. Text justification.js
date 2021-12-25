let words = ["This", "is", "an", "example", "of", "text", "justification."],
  maxWidth = 16;

var fullJustify = function (words, maxWidth) {
  let ans = [];
  let avialableWidth = maxWidth;
  let currLine = [];

  for (let i = 0; i < words.length; ) {
    let w = words[i];
    let wLen = w.length + (currLine.length > 0 ? 1 : 0);
    // console.log('i', i, w, wLen);

    avialableWidth -= wLen;
    if (avialableWidth >= 0) {
      currLine.push(w);

      //   console.log(i, w);
      if (i == words.length - 1) {
        let line = formatWords(currLine, avialableWidth, i == words.length - 1);
        ans.push(line);
      }
      i++;
    } else {
      //   console.log(currLine, avialableWidth);
      avialableWidth += wLen;
      let line = formatWords(
        currLine,
        avialableWidth,
        i - 1 == words.length - 1
      );
      ans.push(line);

      avialableWidth = maxWidth;
      currLine = [];
    }
  }

  return ans;
};

formatWords = function (currLine, spaces, isLast) {
  spaces += currLine.length - 1;
  // console.log(currLine, spaces, isLast);
  let formattedLine = "";
  //check if even spaces available

  if (isLast || currLine.length == 1) {
    for (let i = 0; i < currLine.length; i++) {
      if (i == 0) formattedLine += currLine[i];
      else {
        formattedLine += " " + currLine[i];
        spaces--;
      }
    }

    let sp = "";
    for (let i = 0; i < spaces; i++) {
      sp += " ";
    }
    formattedLine += sp;
  } else {
    let s = parseInt(spaces / (currLine.length - 1));
    let div = spaces % (currLine.length - 1);
    // console.log(s, div);
    let sp = "";
    for (let i = 0; i < s; i++) {
      sp += " ";
    }

    // console.log(sp.length);
    for (let i = 0; i < currLine.length; i++) {
      if (i == 0) formattedLine += currLine[i];
      else {
        formattedLine += sp + (i <= div ? " " : "") + currLine[i];
      }
    }
  }
  // console.log(formattedLine);

  return formattedLine;
};

console.log(fullJustify(words, maxWidth));
