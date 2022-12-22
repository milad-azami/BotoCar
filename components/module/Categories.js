import Link from "next/link";
import styles from "./Categories.module.css";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>Sport cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
