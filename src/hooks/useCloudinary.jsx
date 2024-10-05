import shortid from "shortid";


const url = "https://api.cloudinary.com/v1_1/harshcloud/image/upload";

export default function useCloudinary() {
  async function upload(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formData.append("public_id", shortid.generate());

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    upload,
  };
}
