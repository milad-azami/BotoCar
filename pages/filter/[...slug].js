import { useRouter } from "next/router";
import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

function FilteredCars() {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filteredData.length) return <h3>NotFound</h3>;

  return <CarsList data={filteredData} />;
}

export default FilteredCars;
