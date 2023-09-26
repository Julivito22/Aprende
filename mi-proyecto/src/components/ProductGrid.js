import React, { useEffect, useState } from "react";
import './styles.scss';


const schoolNameMap = {
  "escuela-gastronomia": "Escuela de Gastronomía",
  "escuela-hospitalidad": "Escuela de Hospitalidad",
  "escuela-emprendimiento": "Escuela de Emprendimiento",
  "escuela-bienestar": "Escuela de Bienestar",
  "escuela-oficios": "Escuela de Oficios",
  "escuela-belleza": "Escuela de Belleza",
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    // Realiza la llamada al endpoint para obtener los datos de productos
    fetch('https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos obtenidos:', data);
        if (data.results) {
          const productArray = Object.values(data.results);
          const filteredProducts = productArray.filter((product) => {
            console.log(product);
            return Array.isArray(product.categories) && product.categories.length > 0;
          });
          setProducts(filteredProducts);
        } else {
          console.error('Los datos no contienen la propiedad "results":', data);
        }
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  // const schoolFilters = uniqueSchools.map((schoolSlug) => {
  //   const schoolName = schoolNameMap[schoolSlug] || schoolSlug;
  //   const filteredProducts = products.filter((product) => product.school_slug === schoolSlug);
  //   const itemCount = filteredProducts.length;
  //   return {
  //     name: schoolName,
  //     value: schoolSlug,
  //     itemCount: itemCount,
  //   };
  // });

  const handleLoadMore = () => {
    if (visibleProducts + 4 <= products.length) {
      setVisibleProducts(visibleProducts + 4);
    } else {
      setVisibleProducts(products.length); // Evitar mostrar más productos de los disponibles
    }
  };
  
  return (
    <div className="product-grid">
      <div className="school-filters">
      {Object.keys(schoolNameMap).map((schoolSlug) => (
        <button
          key={schoolSlug}
          onClick={() => setSelectedSchool(schoolSlug)}
          className={`filter-button ${selectedSchool === schoolSlug ? 'active' : ''}`}
        >
          {schoolNameMap[schoolSlug]}
        </button>
        ))}
      </div>
      {products
        .filter((product) => (selectedSchool ? product.school_slug === selectedSchool : true))
        .slice(0, visibleProducts)
        .map((product) => (
          <div key={product.ID} className="product-card">
            <h3>{product.title.rendered}</h3>
            <p>Categoría: {product.categories.join(', ')}</p>
          </div>
        ))}
      {visibleProducts < products.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Cargar más
        </button>
      )}
    </div>
  );
    
  
};
export default ProductGrid;

