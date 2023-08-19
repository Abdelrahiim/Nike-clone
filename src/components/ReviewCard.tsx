import { Review } from "../../types";
import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, rating, feedback }: Review) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-start gap-2.5">
                <img src={star} alt="" width={24} height={24} />
                <p className="font-montserrat  text-xl text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h3>
        </div>
    );
};
export default ReviewCard;
