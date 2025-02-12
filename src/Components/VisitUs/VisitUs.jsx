export default function ProductList() {
    const products = [
      {
        id: 1,
        name: "London Bridge Grind",
        description: "2 London Bridge, London, SE1 9RA",
        image: "shopone.png",
      },
      {
        id: 2,
        name: "Greenwich Grind",
        description: "17-19 Nelson Rd, London, SE10 9JB",
        image: "shoptwo.png",
      },
      {
        id: 3,
        name: "Liverpool Street Grind",
        description: "38 Broadgate Circle, London, EC2M 2QS",
        image: "shopthree.png",
      },
    ];
  
    return (
        <>
        <h1 className="text-center bg-[#F6DBDF] text-5xl font-semibold alegreya py-8">Visit our Cafés and Coffee Shops.</h1> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#F6DBDF]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
           
            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2 poppins">{product.name}</h2>
            <p className="text-gray-600 text-center mb-4 poppins">{product.description}</p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border transition poppins">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      </>
    );
  }
  