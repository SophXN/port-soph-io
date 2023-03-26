import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import styles from "@/styles/Menu.module.css";
const Menu = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.menuContainer}></div>
        {/* <Link href="/"> */}
        {/* <MenuIcon /> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default Menu;
