const Contact = () => {
  return (
    <div className="w-full  text-white mt-40">
      <div className=" p-6 flex flex-col mx-auto justify-center w-full h-full ">
        <div className="pb-5 mt-60">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Contact
          </p>
          <p className="py-6 text-xl text-center">
            Submit the form 
          </p>
        </div>
        <div>
          <form
            action="https://getform.io/f/b52d9715-0c9a-4e17-b632-e78f51190e16"
            method="POST"
            className=" flex flex-col w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-black font-bold bg-[#4ADE80] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
