import React from 'react';

const MonthwiseJourneyCard = () => {

    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-12">
                                <img
                                    // src={picture} 
                                    className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" alt="" />
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div
                                className="bg-primary h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">
                                        {/* {serviceName} */}
                                    </h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                        {/* {about}  */}
                                    </p>
                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">

                                    </div>

                                    <p>
                                        <strong>Service Charge:</strong> <small>€</small>  <strong>
                                            {/* {price} */}
                                        </strong> <small>/hr</small>
                                    </p>
                                    <p>
                                        <strong>Service Rating:</strong>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-9" className="rating-hidden" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default MonthwiseJourneyCard;