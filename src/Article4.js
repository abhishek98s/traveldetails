import "./Article4.css"

function Article3(){
    return(
        <div className="article4">
                <p className="topic">Clients Testimonials</p>
                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>

                <div className="main-box"> 


                    {/*box1*/}
                    <div className="box small-box">
                        <div className="rectangle small-box">
                            <svg className="box-avatar" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.9496 20.011C36.5684 20.011 34.2405 20.7159 32.2606 22.0366C30.2806 23.3573 28.7374 25.2344 27.8262 27.4307C26.9149 29.6269 26.6765 32.0436 27.141 34.3751C27.6056 36.7066 28.7523 38.8482 30.4361 40.5291C32.1199 42.21 34.2652 43.3547 36.6008 43.8185C38.9363 44.2823 41.3571 44.0442 43.5571 43.1345C45.7571 42.2248 47.6375 40.6843 48.9605 38.7077C50.2835 36.7312 50.9896 34.4074 50.9896 32.0302C50.9896 28.8425 49.7211 25.7854 47.4632 23.5313C45.2052 21.2773 42.1428 20.011 38.9496 20.011ZM38.9496 39.2418C37.5209 39.2418 36.1242 38.8188 34.9362 38.0264C33.7482 37.234 32.8223 36.1077 32.2755 34.79C31.7288 33.4722 31.5857 32.0222 31.8645 30.6233C32.1432 29.2244 32.8312 27.9394 33.8415 26.9309C34.8518 25.9223 36.139 25.2355 37.5403 24.9572C38.9416 24.679 40.3941 24.8218 41.7141 25.3676C43.0341 25.9134 44.1624 26.8378 44.9561 28.0237C45.7499 29.2096 46.1736 30.6039 46.1736 32.0302C46.1717 33.9423 45.41 35.7754 44.0556 37.1274C42.7013 38.4795 40.865 39.2398 38.9496 39.2418Z" fill="#222222"/>
                                <path d="M38.9497 5.58789C32.2821 5.58789 25.7643 7.56165 20.2204 11.2596C14.6765 14.9575 10.3555 20.2135 7.80397 26.363C5.2524 32.5124 4.58479 39.2791 5.88557 45.8073C7.18635 52.3355 10.3971 58.332 15.1118 63.0386C19.8265 67.7452 25.8334 70.9504 32.3728 72.2489C38.9123 73.5475 45.6906 72.881 51.8507 70.3338C58.0107 67.7867 63.2758 63.4732 66.9801 57.9388C70.6844 52.4045 72.6615 45.8978 72.6615 39.2417C72.6514 30.3193 69.0963 21.7652 62.7763 15.4561C56.4563 9.147 47.8875 5.59807 38.9497 5.58789ZM24.5017 64.1864V60.8764C24.5036 58.9643 25.2654 57.1311 26.6197 55.7791C27.974 54.4271 29.8104 53.6667 31.7257 53.6648H46.1736C48.089 53.6667 49.9253 54.4271 51.2797 55.7791C52.634 57.1311 53.3957 58.9643 53.3976 60.8764V64.1864C49.0131 66.7422 44.027 68.0891 38.9497 68.0891C33.8724 68.0891 28.8863 66.7422 24.5017 64.1864ZM58.1943 60.6985C58.1464 57.5454 56.8595 54.5374 54.611 52.3225C52.3626 50.1076 49.3325 48.8631 46.1736 48.8571H31.7257C28.5669 48.8631 25.5368 50.1076 23.2883 52.3225C21.0399 54.5374 19.753 57.5454 19.705 60.6985C15.3383 56.806 12.2589 51.6813 10.8745 46.0029C9.49017 40.3246 9.8662 34.3603 11.9528 28.9C14.0394 23.4398 17.7382 18.7409 22.5594 15.4258C27.3805 12.1106 33.0967 10.3355 38.9509 10.3355C44.8051 10.3355 50.5212 12.1106 55.3424 15.4258C60.1635 18.7409 63.8623 23.4398 65.9489 28.9C68.0356 34.3603 68.4116 40.3246 67.0272 46.0029C65.6429 51.6813 62.5635 56.806 58.1967 60.6985H58.1943Z" fill="#222222"/>
                            </svg>

                            <h1 className="box-h1">Safalta Magar</h1>

                            <p className="box-email">safaltamagar@gmail.com</p>

                            <div className="box-stars">
                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>
                            </div>

                            <p className="box-p">Lörem ipsum tranade Hyperpol makrosamurar men dest, tör biv.</p>

                            <a href="#" className="box-a">Read More</a>
                        </div>    
                    </div> 
                    


                    {/*box2*/}
                    <div className="box">
                        <div className="rectangle">
                            <svg className="box-avatar" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.9496 20.011C36.5684 20.011 34.2405 20.7159 32.2606 22.0366C30.2806 23.3573 28.7374 25.2344 27.8262 27.4307C26.9149 29.6269 26.6765 32.0436 27.141 34.3751C27.6056 36.7066 28.7523 38.8482 30.4361 40.5291C32.1199 42.21 34.2652 43.3547 36.6008 43.8185C38.9363 44.2823 41.3571 44.0442 43.5571 43.1345C45.7571 42.2248 47.6375 40.6843 48.9605 38.7077C50.2835 36.7312 50.9896 34.4074 50.9896 32.0302C50.9896 28.8425 49.7211 25.7854 47.4632 23.5313C45.2052 21.2773 42.1428 20.011 38.9496 20.011ZM38.9496 39.2418C37.5209 39.2418 36.1242 38.8188 34.9362 38.0264C33.7482 37.234 32.8223 36.1077 32.2755 34.79C31.7288 33.4722 31.5857 32.0222 31.8645 30.6233C32.1432 29.2244 32.8312 27.9394 33.8415 26.9309C34.8518 25.9223 36.139 25.2355 37.5403 24.9572C38.9416 24.679 40.3941 24.8218 41.7141 25.3676C43.0341 25.9134 44.1624 26.8378 44.9561 28.0237C45.7499 29.2096 46.1736 30.6039 46.1736 32.0302C46.1717 33.9423 45.41 35.7754 44.0556 37.1274C42.7013 38.4795 40.865 39.2398 38.9496 39.2418Z" fill="#222222"/>
                                <path d="M38.9497 5.58789C32.2821 5.58789 25.7643 7.56165 20.2204 11.2596C14.6765 14.9575 10.3555 20.2135 7.80397 26.363C5.2524 32.5124 4.58479 39.2791 5.88557 45.8073C7.18635 52.3355 10.3971 58.332 15.1118 63.0386C19.8265 67.7452 25.8334 70.9504 32.3728 72.2489C38.9123 73.5475 45.6906 72.881 51.8507 70.3338C58.0107 67.7867 63.2758 63.4732 66.9801 57.9388C70.6844 52.4045 72.6615 45.8978 72.6615 39.2417C72.6514 30.3193 69.0963 21.7652 62.7763 15.4561C56.4563 9.147 47.8875 5.59807 38.9497 5.58789ZM24.5017 64.1864V60.8764C24.5036 58.9643 25.2654 57.1311 26.6197 55.7791C27.974 54.4271 29.8104 53.6667 31.7257 53.6648H46.1736C48.089 53.6667 49.9253 54.4271 51.2797 55.7791C52.634 57.1311 53.3957 58.9643 53.3976 60.8764V64.1864C49.0131 66.7422 44.027 68.0891 38.9497 68.0891C33.8724 68.0891 28.8863 66.7422 24.5017 64.1864ZM58.1943 60.6985C58.1464 57.5454 56.8595 54.5374 54.611 52.3225C52.3626 50.1076 49.3325 48.8631 46.1736 48.8571H31.7257C28.5669 48.8631 25.5368 50.1076 23.2883 52.3225C21.0399 54.5374 19.753 57.5454 19.705 60.6985C15.3383 56.806 12.2589 51.6813 10.8745 46.0029C9.49017 40.3246 9.8662 34.3603 11.9528 28.9C14.0394 23.4398 17.7382 18.7409 22.5594 15.4258C27.3805 12.1106 33.0967 10.3355 38.9509 10.3355C44.8051 10.3355 50.5212 12.1106 55.3424 15.4258C60.1635 18.7409 63.8623 23.4398 65.9489 28.9C68.0356 34.3603 68.4116 40.3246 67.0272 46.0029C65.6429 51.6813 62.5635 56.806 58.1967 60.6985H58.1943Z" fill="#222222"/>
                            </svg>

                            <h1 className="box-h1">Safalta Magar</h1>

                            <p className="box-email">safaltamagar@gmail.com</p>

                            <div className="box-stars">
                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>
                            </div>

                            <p className="box-p">Lörem ipsum tranade Hyperpol makrosamurar men dest, tör biv.</p>

                            <a href="#" className="box-a">Read More</a>
                        </div>    
                    </div>  



                    {/*box3*/}
                    <div className="box small-box">
                        <div className="rectangle small-box">
                            <svg className="box-avatar" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.9496 20.011C36.5684 20.011 34.2405 20.7159 32.2606 22.0366C30.2806 23.3573 28.7374 25.2344 27.8262 27.4307C26.9149 29.6269 26.6765 32.0436 27.141 34.3751C27.6056 36.7066 28.7523 38.8482 30.4361 40.5291C32.1199 42.21 34.2652 43.3547 36.6008 43.8185C38.9363 44.2823 41.3571 44.0442 43.5571 43.1345C45.7571 42.2248 47.6375 40.6843 48.9605 38.7077C50.2835 36.7312 50.9896 34.4074 50.9896 32.0302C50.9896 28.8425 49.7211 25.7854 47.4632 23.5313C45.2052 21.2773 42.1428 20.011 38.9496 20.011ZM38.9496 39.2418C37.5209 39.2418 36.1242 38.8188 34.9362 38.0264C33.7482 37.234 32.8223 36.1077 32.2755 34.79C31.7288 33.4722 31.5857 32.0222 31.8645 30.6233C32.1432 29.2244 32.8312 27.9394 33.8415 26.9309C34.8518 25.9223 36.139 25.2355 37.5403 24.9572C38.9416 24.679 40.3941 24.8218 41.7141 25.3676C43.0341 25.9134 44.1624 26.8378 44.9561 28.0237C45.7499 29.2096 46.1736 30.6039 46.1736 32.0302C46.1717 33.9423 45.41 35.7754 44.0556 37.1274C42.7013 38.4795 40.865 39.2398 38.9496 39.2418Z" fill="#222222"/>
                                <path d="M38.9497 5.58789C32.2821 5.58789 25.7643 7.56165 20.2204 11.2596C14.6765 14.9575 10.3555 20.2135 7.80397 26.363C5.2524 32.5124 4.58479 39.2791 5.88557 45.8073C7.18635 52.3355 10.3971 58.332 15.1118 63.0386C19.8265 67.7452 25.8334 70.9504 32.3728 72.2489C38.9123 73.5475 45.6906 72.881 51.8507 70.3338C58.0107 67.7867 63.2758 63.4732 66.9801 57.9388C70.6844 52.4045 72.6615 45.8978 72.6615 39.2417C72.6514 30.3193 69.0963 21.7652 62.7763 15.4561C56.4563 9.147 47.8875 5.59807 38.9497 5.58789ZM24.5017 64.1864V60.8764C24.5036 58.9643 25.2654 57.1311 26.6197 55.7791C27.974 54.4271 29.8104 53.6667 31.7257 53.6648H46.1736C48.089 53.6667 49.9253 54.4271 51.2797 55.7791C52.634 57.1311 53.3957 58.9643 53.3976 60.8764V64.1864C49.0131 66.7422 44.027 68.0891 38.9497 68.0891C33.8724 68.0891 28.8863 66.7422 24.5017 64.1864ZM58.1943 60.6985C58.1464 57.5454 56.8595 54.5374 54.611 52.3225C52.3626 50.1076 49.3325 48.8631 46.1736 48.8571H31.7257C28.5669 48.8631 25.5368 50.1076 23.2883 52.3225C21.0399 54.5374 19.753 57.5454 19.705 60.6985C15.3383 56.806 12.2589 51.6813 10.8745 46.0029C9.49017 40.3246 9.8662 34.3603 11.9528 28.9C14.0394 23.4398 17.7382 18.7409 22.5594 15.4258C27.3805 12.1106 33.0967 10.3355 38.9509 10.3355C44.8051 10.3355 50.5212 12.1106 55.3424 15.4258C60.1635 18.7409 63.8623 23.4398 65.9489 28.9C68.0356 34.3603 68.4116 40.3246 67.0272 46.0029C65.6429 51.6813 62.5635 56.806 58.1967 60.6985H58.1943Z" fill="#222222"/>
                            </svg>

                            <h1 className="box-h1">Safalta Magar</h1>

                            <p className="box-email">safaltamagar@gmail.com</p>

                            <div className="box-stars">
                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>

                                <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                </svg>
                            </div>

                            <p className="box-p">Lörem ipsum tranade Hyperpol makrosamurar men dest, tör biv.</p>

                            <a href="#" className="box-a">Read More</a>
                        </div>    
                    </div>  
                </div>
                <div className="clients-button">
                    <button className="clients-button-side"></button>
                    <button className="clients-button-middle"></button>
                    <button className="clients-button-side"></button>
                </div>
        </div> 
    )
}

export default Article3;