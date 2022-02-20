import { createSignal } from "solid-js";

export default function ImageUpload(props) {
  let imageRef;

  const handleUpload = (event) => {
    imageRef.click();
  };

  const handleImageChange = (event) => {
    console.log(event.target.files);
  };
  return (
    <>
      <div>
        <button type="button" onClick={[handleUpload]}>{props.children}</button>
        <input
          type="file"
          ref={imageRef}
          accept="images/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </>
  );
}
