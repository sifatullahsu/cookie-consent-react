import { useState } from 'react';
import './App.css';
import CookieModal from './components/CookieModal';
import { useCookies } from './hooks/useCookies';

function App() {

  const [setCookie, getCookie] = useCookies();
  const [cookieConsent, setCookieConsent] = useState(getCookie('CookieConsent') ? false : true);

  const handleCookieConsentAgree = (isAgree) => {

    if (isAgree) {
      setCookie('CookieConsent', true);
      setCookieConsent(false);
    }
  }

  return (
    <>
      <div className='p-5'>
        <p className='font-bold'>This is a cookie consent functionalities project!</p>
        <p>The popup only visible in a single time on every session.</p>
        <p>It creates a cookie after click on agree button, No Exprire date was assigned, it means it'll automatically expire when the session will be closed (after browser close).</p>
        <a
          href="https://prnt.sc/Sy56L66m2GIh"
          target='_blank'
          rel="noreferrer"
          className='underline'
        >https://prnt.sc/Sy56L66m2GIh</a>
        <p>Currently every users shoud be <strong>Agree</strong> this.</p>
        <p>Otherwise they won't do anythings like, any kind of actions (button click).</p>

        <p className='italic mt-5'>This is a example button. OnClick it'll add somthing on console. This is for testing purpose. This button won't work when popup open.</p>
        <button className='btn btn-primary btn-sm rounded-none'
          onClick={() => console.log(new Date())}
        >Dummy Button</button>

        <p className='mt-10'>If you want to see the popup. Then please close the browser and open it again. Or clear the cookie manually and reload the page.</p>
      </div>
      <CookieModal
        cookieConsent={cookieConsent}
        handleCookieConsentAgree={handleCookieConsentAgree}
      ></CookieModal>
    </>
  );
}

export default App;
