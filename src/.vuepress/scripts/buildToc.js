const fs = require('fs')
const path = require('path')

function buildToc(dir) {
  console.log('BUild version sideBar list for', dir)
  // Read all files
  const files = fs.readdirSync(dir)
  // Cache valid files
  var toc = []
  for (let fileName of files) {
    console.log(fileName)
    if (
      fileName.toLowerCase() !== 'readme.md' &&
      fileName.toLowerCase() !== 'latest.md' &&
      fileName.toLowerCase() !== 'next.md' &&
      fileName
        .split('.')
        .pop()
        .toLowerCase() === 'md'
    ) {
      toc.push(fileName.replace(/\.md$/i, ''))
    }
  }

  // Sort version numbers
  function rule(str1, str2) {
    var arr1 = str1.split('.'),
      arr2 = str2.split('.'),
      minLen = Math.min(arr1.length, arr2.length),
      maxLen = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < minLen; i++) {
      if (parseInt(arr1[i]) > parseInt(arr2[i])) {
        return -1
      } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
        return 1
      }
      if (i + 1 == minLen) {
        if (arr1.length > arr2.length) {
          return -1
        } else {
          return 1
        }
      }
    }
  }

  toc.sort(rule)

  // Insert special pages
  toc.unshift('', 'next')

  const tocList = toc.map((i) => `/update/${i}`)
  console.log('Build sideBar', tocList)

  return tocList
}

module.exports = {
  buildToc,
}
