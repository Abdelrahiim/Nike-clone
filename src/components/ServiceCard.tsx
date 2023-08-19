import { Service } from "../../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const ServiceCard = ({ id, imgURL, label, subtext }: Service) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            className="flex-1 cursor-grab sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl py-16 px-10"
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}>
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl font-bold">{label}</h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal">{subtext}</p>
        </div>
    );
};
export default ServiceCard;
