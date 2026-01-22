import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="flex items-center p-3 md:p-5 justify-between mt-2 mb-2 rounded-xl 
    bg-slate-900 border border-slate-700 shadow-md 
    hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:border-cyan-500/30 
    transition-all duration-300 ease-in-out w-full">

      <div className="flex w-full gap-3 md:gap-6 items-center">

        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-lg p-3 flex-shrink-0 flex items-center justify-center">
          <img src={item.image} className="h-full w-full object-contain" alt="item" />
        </div>

        {/* Description Section */}
        <div className="flex-1">

          <h1 className="text-slate-100 font-bold text-base md:text-lg mb-2">{item.title}</h1>
          <h1 className="text-slate-400 font-medium text-xs md:text-sm mb-4">
            {item.description?.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          
          <div className="flex justify-between items-center">
            <p className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              ${item.price}
            </p>
            
            <div 
              onClick={removeFromCart}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center 
              cursor-pointer text-red-500 border border-slate-700
              hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] 
              transition-all duration-300"
            >
              <MdDeleteForever className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem