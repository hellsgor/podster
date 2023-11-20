export function isMobileDevice() {
  const userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Macintosh', platform: /Macintosh/},
  ];

  const maxWidth = '1024'
  const platform = navigator.userAgent;

  return userDeviceArray.some(
      (userDevice) => userDevice.platform.test(platform)
    )
    && (window.matchMedia('(max-width: ' + maxWidth + 'px)').matches);
}
