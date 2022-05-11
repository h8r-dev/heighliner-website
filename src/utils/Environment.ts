export enum DeviceType {
  Tablet,
  Mobile,
  Desktop
}

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if(/macintosh|mac os x/i.test(navigator.userAgent) && window.screen.height > window.screen.width){
    return DeviceType.Tablet;
  }
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return DeviceType.Tablet;
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return DeviceType.Mobile;
  }
  return DeviceType.Desktop;
};

export function isWeixin(): boolean {
  const ua: string = navigator.userAgent.toLowerCase();
  // @ts-ignore
  return (ua.match(/MicroMessenger/i) == "micromessenger")
}
