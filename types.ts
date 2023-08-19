export type ButtonProps = {
    label: string;
    iconURL?: string;
};

export type ShoeCardProps = {
    imgURL: {
        thumbnail: string;
        bigShoe: string;
    };
    changeBigShoeImage: (imgURL:string) => void;
    bigShoeImg: string;
};

export type Product = {
    imgURL: string;
    name: string;
    price: string;
}