
import img from "../assets/pic3.jpg";
const About = ()=> {
    return(

         <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:gap-28 items-center">
             <img data-aos ="fade-down"src={img} width={200} height={200}className="rounded border-2 p-1 border-fuchsia-500 img_glow"alt="" />
        <div className="h-full lg:py-40 flex-col justify-center lg:items-starts items-center text-white">
       
            <h1 data-aos ="fade-right" className="text-[45px] font-semibold mb-8 leading-normal  uppercase text-fuchsia-500">about me</h1>
       <p data-aos ="fade-left"> “I’m a versatile individual with a strong background in programming and design. My expertise lies in web development, and I’m also proficient in various programming languages. Additionally, I have a keen eye for design, making me well-equipped to create visually appealing and functional solutions.”</p>
          
          <div className="flex mt-8 gap-2">
           <div className="flex items-center justify-center">
            <div className="flex space-x-2">
                <button className='"neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>resume</button>

               

            </div>
            
          </div>
          </div>
          
          
         </div>


            

        </div>
       
    );
};

export default About;
