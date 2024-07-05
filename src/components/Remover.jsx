const Remover = ({ cart, removeFromCart }) => {
  return (
    <div className="p-4 h-[635px]  scrollbar:hidden overflow-y-scroll">
      {cart.map(item => (
        <div key={item.id} className="flex items-center mb-4 p-2 border rounded shadow-lg">
          <div className="w-1/4 flex-shrink-0">
            <img src={item.image} alt={item.title} className="h-20 w-20 object-cover" />
            <p className="text-lg font-bold mt-2">${item.price}</p>
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="bg-red-500 text-white px-2 py-1 rounded mt-2">
              Remove from Cart
            </button>
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Remover;