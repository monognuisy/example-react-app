/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
const formatTime = (sec: number):string => {
  const hourVal = ~~(sec / 3600);
  const minuteVal = ~~((sec % 3600) / 60);
  const secondVal = sec % 60;

  let resultString = (hourVal ? `${hourVal.toString()}h ` : '')
  + (minuteVal ? `${minuteVal.toString()}m ` : '');

  if (secondVal === 0 && (hourVal || minuteVal)) {
    resultString += '';
  } else {
    resultString += secondVal.toString();
  }

  return resultString;
};

export default formatTime;
