import Products from './Products';
import { useEffect, useState } from 'react';
import FilterBoxCSS from '../../style/FilterBox.module.css';

const FilterBox = (props) => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const brands = Array.from(new Set(props.products.map(product => product.brand)));
    setUniqueBrands(brands);
  }, [props.products]);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    const updatedSelectedBrands = selectedBrands.includes(selectedBrand)
      ? selectedBrands.filter(brand => brand !== selectedBrand)
      : [...selectedBrands, selectedBrand];

    setSelectedBrands(updatedSelectedBrands);
    filterProducts(updatedSelectedBrands);
  };

  const filterProducts = (selectedBrands) => {
    if (selectedBrands.length > 0) {
      const filteredProducts = props.products.filter(product => selectedBrands.includes(product.brand));
      sortProducts(filteredProducts);
    } else {
      sortProducts(props.products);
    }
  };

  const sortProducts = (products) => {
    let sorted;
    switch (sortType) {
      case 'ascending':
        sorted = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'descending':
        sorted = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'discountAscending':
        sorted = [...products].sort((a, b) => a.discountPercentage - b.discountPercentage);
        break;
      case 'discountDescending':
        sorted = [...products].sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case 'ratingAscending':
        sorted = [...products].sort((a, b) => a.rating - b.rating);
        break;
      case 'ratingDescending':
        sorted = [...products].sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted = products;
        break;
    }
    setSortedProducts(sorted);
    setIsSorted(true);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);
    filterProducts(selectedBrands);
  };

  return (
    <div className={FilterBoxCSS.filters}>
      <div className={FilterBoxCSS.selectOptions}>
        <div>
          <select onChange={handleSortChange}>
            <option value="default">Fiyata göre sırala</option>
            <option value="ascending">Artan</option>
            <option value="descending">Azalan</option>
            <option value="discountAscending">İndirime göre Artan</option>
            <option value="discountDescending">İndirime göre Azalan</option>
            <option value="ratingAscending">Puana göre Artan</option>
            <option value="ratingDescending">Puana göre Azalan</option>
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
