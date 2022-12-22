import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
