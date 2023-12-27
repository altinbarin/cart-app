import Products from './Products';
import { useEffect, useState } from 'react'
import FilterBoxCSS from '../../style/FilterBox.module.css'

const FilterBox = (props) => {


  const [sortedProducts, setSortedProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const sortByPriceIncreasing = () => {
    const sorted = [...props.products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
    setIsSorted(true);
  };

  const sortByPriceDecreasing = () => {
    const sorted = [...props.products].sort((b, a) => a.price - b.price);
    setSortedProducts(sorted);
    setIsSorted(true);
  };

  
  const sortByDiscountIncreasing = () => {
    const sorted = [...props.products].sort((a, b) => a.discountPercentage - b.discountPercentage);
    setSortedProducts(sorted);
    setIsSorted(true);
  };

  const sortByDiscountDecreasing = () => {
    const sorted = [...props.products].sort((b, a) => a.discountPercentage - b.discountPercentage);
    setSortedProducts(sorted);
    setIsSorted(true);
  };


  const sortByRatingIncreasing = () => {
    const sorted = [...props.products].sort((a, b) => a.rating - b.rating);
    setSortedProducts(sorted);
    setIsSorted(true);
  };

  const sortByRatingDecreasing = () => {
    const sorted = [...props.products].sort((b, a) => a.rating - b.rating);
    setSortedProducts(sorted);
    setIsSorted(true);
  };


  const handleSortPriceChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'ascending') {
      sortByPriceIncreasing();
    } else if (selectedValue === 'descending') {
      sortByPriceDecreasing();
    } else if (selectedValue === 'default'){
      setSortedProducts(props.products);
      setIsSorted(false);
    }
  };

  const handleSortDiscountChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'ascending') {
      sortByDiscountIncreasing();
    } else if (selectedValue === 'descending') {
      sortByDiscountDecreasing();
    } else if (selectedValue === 'default'){
      setSortedProducts(props.products);
      setIsSorted(false);
    }
  };

  const handleSortRatingChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'ascending') {
      sortByRatingIncreasing();
    } else if (selectedValue === 'descending') {
      sortByRatingDecreasing();
    } else if (selectedValue === 'default'){
      setSortedProducts(props.products);
      setIsSorted(false);
    }
  };



  useEffect (()=>{
    const uniqueBrandsList = Array.from(new Set(props.products.map((product)=>product.brand)));
    setUniqueBrands(uniqueBrandsList);
  }, [props.products]);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;

    if (selectedBrands.includes(selectedBrand)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== selectedBrand));
    } else {
      setSelectedBrands([...selectedBrands, selectedBrand]);
    }
  };

  const handleFilterClick = () => {
    if (selectedBrands.length > 0) {
      // Seçilen markalara göre ürünleri filtreleme işlemi
      const filteredProducts = props.products.filter((product) => selectedBrands.includes(product.brand));
      setSortedProducts(filteredProducts);
      setIsSorted(true);
    } else {
      // Eğer hiçbir marka seçili değilse, tüm ürünleri göster
      setSortedProducts(props.products);
      setIsSorted(false);
    }
  };

  useEffect(() => {
    const uniqueBrandsList = Array.from(new Set(props.products.map((product) => product.brand)));
    setUniqueBrands(uniqueBrandsList);
  }, [props.products]);




  return (
    <div className={FilterBoxCSS.filters}>
      <div className={FilterBoxCSS.selectOptions}>

        <div>
        <select onChange={handleSortPriceChange}>
          <option value="default">Fiyata göre sırala</option>
          <option value="ascending">Artan</option>
          <option value="descending">Azalan</option>
        </select>
        </div>
     
     <div>
      <select onChange={handleSortDiscountChange}>
          <option value="default">İndirime göre sırala</option>
          <option value="ascending">Artan</option>
          <option value="descending">Azalan</option>
        </select>
     </div>
      
      <div>
      <select onChange={handleSortRatingChange}>
          <option value="default">Puana göre sırala</option>
          <option value="ascending">Artan</option>
          <option value="descending">Azalan</option>
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
      <div>
        <button onClick={handleFilterClick}>Filtrele</button>
      </div>
      </div>

      <div className={FilterBoxCSS.products}>
      <Products products={isSorted ? sortedProducts : props.products} />
      </div>
    </div>
  );
};

export default FilterBox;