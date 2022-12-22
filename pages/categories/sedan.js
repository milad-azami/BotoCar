import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <CarsList data={sedanCars} />;
}

export default Sedan;
