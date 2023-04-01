export const useCookies = () => {

  const setCookie = (cookieName, cookieValue) => {
    document.cookie = `${cookieName}=${JSON.stringify(cookieValue)}`
  }

  const getCookie = (cookieName) => {
    const cookies = document.cookie.split('; ');
    let cookieValue = '';

    cookies.forEach(cookie => {

      if (cookie.startsWith(`${cookieName}=`)) {
        cookieValue = cookie.replace(`${cookieName}=`, '');
      }
    });

    return cookieValue;
  }

  return [setCookie, getCookie];
}