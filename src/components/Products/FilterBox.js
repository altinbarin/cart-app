import Products from './Products';
import { useEffect, useState } from 'react';
import FilterBoxCSS from '../../style/FilterBox.module.css';

const FilterBox = (props) => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSort, setSelectedSort] = useState('default');

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(selectedBrand)
        ? prevSelectedBrands.filter((brand) => brand !== selectedBrand)
        : [...prevSelectedBrands, selectedBrand]
    );
  };

  const filterProducts = () => {
    const filteredProducts = selectedBrands.length > 0
      ? props.products.filter((product) => selectedBrands.includes(product.brand))
      : props.products;

    setSortedProducts(filteredProducts);
    setIsSorted(selectedBrands.length > 0);
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    
    if (selectedValue === 'default') {
      setSortedProducts(props.products);
      setIsSorted(false);
    } else {
      const sorted = [...sortedProducts].sort((a, b) => {
        switch (selectedValue) {
          case 'priceAscending':
            return a.price - b.price;
          case 'priceDescending':
            return b.price - a.price;
          case 'discountAscending':
            return a.discountPercentage - b.discountPercentage;
          case 'discountDescending':
            return b.discountPercentage - a.discountPercentage;
          case 'ratingAscending':
            return a.rating - b.rating;
          case 'ratingDescending':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
      setSortedProducts(sorted);
      setIsSorted(true);
    }
  };

  useEffect(() => {
    const uniqueBrandsList = Array.from(new Set(props.products.map((product) => product.brand)));
    setUniqueBrands(uniqueBrandsList);
    filterProducts();
  }, [props.products, selectedBrands]);

  return (
    <div className={FilterBoxCSS.filters}>
      <div className={FilterBoxCSS.selectOptions}>
        <div>
          <select onChange={handleSortChange} value={selectedSort}>
            <option value="default">Sıralama</option>
            <option value="priceAscending">En düşük fiyat</option>
            <option value="priceDescending">En yüksek fiyat</option>
            <option value="discountAscending">En düşük indirim</option>
            <option value="discountDescending">En yüksek indirim</option>
            <option value="ratingAscending">En düşük puan</option>
            <option value="ratingDescending">En yüksek puan</option>
          </select>
        </div>

      </div>

      <div className={FilterBoxCSS.brandFilter}>
        {uniqueBrands.map((brand, index) => (
          <div key={index}>
            <label>
              <input
                type='checkbox'
                value={brand}
                onChange={handleBrandChange}
                checked={selectedBrands.includes(brand)}
              />
              {brand}
            </label>
          </div>
        ))}
      </div>

      <div className={FilterBoxCSS.products}>
        <Products products={isSorted ? sortedProducts : props.products} />
      </div>
    </div>
  );
};

export default FilterBox;
