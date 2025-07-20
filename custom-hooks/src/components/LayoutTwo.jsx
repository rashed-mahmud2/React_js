import useScreenSize from "../hooks/useScreenSize";


export default function LayoutTwo() {
  const onSmallDevice = useScreenSize(500)
  
  return (
    <div>
      <h3 className={onSmallDevice ? "Small" : "Big"}>
        I am on {onSmallDevice ? "Small" : "Big"} Device.
      </h3>
    </div>
  );
}

