export function isMobileDevice() {
  const userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
  ];

  const platform = navigator.userAgent;

  return userDeviceArray.some(
    (userDevice) => userDevice.platform.test(platform)
  );
}
