import React, { useEffect, useReducer } from "react";

const categories = ["All", "electronics", "men's clothing", "women's clothing"];

// Define initial state
const initialState = {
  products: [],
  filteredProducts: [],
  selectedCategory: "All",
  searchTerm: "",
  isLoading: true,
  error: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts: filterProducts(
          state.products,
          action.payload,
          state.searchTerm
        ),
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
        filteredProducts: filterProducts(
          state.products,
          state.selectedCategory,
          action.payload
        ),
      };
    default:
      return state;
  }
};

// Helper function to filter products
const filterProducts = (products, Category, searchTerm) => {
  let filtered = [...products];

  if (Category !== "All") {
    filtered = filtered.filter((product) => product.category === Category);
  }

  if (searchTerm) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
};

const ComparePrice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };

    fetchProducts();
  }, []);

  // Handle category selection
  const handleCategoryChange = (Category) => {
    dispatch({ type: "SET_CATEGORY", payload: Category });
    state.searchTerm = "";
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
    state.selectedCategory = "All";
  };

  const { filteredProducts, selectedCategory, searchTerm, isLoading, error } =
    state;

  return (
    <article id="comparePrice" className="p-6">
      {/* Tabs */}
       <div className="flex gap-4 mb-4">
         {categories.map((category) => (
           <button
             key={category}
             onClick={() => handleCategoryChange(category)}
             className={`px-4 py-2 rounded-md duration-300 hover:cursor-pointer ${
               selectedCategory !== category
                 ? "bg-blue-500 text-white"
                 : "bg-red-400 text-black border-x-4 border-x-blue-500"
             }`}
           >
             {category === "All"
               ? "All"
               : category.charAt(0).toUpperCase() + category.slice(1)
             }
           </button>
         ))}
       </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Product List */}
      <div>
        {isLoading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <li
                key={product.id || index}
                className="p-4 flex gap-5  rounded shadow-blue-200 shadow-lg "
              >
                <img
                  className="max-w-[100px]"
                  // key={product.index}
                  src={product.image}
                />
                <section>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </section>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-400">! No products found.</p>
        )}
      </div>
    </article>

    // {/* <div id="comparePrice">
    //   <div className="flex flex-col justify-center items-center gap-5 text-center font-bold text-4xl p-20 text-red">
    //     <h1> थोड़े दिन के बाद आने वाला है</h1>
    //     <p>coming in a few days</p>
    //   </div>
    // </div> */}
  );
};

export default ComparePrice;