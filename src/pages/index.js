import styles from "../styles/Home.module.css";
import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [color, setColor] = useLocalStorageState("color", {
    defaultValue: "#fb36113",
  });
  function handleOnChange(event) {
    const dataColor = event.target.value;
    setColor(dataColor);
  }

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <input type="color" value={color} onChange={handleOnChange} />
      <input type="text" value={color} onChange={handleOnChange} />
    </div>
  );
}
