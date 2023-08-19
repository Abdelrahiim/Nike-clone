export type ButtonProps = {
    label: string;
    iconURL?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    fullWidth?:string;
};

export type ShoeCardProps = {
    imgURL: {
        thumbnail: string;
        bigShoe: string;
    };
    changeBigShoeImage: (imgURL: string) => void;
    bigShoeImg: string;
};

export type Product = {
    imgURL: string;
    name: string;
    price: string;
};
export type Service = {
    id: number;
    imgURL: string;
    label: string;
    subtext: string;
};

export type Review = {
    imgURL: string,
    customerName:string,
    rating: number,
    feedback:string
}