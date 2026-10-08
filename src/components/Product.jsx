export default function Product(zmienne)
{
    
    return(
        <button onClick={() => zmienne.showProduct(zmienne.name, zmienne.price)}>
            Pokaż produkt
        </button>
    )
}