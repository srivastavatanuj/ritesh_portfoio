import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ButtonLoader from "./Loader/ButtonLoader";
import { SUBMIT } from "../utils/constants/message";


const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const { name, email, message } = formData;

    if (!name) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }
    if (!message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setResult("Sending...");

    const form = new FormData(event.target);
    form.append("access_key", "10d5ffb6-3e8f-458c-bae6-4e7b6a635928");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setResult(SUBMIT);
        setFormData({ name: "", email: "", message: "" });
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult(ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="flex flex-col items-center py-16 px-4 bg-[#ebecee]">
      <h3 className="Section_Title">Contact Us</h3>
      <h2 className="Section_Heading">Have a Project?</h2>
      <p className="Section_Subheading">
        Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 mt-8 w-full max-w-4xl">
        {/* Form Section */}
        <form onSubmit={onSubmit} className="bg-white p-6 card_shadow flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="Input_Box" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="Input_Box" required />
          </div>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="Input_Box" required></textarea>

          {/* Submit Button with Loader */}
          <button type="submit" className="mt-4 bg-[#b5b085] text-white py-2 px-4 rounded-md w-full hover:bg-[#9c9a75] flex justify-center items-center" disabled={isLoading}>
            {isLoading ? <ButtonLoader /> : "Send Message"}
          </button>

          {/* Result Message */}
          {result && <p className="mt-2 text-center text-blue-600">{result}</p>}
        </form>

        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#b5b085] text-xl" />
            <div>
              <h4 className="font-semibold text-[#95977e] uppercase tracking-wider">Address:</h4>
              <p className="text-gray-500">Nodia, Uttar Pradesh, India 201301</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#b5b085] text-xl" />
            <div>
              <h4 className="font-semibold text-[#95977e] uppercase tracking-wider">Phone:</h4>
              <p className="text-gray-500">+91 9319014190</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#b5b085] text-xl" />
            <div>
              <h4 className="font-semibold text-[#95977e] uppercase tracking-wider">Email:</h4>
              <p className="text-gray-500">ritesh.kaloni1995@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
