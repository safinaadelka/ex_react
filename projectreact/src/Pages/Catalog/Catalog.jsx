import Catalog from "../../components/Catalog/Catalog";
import { catalog } from "../../data.js";
import { useState } from "react";
import Card from "../../components/Card/Card";
import "../Catalog/Catalog.css"
export default function CatalogPage({ addToBasket, basket }) {
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("");

  const [category, setCategory] = useState(0);

  function search(e) {
    setQuery(e.target.value);
  }

  // фильтрация по категориям и поиску
  const filterProducts = catalog.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (item.category == category || category == 0)
  );
  
  // сортировка
  function sort(event) {
    const sortValue = event.target.value;
    setSorting(sortValue);
  }

  const sortProducts = (sorting, catalog) => {
    switch (sorting) {
      case "price_asc":
        return [...catalog].sort((a, b) => a.price - b.price);
      case "price_desc":
        return [...catalog].sort((a, b) => b.price - a.price);
      case "count_desc":
        return [...catalog].sort((a, b) => b.count - a.count);
      default:
        return catalog;
    }
  };

  const sortAndFilterProducts = sortProducts(sorting, filterProducts);

  return (
    <div className="catalog_cards">
      <br /> <br /> <br /> <br />
      <div className="container">
        <p className="catalog_name">Главная \ Каталог</p>
        <br />
        <div className="filters">
          <button className={category === 0 ? 'filter_active' : 'filter'} onClick={() => setCategory(0)}>
            ВСЕ
          </button>
          <button className={category === 1 ? 'filter_active' : 'filter'} onClick={() => setCategory(1)}>
            Топ
          </button>
          <button className={category === 2 ? 'filter_active' : 'filter'} onClick={() => setCategory(2)}>
            Низ
          </button>
          <button className={category === 3 ? 'filter_active' : 'filter'} onClick={() => setCategory(3)}>
            Обувь
          </button>
        </div>
        <br /> <br />
        <input
          onChange={search}
          type="search"
          name="search"
          placeholder="Find me"
        />
        <select onChange={sort} name="" id="">
          <option value="price_asc">По возрастанию цены</option>
          <option value="price_desc">По убыванию цены</option>
          <option value="count_desc">Остаток по количеству</option>
        </select>
        <br /> <br /> <br /> <br />
        <div className="cards">
          {sortAndFilterProducts.length ? (
            sortAndFilterProducts.map((card, index) => {
              return (
                <Card
                  key={index}
                  {...card}
                  addCard={() => addToBasket([...basket, card.id])}
                />
              );
            })
          ) : (
            <h2>По запросу "{query}" ничего не найдено</h2>
          )}
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
}
