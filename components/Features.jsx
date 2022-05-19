import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Features.module.css";

const Features = () => {
    const images = [
        "/Img/Featured.png",
        "/Img/Featured2.png",
        "/Img/Featured3.png",
    ]
    const [index, setIndex] = useState(0)
    const handleClick = (detail) => {
        if(detail === "r"){
            (index === 2) ? setIndex(0) : setIndex(index + 1) 
        }
        else if(detail === "l"){
            (index === 0) ? setIndex(2) : setIndex(index - 1) 
        }
    }
    console.log(index)

  return (
    <div className={styles.container}>

        <div className={styles.wrapper} style={{transform:`translateX(${-100 * index}vw)`}}>
            {images.map((img, i) => (
            <div className={styles.imgContainer}>
                <Image key={i} src={img} alt="" layout="fill" objectFit="contain"/>
                <div className={styles.arrowContainer}>
        <Image key={i} src="/Img/arrowl.png" alt="" width="100" height="100" onClick={() => handleClick("l")} />
        <Image key={i} src="/Img/arrowr.png" alt="" width="100" height="100" onClick={() => handleClick("r")} />
    </div>
            </div>
            ))}

        </div>

    </div>
  );
};

export default Features;
