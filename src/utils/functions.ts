/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
const formatTime = (sec: bigint):string => {
  const hourVal: bigint = sec / 3600n;
  const minuteVal: bigint = (sec % 3600n) / 60n;
  const secondVal: bigint = sec % 60n;

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
