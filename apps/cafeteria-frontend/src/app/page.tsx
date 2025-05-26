/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function Home() {

  const response = await fetch("http://127.0.0.1:1337/api/products")
  const { data } = await response.json();
  console.log(data)

  return (
    <div className="flex flex-col items-center min-h-screen p-6 sm:p-12 md:p-16 lg:p-24 bg-amber-50">
    <h1 className="text-3xl sm:text-4xl font-bold text-yellow-900 mb-12 text-center">Nosso Cardápio Delicioso</h1>
  
    {data && data.length > 0 ? (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {
          data.map((product: any) => (
            <li
              key={product.documentId}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-yellow-800 mb-2">{product.name}</h3>
                <p className="text-lg sm:text-xl text-green-700 font-bold mb-3">
                  R$ {typeof product.price === 'number' ? product.price.toFixed(2).replace('.', ',') : product.price}
                </p>
                <div className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                  <div dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    ) : (
      <p className="text-gray-700">Nenhum item no cardápio no momento.</p>
    )}
  </div>
  );
}
