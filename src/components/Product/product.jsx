import Wine from "../Wine/wine"
const Product = () => {
  return (
    <div>
        <Wine
        title="Airén"                    
        description="Spain, white, 0.75 l."
        rating={4.1}
        like/>

        <Wine
        title="Chardonnay"                    
        description="France, white, 0.75 l."
        rating={4.3}
        like={false}/>

        <Wine
        title="Pinot Noir"                    
        description="France, red, 0.75 l."
        rating={4.6}
        like/>
    </div>
  )
}

export default Product