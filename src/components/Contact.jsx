  import { useState, useRef } from 'react';
  import { motion } from 'framer-motion';
  import { styles } from '../styles';
  import { SectionWrapper } from '../hoc';
  import { slideIn } from '../utils/motion';
  import { send, sendHover } from '../assets';
  import InstaHandle from './InstaHandle';

  const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: '',
      email: '',
      organization: '',
      contact: '',
      message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
      console.log("Submitting form:", form);
      e.preventDefault();
      setLoading(true);

      try {
        const scriptURL = "https://script.google.com/macros/s/AKfycbw78xJ_5UvrQiJb_ZNm6ayIDYuz3lHSVbIfnAo_rN0FL9PzKaDl5JzHfsAXSlsJadmr/exec"; // replace with /exec URL

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const res = await fetch(scriptURL, {
          method: "POST",
          body: formData,
        });

        // Read the body once
        const text = await res.text();
        let result;
        try {
          result = JSON.parse(text);
        } catch {
          throw new Error("Invalid JSON response from server: " + text);
        }

        console.log("Server response:", result);

        if (result.result === "success") {
          alert("✅ Thank you! Your details have been saved.");
          setForm({
            name: "",
            email: "",
            organization: "",
            contact: "",
            message: "",
          });
        } else {
          throw new Error(result.message || "Unknown error");
        }

      } catch (error) {
        console.error("Error!", error);
        alert(`❌ Something went wrong: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    return (
      <>
        <div className="-mt-[8rem] xl:flex-col flex-col-reverse flex gap-10 overflow-hidden">
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-jet p-8 rounded-2xl"
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3
              className={styles.sectionHeadTextLight}
              style={{ color: '#6194fb' }}
            >
              Contact
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-0 flex flex-col gap-6 font-poppins"
            >
              {/* Name */}
              <label className="flex flex-col">
                <span className="text-timberWolf font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>

              {/* Email */}
              <label className="flex flex-col">
                <span className="text-timberWolf font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>

              {/* Organization */}
              <label className="flex flex-col">
                <span className="text-timberWolf font-medium mb-4">
                  Organization Type
                </span>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="E.g. Student, Startup, Company"
                  className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                />
              </label>

              {/* Contact */}
              <label className="flex flex-col">
                <span className="text-timberWolf font-medium mb-4">
                  Contact Number
                </span>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                />
              </label>

              {/* Message */}
              <label className="flex flex-col">
                <span className="text-timberWolf font-medium mb-4">Your Message</span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
                onMouseOver={() => {
                  document
                    .querySelector('.contact-btn')
                    .setAttribute('src', sendHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.contact-btn')
                    .setAttribute('src', send);
                }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send
                    <img
                      src={send}
                      alt="send"
                      className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="InstaHandle">
          <InstaHandle />
        </div>
      </>
    );
  };

  export default SectionWrapper(Contact, 'contact');
