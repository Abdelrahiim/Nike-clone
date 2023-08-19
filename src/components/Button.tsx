import { ButtonProps } from "../../types";

const Button = ({ label, iconURL }: ButtonProps) => {
    return (
        <button className="flex text-white-400 my-4 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none border-coral-red bg-coral-red rounded-full ">
            {label} <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow right " />
        </button>
    );
};
export default Button;
