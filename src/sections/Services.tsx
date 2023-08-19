import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Service } from "../../types";

const Services = () => {
    const [myServices, setMyServices] = useState<Service[]>(services);

    // Dnd Event
    const handleDragEnd = (event: DragEndEvent): void => {
        const { active, over } = event;
        if (!over) return;

        if (active.id === over.id) return;
        setMyServices((items) => {
            const activeIndex = items.findIndex((item) => item.id === active.id);
            const overIndex = items.findIndex((item) => item.id === over.id);

            // array move
            return arrayMove(myServices, activeIndex, overIndex);
        });
    };

    return (
        <section className=" max-container flex justify-center flex-wrap gap-9 ">
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={myServices} strategy={verticalListSortingStrategy}>
                    {myServices.map((service) => (
                        <ServiceCard key={service.label} {...service} />
                    ))}
                </SortableContext>
            </DndContext>
        </section>
    );
};
export default Services;
