import { AiFillGithub} from 'react-icons/ai';
const Banner = ()=> {
    return(
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex-col justify-center lg:items-starts items-center text-white">
            <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className="text-fuchsia-500 ">My Website</span></h1>
       <p> “I’m a versatile individual with a strong background in programming and design. My expertise lies in web development, and I’m also proficient in various programming languages. Additionally, I have a keen eye for design, making me well-equipped to create visually appealing and functional solutions.”</p>
          
          <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
                <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]"/>

                </a>
                <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]"/>

                </a>
                <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]"/>

                </a>
                <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]"/>

                </a>

            </div>
          </div>
          </div>
          
          
            </div>
           
        </div>
    );
};

export default Banner;