import './App.css'
import {Link} from 'react-scroll'
import Profile from "./assets/profilepic.jpg"

import Proj1 from "./assets/chatsphere.png"
import linkedinn from "./assets/linkedinn.png"
import github from "./assets/github.png"
import resume from "./assets/resume.pdf"
import mail from "./assets/email.png"

function App() {
  
  return (
    <>
      <header>
        <div className="container m-auto px-6 py-6" >
          <div className="flex justify-between items-center">
            <div>
              <h1 className='font-bold text-xl'>Praveen Kumar</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                
                <li>
                  <Link to='project' spy={true} smooth={true} offset={-50} duration={1500} className='text-gray-400 hover:text-white cursor-pointer'>PROJECTS</Link>
                </li>
                <li>
                  <Link to='skills' spy={true} smooth={true} offset={-50} duration={1500} className='text-gray-400 hover:text-white cursor-pointer'>SKILLS</Link>
                </li>
                <li>
                  <Link to='about' spy={true} smooth={true} offset={50} duration={1500} className='text-gray-400 hover:text-white cursor-pointer'>ABOUT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6" >
            <div>
              <h2 className='font-bold text-4xl'>Hello,<br /> I'm Praveen Kumar</h2>
              <h2 className='font-bold text-3xl mt-1 gradient-text running-text'>MERN Stack Developer</h2>
              <p className='mt-4 text-gray-400 mb-10'>Crafting dynamic web experiences with MERN, transforming ideas into immersive digital realities</p>
              <a href={resume} download="resume.pdf" target="_blank" class=" hover:bg-blue-500  text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Download CV
              </a>
              <a href="mailto:praveenkumar.s8020@gmail.com" target="_blank" class=" hover:bg-blue-500  text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-9">
                Contact Info 
              </a>
            </div>
            <div className='relative'>
              <img className='p-3 ml-2 rounded-s-full border-2 rounded-e-full border-cyan-400 relative z-10 w-[220px] m-auto sm:w-[420px]' src={Profile} alt="" />

             
            </div>
          </div>
        </section>

        {/*Project SECTION */}
        <section>
          <div className="container m-auto px-6 sm:py-12" id='project'>
            <h2 className='text-4xl font-semibold mt-6'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11' >
              <div className='border p-5 border-cyan-400 rounded-md flex-1'>
                <img src={Proj1} alt="" className='rounded-md w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>ChatSphere</h3>
                <p className='text-gray-400 text-sm mt-2'>A responsive chatroom platform, fostering real-time connections and vibrant conversations (REACT AND FIREBASE)</p>
                <div className="flex mt-11 gap-2 " >
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://pk-chatsphere.netlify.app/';
                      }}
                  className='px-4 py-2 flex-1 border rounded-full bg-gradient-to-t from-blue-500 to-indigo-900 cursor-pointer hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://github.com/Praveen-Kumar8020/ChatSphere';
                      }}
                  className='px-4 py-2 flex-1 border rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500'>Checkout GitHub</button>
                </div>

              </div>
              
              
              <div className='border p-5 border-cyan-400 rounded-md flex-1'>
                <img src={Proj1} alt="" className='rounded-md w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>ChatSphere</h3>
                <p className='text-gray-400 text-sm mt-2'>A responsive chatroom platform, fostering real-time connections and vibrant conversations (REACT AND FIREBASE)</p>
                <div className="flex mt-11  gap-2" >
                  <button onClick={""} className='px-4 py-2 flex-1 border rounded-full bg-gradient-to-t from-blue-500 to-indigo-900 cursor-pointer hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button className='px-4 py-2 flex-1 border rounded-full cursor-pointer hover:border-blue-500 hover:text-blue-500'>Checkout GitHub</button>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        <section className='mt-12 ' id='skills'>
          <div className="container m-auto px-6 ">
            <h2 className='text-4xl font-semibold mb-3'>Skills</h2>
            <h1 className='text-3xl font-semibold gradient-title '>Front-End Development</h1>
            <div className='mt-8 border p-5 border-cyan-400 rounded-md'>
            <div>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>HTML</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>CSS,Bootstrap & Tailwind CSS</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[95%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Javascript, JQuery</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[85%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className='font-semibold'>React Js</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[90%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>
              
           
          </div>
        </div>
          
        <div className='container m-auto px-6'>
            <h1 className='text-3xl font-semibold gradient-title mt-10'>Back-End Development</h1>
            <div className='mt-8 border p-5 border-cyan-400 rounded-md'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className=' font-semibold'>GIT & GITHUB</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
              </div>

              <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Mongo DB</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[94%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Express Js</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[88%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>
             
             <div className='mt-8'>
              <div className='flex justify-between items-center'>
              <h2 className=' font-semibold'>Node Js</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-[90%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md mt-2'/>
            </div>

            </div>

        </div>
        </section>

        {/*Additional Skills*/ }
        <section>
           <div className='container m-auto px-6 py-14' >
            <h2 className='text-3xl font-semibold'>Additional Technologies and Skills</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[50%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>C</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>Java</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-6 '>MySQL</p>
              </div>
            </div>
           </div>
        </section>

        <section className='py-8'>
          <div className="container m-auto px-6">
            <h2 className='text-3xl font-semibold'>About Me</h2>
            <div className='mt-12 ml-16 relative  before:absolute before:top-0 before:left-12 before:bottom-2 before:w-1 before:bg-white'>
              
              
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] mb-10'>
                <h3 className='absolute -left-9 text-lg font-semibold'>Till</h3>
                <p className='text-justify'>Greetings! I'm Praveen Kumar, a passionate MERN stack developer dedicated to crafting seamless digital experiences. With expertise in MongoDB, Express.js, React, and Node.js, I blend creativity with functionality to build robust applications. I thrive on collaboration and continuous learning, always striving to push the boundaries of technology. Let's embark on this journey together and build something extraordinary!</p>
              </div>
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] mb-10'>
                <h3 className='absolute -left-9 text-lg font-semibold'>2023-25</h3>
                <p>Pursuing Master of Computer Applications in Mepco Schlenk Engineering College.</p>
              </div>
              <div className='pl-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[42px] '>
                <h3 className='absolute -left-9 text-lg font-semibold'>2020-23</h3>
                <p>Graduated Bachelor of Computer Applications at AJ college</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-6 py-6" id='about'>
            <div>
              <p className='text-gray-300 text-sm'>Copyright © Praveen</p>
            </div>
            <div>
              <ul className="flex gap-6"> 
                <li>
                  <a className='cursor-pointer' href='https://github.com/Praveen-Kumar8020'> <img src={github} className='h-7' /></a>
                </li>
                <li>
                  <a className='cursor-pointer' href='https://www.linkedin.com/in/praveenkumar1121/'> <img href="" src={linkedinn} className='h-8' /></a>
                </li>
  
              </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
