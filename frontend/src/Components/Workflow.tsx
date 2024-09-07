import { CheckCircle2 } from "lucide-react";
import HeroImages from "../Assets/HeroImages.png";
import { checklistItems } from "../Constants";
function Workflow() {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Accelerate your <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            budgeting process
        </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 mt-12 w-full lg:w-1/2 relative flex justify-center items-center">
                <img className="w-auto h-full" src={HeroImages} alt="Image" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2/>
                    </div>
                    <div>
                        <h2 className="mt-1 mb-2 text-xl">{item.title}</h2>
                        <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow;