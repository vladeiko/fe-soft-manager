const LocalStorageService = {
  setItem: (key, data) => {
    if (typeof data === 'object') {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  },
  getItem: (key) => {
    let item = localStorage.getItem(key);
    try {
      item = JSON.parse(item);
    } catch (e) {
      return item;
    }
    return item;
  },
  clearStorage: () => {
    localStorage.clear();
  },
  deleteAllCookies: () => {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  },
};

export default LocalStorageService;
