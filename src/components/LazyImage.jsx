import Imgix from "react-imgix";

export default function LazyImage(props) {
  const baseUrl = "https://morgantiweb-318531768.imgix.net/";

  return (
    <Imgix
      src={baseUrl + props.fileName}
      sizes={props.sizes} //"(max-width: 600px) 480px, 1024px"
      attributeConfig={{
        loading: "lazy",
      }}
      alt={props.alt}
      className={props.className}
    />
  );
}
