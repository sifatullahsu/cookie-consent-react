import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const CookieModal = ({ cookieConsent, handleCookieConsentAgree }) => {
  return (
    <>
      <input type="checkbox" id="cookie-consent" className="modal-toggle" defaultChecked={cookieConsent} />
      <div className="modal modal-bottom">
        <div className="modal-box lg:px-10">
          <div className='md:flex items-center md:space-x-5 lg:space-x-16'>
            <div>
              <h3 className="font-bold text-base">
                <BsFillInfoCircleFill className='inline -mt-1 mr-1 text-yellow-500 text-xl' />  Disclaimer!
              </h3>
              <p className="pt-4 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptas perferendis culpa laudantium sint quos accusamus, blanditiis sed itaque aut at, sequi praesentium consectetur quod rem exercitationem similique vitae tempore inventore libero ipsa possimus necessitatibus! Accusantium illum quisquam delectus error atque facilis iusto quis esse sit odit nam, expedita et ullam eveniet deserunt alias necessitatibus! Fugit sequi sit dolorum hic quis eius a repellendus sed, praesentium vero ducimus odio perspiciatis aut cum corrupti dolor fuga sunt voluptatem! Veritatis velit unde temporibus facilis corrupti excepturi quod vitae maxime assumenda libero veniam repudiandae, illum optio voluptatem voluptates similique pariatur quibusdam atque id?
              </p>
            </div>
            <label
              onClick={() => handleCookieConsentAgree(true)}
              htmlFor="cookie-consent"
              className="btn-agree mt-5 md:mt-0"
            >I Agree</label>
          </div>



        </div>
      </div>
    </>
  );
};

export default CookieModal;