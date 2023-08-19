import { ShoeCardProps } from "../../types"

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}:ShoeCardProps) => {
  console.log(imgURL)
    const handleClick = (): void => {
        
       
    }

return (
    <div className={`border-2 rounded-xl ${bigShoeImg ===imgURL.bigShoe? 'border-coral-red':'border-transparent '} cursor-pointer  max-sm:flex-1`} onClick={handleClick}>ShoeCard</div>
  )
}
export default ShoeCard