import React, { useRef, useState } from "react";
import { RiLoader3Line } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  //hook assignment
  const form = useRef();
  const senderName = useRef();
  const senderEmail = useRef();
  const senderPhone = useRef();
  const senderMessage = useRef();
  const [loader, setLoader] = useState(false);

  // when user submit the form
  const formSubmitedHandeler = (e) => {
    e.preventDefault();

    // making the loader true
    setLoader(true);

    // now sending the email via email js
    emailjs
      .sendForm(
        "service_gsgxmj9",
        "template_w2swqqi",
        form.current,
        "3Mzt3gdmhHW-Bne81"
      )
      .then(
        (result) => {
          toast.success("Message sent ");
          setLoader(false);
        },
        (error) => {
          toast.error("Some error !! ");
        }
      )
      .catch(() => {
        toast.error("Some error ");
        setLoader(false);
      });

    senderName.current.value = "";
    senderEmail.current.value = "";
    senderPhone.current.value = "";
    senderMessage.current.value = "";
  };

  return (
    <div className=" min-[1400px]:w-[1400px] w-[90%] m-auto pt-[5rem] md:pt-[15rem] pb-[5rem] font-custom">
      <h1 className=" border-l-8 border-white p-2  text-3xl" id="contact">
        Contact Me
      </h1>
      <div
        className=" flex flex-col mt-10  min-[650px]:flex-row gap-8"
        id="contact-me-section"
      >
        {/* FOR IMAGE  */}

        <div className=" w-[90%] min-[650px]:w-[45%] mt-5 relative">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1701058610~exp=1701059210~hmac=08e1106a44e98d2f6fbc3f6ec6b3608517e49ada602885cdd7ac5dc1269f8c27"
            className="w-full h-[30rem] object-cover relative z-10 rounded-md"
          />
          <div className="w-full h-[30rem] absolute bg-blue-600  top-5 left-5 shadow-md rounded-md" />
        </div>

        {/* TEXT DIV HERE  */}

        <div className=" w-full min-[650px]:w-[55%] rounded-lg flex flex-col gap-2 md:gap-6 p-2 min-[650px]:px-10">
          <form
            ref={form}
            className=" flex flex-col gap-2"
            onSubmit={formSubmitedHandeler}
          >
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Name
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl text-black "
                type="text"
                placeholder="Enter Your Name ..."
                required
                name="user_name"
                ref={senderName}
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Email
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl text-black"
                type="email"
                placeholder="Enter Your Email ..."
                name="user_email"
                required
                ref={senderEmail}
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Phone
              </label>
              <input
                className="w-full bg-blue-100 py-2 px-5  mt-1 rounded-md text-xl text-black "
                type="number"
                name="user_phone"
                placeholder="Your Phone Number ..."
                ref={senderPhone}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-xl px-1 font-medium">
                Subject
              </label>
              <textarea
                className="w-full h-32 bg-blue-100 py-2 px-5 mt-1 rounded-md text-xl resize-none  text-black"
                type="text"
                name="message"
                ref={senderMessage}
                placeholder="Some Message Here ..."
                required
              />
            </div>
            {!loader ? (
              <button
                type="submit"
                value="send"
                className=" bg-blue-600 px-4 py-2 w-fit rounded-md"
              >
                Send Message
              </button>
            ) : (
              <button className=" bg-blue-600 px-14 py-2 w-fit rounded-md">
                <RiLoader3Line className=" animate-spin text-2xl" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
