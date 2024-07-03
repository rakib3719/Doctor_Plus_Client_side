import Heading from "./Heading";

const Faq = () => {
    const faq = [
        {
          question: 'What are your office hours?',
          answer: 'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.'
        },
        {
            question: 'How can I schedule an appointment?',
            answer: 'You can schedule an appointment by visiting our website and using the online booking system, or by calling our office directly during business hours.'
          },
          {
            question: 'Do you accept insurance?',
            answer: 'Yes, we accept most major insurance plans. Please contact our office to confirm if we accept your specific insurance provider.'
          },
          {
            question: 'What should I bring to my appointment?',
            answer: 'Please bring a valid photo ID, your insurance card, and any relevant medical records or test results. If you are taking any medications, bring a list of those as well.'
          },
          {
            question: 'Do you offer telemedicine appointments?',
            answer: 'Yes, we offer telemedicine appointments for certain types of consultations. You can schedule a telemedicine appointment through our website or by calling our office.'
          },
      ];
      
    return (
        <div className="bg-[#fbfbfb]">


<div className="w-[94%] mx-auto md:w-[90%] max-w-[1160px]">
            <Heading buttonName={"Faq"} heading={"Frequntly Asked Question"}> 

            </Heading>

          {
            faq.map((faq,idx)=>  
             <div
             key={idx}
             className="collapse mt-4 collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">{faq.question}</div>
            <div className="collapse-content border-t-2">
              <p className="text-[#343268] mt-2">{faq.answer}</p>
            </div>
          </div>
          )
          }


        </div>
        </div>
    );
};

export default Faq;