// leetcode 726 (https://leetcode.com/problems/number-of-atoms/)

function countOfAtoms(formula) {
  let i = 0
  const n = formula.length
  const stack = [{}]

  function extractNum() {
    const start = i
    while(i < n && formula[i] >= '0' && formula[i] <= '9') i++
    return start === i ? 1 : Number(formula.slice(start, i))
  }

  function addToMap(map, atom, count) {
    if (map[atom]) map[atom] += count
    else map[atom] = count
  }

  while(i < n) {
    const c = formula[i]
    if(c === '(') {
      stack.push({})
      i++
    } else if (c === ')') {
      i++
      const multiplier = extractNum()
      const innerMap = stack.pop()
      const outerMap = stack[stack.length - 1]

      for (const atoms of Object.keys(innerMap)) {
        addToMap(outerMap, atoms, innerMap[atoms] * multiplier)
      }
    } else {
      const start = i++
      while(i < n && formula[i] >= 'a' && formula[i] <= 'z') i++
      const atom = formula.slice(start, i)
      addToMap(stack[stack.length - 1], atom, extractNum())
    }
  }

  const counts = stack[0]

  return Object.keys(counts)
          .sort()
          .map(atom => counts[atom] > 1 ? atom + counts[atom] : atom)
          .join('')
}

console.log('Mg(OH)2', countOfAtoms('Mg(OH)2'))
