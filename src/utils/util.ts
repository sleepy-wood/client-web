export const testIsValidEmail = (email: string): boolean => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(email);
};

export const testIsValidPassword = (password: string): boolean => {
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;

  return reg.test(password);
};

export const testIsValidPhone = (phone: string): boolean => {
  const reg = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;

  return reg.test(phone);
};

export const testIsEmptyString = (arg: string): boolean => {
  return arg.replace(/' '/g, '') === '' ? true : false;
};

export const getOS = (): 'mac' | 'ios' | 'windows' | 'android' | 'linux' | '' => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os: 'mac' | 'ios' | 'windows' | 'android' | 'linux' | '' = '';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else {
    os = 'linux';
  }

  return os;
};

export const checkLogin = (isLogin: boolean): boolean => {
  let result = false;
  if (!isLogin) return result;
  const jwt = sessionStorage.getItem('jwt');
  if (!jwt) return result;
  result = true;
  return result;
};

export const getTime = (timeSeconds: number, flag = true): string => {
  const hour = Math.floor(timeSeconds / 3600);
  const minute = Math.floor((timeSeconds - hour * 3600) / 60);

  let result = '';
  if (flag) {
    result = `${hour}:${minute}`;
  } else {
    result = `${hour}시간 ${minute}분`;
  }

  return result;
};
