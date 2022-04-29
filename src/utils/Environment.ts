export enum DeviceType {
  Tablet,
  Mobile,
  Desktop
}

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return DeviceType.Tablet;
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return DeviceType.Mobile;
  }
  return DeviceType.Desktop;
};
