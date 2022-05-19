import styles from "../styles/Navbar.module.css";
import { BsTelephone } from "react-icons/bs";
// import { GiFullPizza } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tel}>
        <BsTelephone className={styles.button} />
        <h4 className={styles.telephone}>0212 573 54 55</h4>
      </div>
      <div className={styles.tel}>
        <h4 className={styles.telephone}>PIZZA APP</h4>
        <Image src="/Img/pizza.png" alt="" width="60" height="60"/>
      </div>
      <div className={styles.shop}>
        <FiShoppingCart className={styles.pizza} />
        <span className={styles.span}>5</span>
      </div>
    </div>
  );
};

export default Navbar;
