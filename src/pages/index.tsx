import { awarenessMeans } from "../assets/__data__/awarenessMeans";
import { stats } from "../assets/__data__/stats";
import AwarenessItem from "../components/index/AwarenessItem";
import StatItem from "../components/index/StatItem";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full sm:w-[100%] sm:ml-20">
      <div className="w-full h-[668px] sm:h-[657px] sm:flex pt-44 pl-4 sm:p-0">
        <div className="hidden sm:block  w-[35%] bg-[url('./assets/images/Redcross_Man_02.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="sm:w-[60%]">
          <div className="flex items-center justify-center h-full">
            <div className="sm:w-[60%] h-[80%]">
              <div>
                <div className="flex">
                  <h1 className="text-6xl sm:text-[132px] text-red-000 font-bold poppins-bold">
                    act
                  </h1>
                  <div className="relative">
                    <div className="sm:size-[47px] size-[25px] border-red-000 sm:border-4 border-3 rounded-full flex items-center justify-center cursor-pointer absolute bottom-2 left-1 sm:left-3 sm:bottom-5">
                      <div className="sm:size-[33px] size-[15px] bg-red-000 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[55%] ">
                  {"RESPONSIBLE".split("").map((letter) => (
                    <h1 className="text-red-000 font-semibold text-xs ml-[6px] sm:text-2xl poppins-light">
                      {letter}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-2xl sm:text-5xl sm:mb-2 text-red-000 poppins-bold">
                  Raise awareness,
                </p>
                <p className="text-2xl sm:text-5xl sm:mb-2 text-red-000 poppins-bold">
                  educate{" "}
                </p>
                <p className="text-2xl sm:text-5xl sm:mb-2 text-red-000 poppins-bold">
                  and discuss
                </p>
                <p className="text-2xl sm:text-5xl sm:mb-2 text-red-000 poppins-bold">
                  major causes.
                </p>
                <p className="text-[#8e8782] poppins-regular text-xs sm:text-sm mb-1 mt-5">
                  The best committed advertisements to raise
                </p>
                <p className="text-[#8e8782] poppins-regular text-xs sm:text-sm mb-1">
                  awareness of the major issues of our time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="bg-white sm:flex pl-20 sm:pt-0 pt-1">
        <div className="sm:w-[40%] border-r-1 border-red-300 pr-20">
          <div className="mt-32">
            <h1 className="text-red-000 text-xl sm:text-4xl poppins-bold">
              Our mission
            </h1>
          </div>
          <div className="mt-12 text-sm/relaxed text-[#8e8782]">
            <p>
              The fight against poverty, exclusion, global warming, the
              protection of biodiversity, the prevention of diseases, the
              defense of human and women's rights, etc. are issues that concern
              us all. And yet, it is difficult to get citizens to adhere to
              these themes. However, it is by popularizing these issues and
              making them accessible to as many people as possible that
              mentalities will evolve, allowing the{" "}
              <span className="text-red-000 font-bold">
                construction of a fairer, more united, more equitable and more
                sustainable world .
              </span>
            </p>
            <p className="mt-3">
              To participate in this effort, the ACT Responsable association
              identifies, gathers and distributes the{" "}
              <span className="text-red-000 font-bold">
                {" "}
                best major cause communication campaigns
              </span>{" "}
              created each year in the world. Advertising simply expresses
              complex issues . Associations need this strength to make
              themselves known, raise awareness, generate donations, testify to
              their actions...
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="bg-[#f7f7f7] flex w-full mt-16 ">
            <div className="w-1/2 p-20">
              <div className="text-red-000 text-4xl font-bold">
                <p>+ 25,000</p>
                <p>campaigns</p>
              </div>
              <div className="text-[#8e8782] text-xl/relaxed mt-8">
                <p>
                  Discover the best engaged advertisements searchable by theme
                  in our database.
                </p>
              </div>
              <div className="text-red-000 font-bold text-xl/loose  mt-12 h-48 flex flex-col justify-between">
                <p>Global warming</p>
                <p>Biodiversity</p>
                <p>Human rights</p>
                <p>Exclusion</p>
                <p>Prevention</p>
                <p>Health</p>
              </div>
              <div className="mt-18 rounded-3xl p-2 w-60 px-3 text-white font-bold bg-red-000">
                ACCESS TO THE DATABASE
              </div>
            </div>
            <div className="w-1/2 bg-[url('./assets/images/Confine_Moi_Aussi_02.jpg')] bg-cover bg-center bg-no-repeat mt-32 mr-20 h-[500px]"></div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="bg-white pl-20 sm:flex pb-10">
        <div className="sm:w-[38.8%] pt-32 border-r-1 pr-20 border-r-red-300">
          <div className="w-2/3">
            <h1 className="text-red-000 text-xl font-bold">
              Our means of awareness raising
            </h1>
          </div>
          <div className="text-ash sm:text-sm/relaxed text-sm/loose pt-10">
            <p>
              To raise awareness, we offer original{" "}
              <span className="text-red-000 font-bold">exhibitions</span> of
              advertisements that raise awareness of major causes in a creative,
              engaging and fun way. Varied and tailor-made{" "}
              <span className="text-red-000 font-bold">interventions</span> to
              raise awareness of major causes among as many people as possible.
              A <span className="text-red-000 font-bold">club of experts</span>{" "}
              , NG'Ad, whose objective is to promote exchanges between the world
              of commercial and charitable communication.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-16 sm:gap-28 sm:grid-cols-3 sm:px-20">
          {awarenessMeans.map((item) => (
            <AwarenessItem item={item} />
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="sm:h-[650px] sm:flex">
        <div className="flex sm:w-3/6">
          <div className="w-1/2 p-10 py-12 grid gap-6 sm:items-center sm:justify-center sm:gap-0  bg-red-000">
            {stats.map((item) => (
              <StatItem item={item} />
            ))}
          </div>
          <div className="w-1/2 bg-[url('./assets/images/hands.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>
        <div className="sm:w-3/6 bg-[#f7f7f7] sm:flex flex-col p-10 sm:p-24">
          <div>
            <h1 className="text-red-000 font-bold text-2xl sm:text-[40px]">
              Our tool
            </h1>
          </div>
          <div className="mt-12 text-ash text-sm/loose grid gap-4">
            <p>
              Advertising is a{" "}
              <span className="text-red-000 font-bold">
                powerful tool . Used for causes of general interest, it informs
                us, raises awareness, alerts us, mobilizes us, influences us and
                encourages us to change our behavior. It allows associations,
                foundations and{" "}
              </span>{" "}
              institutions to make their work known, to testify to their actions
              and to strengthen their ties with citizens. In the service of
              businesses, it must be{" "}
              <span className="text-red-000 font-bold"> used responsibly.</span>
            </p>
            <p>
              Our aim is to make these collections of social and environmental
              advertisements known as{" "}
              <span className="text-red-000 font-bold">
                {" "}
                an indisputable tool for raising awareness of the major social
                and environmental challenges
              </span>{" "}
              of our time.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="h-12 sm:h-24 bg-white"></div>

      {/* ------------------------------------------------------ */}
      <div className="bg-[#f7f7f7] flex flex-col sm:flex-row items- pt-10 px-4 pb-10 sm:px-20 sm:py-20">
        <div className="flex flex-col items-center sm:block sm:w-[35%]">
          <div>
            <div>
              <div className="flex">
                <h1 className="text-5xl text-red-000 font-bold poppins-bold">
                  act
                </h1>
                <div className="relative">
                  <div className="size-[18px] border-red-000 border-2 rounded-full flex items-center justify-center cursor-pointer absolute bottom-2 left-1">
                    <div className="size-[11px] bg-red-000 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-12">
                {"RESPONSIBLE".split("").map((letter) => (
                  <h1 className="text-red-000 font-bold text-[8px] ml-[5px] poppins-light">
                    {letter}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-2/3 sm:w-60 justify-around sm:justify-between text-[#535353]">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaPinterest size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
            <FaLinkedin size={20} />
          </div>
          <div className="mt-8">
            <p className="text-ash text-sm text-center sm:text-left">
              Inspire, promote and unite communication stakeholders around best
              practices in social responsibility and sustainable development.
            </p>
          </div>
          <div className="text-[11px] text-[#535353] text-center sm:text-left w-60 sm:w-full mt-8">
            <p>© 2025 ACT Responsable - Clone </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> Facilis totam suscipit quisquam pariatur</p>
          </div>
        </div>
        <div className="sm:flex text-center sm:text-left sm:justify-around sm:w-[50%]">
          <div>
            <div className="mt-10 sm:mt-0">
              <h1 className="text-red-000 font-bold sm:text-xl">About</h1>
              <div className="text-ash mt-4 text-sm/loose">
                <p>Who are we?</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-red-000 font-bold sm:text-xl">Credits</h1>
              <div className="text-ash mt-4 text-sm/loose">
                <p>Terms and Conditions</p>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 sm:w-36">
            <h1 className="text-red-000 font-bold sm:text-xl">
              Our means of raising awareness
            </h1>
            <div className="text-ash mt-4 text-sm/loose">
              <p>Exhibitions</p>
              <p>Interventions</p>
              <p>Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
