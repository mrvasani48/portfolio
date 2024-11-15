import { Button } from "@mantine/core";
import { images } from "assets/img";
import FormTextarea from "components/common/inputs/FormTextarea";
import TextInputCommon from "components/common/inputs/TextInputCommon";

const ContactMe = () => {
  return (
    <div className="contact-me-container" id="contact">
      <div className="mt-16">
        <p className="text-xl text-theme text-center"> Contact </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          Contact With Me
        </h2>
      </div>
      <div className="grid gap-5">
        <div className="col-start-1 col-end-3 group p-10 ">
          <div className="flex items-center justify-center group">
            <div className="max-w-md w-full overflow-hidden rounded-3xl shadow-2xl shadow-dark-500 p-10">
              {/* Hero Image */}
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={images.contactMe}
                  alt="Handshake"
                  className="w-full h-full object-cover group-hover:scale-125 "
                />
              </div>

              {/* Content */}
              <div className="pt-6 space-y-6">
                {/* Name and Title */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-white">
                    Nevine Acotanza
                  </h1>
                  <p className="text-gray-400">Chief Operating Officer</p>
                </div>

                {/* Description */}
                <p className="text-gray-400">
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>

                {/* Contact Information */}
                <div className="space-y-2">
                  <p className="text-gray-400">
                    Phone: <span className="text-white">+01234567890</span>
                  </p>
                  <p className="text-gray-400">
                    Email: <span className="text-white">admin@example.com</span>
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-4">
                    Find with me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-13">
          <div className=" rounded-3xl shadow-2xl shadow-dark-500 p-10 mt-8">
            <div className="grid grid-cols-2 gap-4">
              <TextInputCommon
                label="Your Name"
                placeholder="Enter your name"
              />
              <TextInputCommon
                label="Phone Number"
                placeholder="Enter your phone number"
              />
            </div>
            <TextInputCommon
              label="Email"
              placeholder="Enter your email"
              className="mt-4"
            />
            <TextInputCommon
              label="Subject"
              placeholder="Enter subject"
              className="mt-4"
            />
            <FormTextarea
              label="Your Message"
              placeholder="Type your message here"
              minRows={4}
              className="mt-4"
            />
            <Button className="mt-6 font-semibold rounded w-full p-5 bg-gray-800">
              <p className="flex justify-center items-center gap-2 text-theme">
                {" "}
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff014f"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
