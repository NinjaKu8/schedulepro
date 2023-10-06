
export function convertFractionToFloat(str: string): number { // takes "1 3/8", returns 1.375
  const wholeAndFractionArr = str.split(' ')
  if(wholeAndFractionArr.length > 1) { // if there is a whole number
    const fractionArr = wholeAndFractionArr[1].split('/')
    return parseInt(wholeAndFractionArr[0]) + (parseInt(fractionArr[0]) / parseInt(fractionArr[1]))
  }
  else { // if there is no whole number
    const fractionArr = wholeAndFractionArr[0].split('/')
    if(fractionArr.length > 1) { // if there is a fraction
      return parseInt(fractionArr[0]) / parseInt(fractionArr[1])
    }
    else { // if there is no fraction
      return parseInt(fractionArr[0])
    }
  }
}