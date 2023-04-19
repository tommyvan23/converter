
 function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}
function placeFileContent(target, file) {
    readFileContent(file).then(content => {
      fileString = content; 
      target.value = content;
    }).catch(error => console.log(error))
  }
function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
document.getElementById('inputFile')
.addEventListener('change', getFile)
document.getElementById ("function").addEventListener ("click", convertFile, false);
function convertFile(){

//Replacements
fileString = fileString.replace(/\*/g, "=");
fileString = fileString.split('a.'||'a)'||'A)'||'(A)'|| '(a)'&& !(('a.\r') || ('a. \r') || ('a.\n') || ('a. \n'))&& !(('a\r') || ('a \r') || ('a\n') || ('a \n'))).join('~%0%a)');
fileString = fileString.split('b.'||'b)'||'B)'||'(B)' || '(b)'&& !(('b.\r') || ('b. \r') || ('b.\n') || ('b. \n'))&& !(('b\r') || ('b \r') || ('b\n') || ('b \n'))).join('~%0%b)');
fileString = fileString.split('c.'||'c)'||'C)'||'(C)' || '(c)'&& !(('c.\r') || ('c. \r') || ('c.\n') || ('c. \n'))&& !(('c\r') || ('c \r') || ('c\n') || ('c \n'))).join('~%0%c)');
fileString = fileString.split(/d\.(?!\s*$)|d\)(?!\s*$)|D\)(?!\s*$)|\(D\)(?!\s*$)|\(d\)(?!\s*$)/g).join('~%0%d)');

fileString = fileString.split(/True/ || /true/).join('~%0%True');
fileString = fileString.split((/~%0%True(?=\s.)/) || (/=%100%True(?=\s.)/)).join('True');
fileString = fileString.split(/False/ || /false/).join('~%0%False');
fileString = fileString.split((/~%0%False(?=\s.)/) || (/=%100%False(?=\s.)/)).join('False');
fileString = fileString.split('=~').join('=%100%');
fileString = fileString.split('%100%%0%').join('%100%');
fileString = fileString.split('%100%~%0%').join('%100%');
fileString = fileString.split('%0%~%0%').join('~%0%');
fileString = fileString.replace(/\d{3}\./g,'\n // question \n::::[choice_multiple]<p>');
fileString = fileString.replace(/\d{2}\./g,'\n // question \n::::[choice_multiple]<p>');
fileString = fileString.replace(/\d\./g,'\n // question \n::::[choice_multiple]<p>');
// Fixes interrupting characters 
fileString = fileString.replace(/\b\~d\)/g,'d')
fileString = fileString.replace(/\b\~c\)/g,'c')
fileString = fileString.replace(/\b\~b\)/g,'b')
fileString = fileString.replace(/\b\~a\)/g,'a')
fileString = fileString.replace(/\n\s*\n/g, '\n');
// Split into lines
let splitLines = fileString.split(/\r?\n/);
// Returns correct format
  splitLines = splitLines.map(function(element)
  {if (element.startsWith ('::::[choice_multiple]<p>')) 
    {element.replace(/<p> /g, '<p>'); 
        return (element + '</p>' + '{')
    }  else {return element};
    });
    for (let i = 0; i < splitLines.length; i++) {
      if (i < splitLines.length - 1 && splitLines[i + 1].startsWith(' //') || ((i === splitLines.length - 1))) {
        splitLines[i] += '\n } \n';
      }
    }
  splitLines.shift();
  console.log(splitLines);
  splitLines = splitLines.join('\r\n');
 
console.log(splitLines)
//Sends to Output
const blob = new Blob([splitLines], {type: 'text/plain'});
// Create a download link for the blob object
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'output.txt';
// Append the download link to the body
document.body.appendChild(downloadLink);
// Click the download link to start the download
downloadLink.click();
};
