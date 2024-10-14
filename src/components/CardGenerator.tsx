import { CoffeeItem } from "../types/types";

interface ICardGenerator {
  item: CoffeeItem;
  incrementQuantity: (name: string) => void;
  decrementQuantity: (name: string) => void;
}

const CardGenerator: React.FC<ICardGenerator> = ({
  item,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="bg-cards-bg w-full grid gap-1 grid-cols-3 md:grid-cols-1 m-3 rounded-lg p-5 justify-center items-center">
      <div className="flex-col justify-center items-center">
        <img src={item.img} alt={item.name} />
      </div>

      <div>
        <p className="text-sm md:text-base text-white font-semibold mt-2">{item.name}</p>
        <p className="text-custome-cream font-semibold">
          ${(item.quantity > 0 ? item.price * item.quantity : item.price).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center bg-white overflow-hidden w-fit mx-auto">
        <button
          className="px-1 md:px-3 md:py-1 flex items-center justify-center bg-custome-cream"
          onClick={() => incrementQuantity(item.name)}
        >
          <span>+</span>
        </button>

        <p className="mx-1 md:mx-3">{item.quantity}</p>

        <button
          className="px-1 md:px-3 md:py-1 flex items-center justify-center bg-custome-cream"
          onClick={() => decrementQuantity(item.name)}
        >
          <span>-</span>
        </button>
      </div>

      

    </div>
  );
};

export default CardGenerator;
