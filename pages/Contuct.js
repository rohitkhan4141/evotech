import React from 'react';
import { FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contuct = () => {

    const handlecontuctform = (e)=>{
        e.preventDefault()
        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log({username,email,subject,message})
        form.reset()
    }
    return (
      <div className="lg:w-4/5 lg:mx-auto py-20">
        <div className="bg-slate-800 rounded-md p-8 lg:p-20  ">
          <div className="flex lg:flex-row flex-col justify-center items-center ">
            <div className="lg:w-[400px] w-full bg-success p-12 lg:h-[70vh] lg:rounded-l">
              <h3 className="text-3xl  ">Let's get in touch</h3>
              <p className="mt-3 mb-8">
                We're Open for any suggetions or just to have a chat
              </p>
              <ul>
                <li className="mt-4 flex justify-start items-start">
                  <div>
                    <FaMapMarkerAlt className="w-10 h-10 p-2 border m-2 rounded-full"></FaMapMarkerAlt>
                  </div>
                  <p>
                    Address: 114 DIT Road, Malibagh, Dhaka, 1217, Bangladesh
                  </p>
                </li>
                <li className="mt-4 flex justify-start items-center">
                  <div>
                    <FaPhoneAlt className="w-10 h-10 p-2 border m-2 rounded-full"></FaPhoneAlt>
                  </div>
                  <p>Phone: +880 15000000000</p>
                </li>
                <li className="mt-4 flex justify-start items-center">
                  <div>
                    <FaTelegramPlane className="w-10 h-10 p-2 border m-2 rounded-full"></FaTelegramPlane>
                  </div>
                  <p>Email: services.evotech@gmail.com</p>
                </li>
                <li className="mt-4 flex justify-start items-center">
                  <div>
                    <FaGlobeAmericas className="w-10 h-10 p-2 border m-2 rounded-full"></FaGlobeAmericas>
                  </div>
                  <p>Website: evotech.live</p>
                </li>
              </ul>
            </div>
            <div className="lg:flex-1 w-full text-black bg-slate-100 p-12 lg:h-[70vh] lg:rounded-r">
              <h3 className="text-3xl ">Send a message</h3>
              <div className="getintouchform">
                <form className='pt-12' onSubmit={handlecontuctform}>
                  <div className="lg:flex justify-between items-center">
                    <div className="w-full lg:mr-2">
                      <p className='mb-[2px]'>Name</p>
                      <input
                      name='username'
                        type="text"
                        placeholder='Name'
                        className="input rounded-none w-full bg-white "
                      />
                    </div>
                    <div className="w-full">
                      <p className='mb-[2px]'>Email</p>
                      <input
                      name='email'
                        type="email"
                        placeholder='Email'
                        className="input rounded-none w-full bg-white "
                      />
                    </div>
                  </div>
                  <div className='pt-6'>
                    <p className='mb-[2px]'>Subject</p>
                    <input
                    name='subject'
                      type="text"
                      placeholder='Subject'
                      className="input rounded-none w-full bg-white "
                    />
                  </div>
                  <div className='pt-6'>
                    <p className='mb-[2px]'>Message</p>
                    <textarea
                      name="message"
                      id="textaraeheight"
                      placeholder='Message'
                      className="input pt-2 focus:outline-none rounded-none w-full bg-white "
                      cols="30"
                      rows="20"
                    ></textarea>
                  </div>
                  <button className='btn btn-success px-6 text-white mt-6'>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contuct;