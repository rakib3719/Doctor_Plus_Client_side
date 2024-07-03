import React from 'react';
import Heading from "./Heading";

const Testimonial = () => {
    const comments = [
        {
            heading: 'Expertise and Compassion Combined',
            comment: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            userName: 'Sarah D',
            userImage: 'https://i.ibb.co/48vgHgd/Ellipse-10-7.png',
            userProfession: 'IT Professional',
        },
        {
            heading: 'Life-Saving Care, Life-Changing Experience',
            comment: 'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.',
            userName: 'Michael R',
            userImage: 'https://i.ibb.co/3d0FPY4/Ellipse-10-1.png',
            userProfession: 'Business Executive',
        },
        {
            heading: 'Highly Satisfied!',
            comment: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
            userName: 'Emily Brown',
            userImage: 'https://i.ibb.co/gwNYwzT/Ellipse-10-2.png',
            userProfession: 'UX Designer',
        },
    ];

    return (
        <div className="bg-[#fbfbfb] py-16">
            <div className="w-[94%] mx-auto md:w-[90%] max-w-[1160px]">
                <Heading buttonName={"Testimonial"} heading={"What they say about us"} />
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {comments.map((data, idx) => (
                        <div key={idx} className="card bg-base-100 rounded-lg">
                            <div className="card-body p-6">
                                <h2 className="card-title text-xl font-semibold">{data.heading}</h2>
                                <p className="my-3 text-[#4D4C7B]">{data.comment}</p>
                                <div className="flex gap-4 items-center mt-4">
                                    <img src={data.userImage} alt={`${data.userName}`} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-[#020043]">
                                            <span className="font-bold">{data.userName},</span>
                                            <span> {data.userProfession}</span>
                                        </p>
                                        <div className="rating flex">
                                            <span className="mask mask-star-2 bg-[#FFC637]" />
                                            <span className="mask mask-star-2 bg-[#FFC637]" />
                                            <span className="mask mask-star-2 bg-[#FFC637]" />
                                            <span className="mask mask-star-2 bg-[#FFC637]" />
                                            <span className="mask mask-star-2 bg-[#FFC637]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 bg-[#e0e0e7] rounded-full"></span>
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-[#e0e0e7]  rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
