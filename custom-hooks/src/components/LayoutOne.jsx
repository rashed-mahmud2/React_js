import useScreenSize from "../hooks/useScreenSize";


export default function LayoutOne() {
  
  const onSmallDevice = useScreenSize(600)

  return (
    <div>
      <h3>I am on {onSmallDevice ? "Small" : "Big"} Device.</h3>
    </div>
  );
}
