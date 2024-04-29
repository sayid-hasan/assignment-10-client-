import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const ContactUs = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#05A081]"></div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-10 my-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#05A081] bg-opacity-10 ">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let&#39;s talk!
            </h2>
            <div className="dark:text-gray-600">
              Send us any thought or any suggestion
            </div>
          </div>
          <img
            src={"https://i.ibb.co/pwBWprg/boy-with-Laptop.jpg"}
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-100"
              defaultValue={user.displayName || "Jon Doe"}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue={user.email || "Jon@gmail.com"}
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 bg-[#05A081]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
