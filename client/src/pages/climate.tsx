import styles from "@/styles/Climate.module.css";
import TabGroup from "../../components/tabgroup";

export default function ClimateTest() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div>
          <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
            Explore carbon emissions for different modes of travel.{" "}
            <br className="block md:hidden" />
          </h1>
        </div>
        <div className={styles.cardContainer}>
          <TabGroup />
        </div>
      </div>
    </>
  );
}
