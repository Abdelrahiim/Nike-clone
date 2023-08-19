import { ButtonProps } from "../../types";

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor ,fullWidth }: ButtonProps) => {
    return (
        <button
            className={`flex  my-4 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}  rounded-full `}>
            {label} {iconURL && <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow right " />}
        </button>
    );
};
export default Button;
