export type ButtonProps = {
    label:string,
    iconURL:string
}


export type ShoeCardProps = {
    imgURL:{
        thumbnail: string,
        bigShoe: string,
    }
    changeBigShoeImage : () => void ;
    bigShoeImg:string

    
}