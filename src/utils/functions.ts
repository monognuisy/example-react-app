/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
const formatTime = (sec: bigint):string => {
  const hourVal: bigint = BigInt(sec) / 3600n;
  const minuteVal: bigint = (BigInt(sec) % 3600n) / 60n;
  const secondVal: bigint = BigInt(sec) % 60n;

  let resultString = (hourVal ? `${hourVal.toString()}h ` : '')
  + (minuteVal ? `${minuteVal.toString()}m ` : '');

  if (secondVal === 0n && (hourVal || minuteVal)) {
    resultString += '';
  } else {
    resultString += secondVal.toString();
  }

  return resultString;
};

export default formatTime;
