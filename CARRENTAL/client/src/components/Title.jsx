import { useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "./CarCard";

export default function Title({ title, subTitle, align }) {
    const navigate = useNavigate()
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <h1 className="font-semibold text-4xl md:text-[40px]">{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">
        {subTitle}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {
            dummyCarData.slice(0,6).map((car)=>(
                <div key={car._id}>
                    <CarCard car={car} />
                </div>
            ))
        }
      </div>

      <button onClick={()=>{
        navigate('/cars');scrollTo(0,0)
      }}
      className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gary-50 rounded-md mt-18 cursor-pointer">
        Explore all cars <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
}
