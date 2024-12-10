import axios from "axios";

const imageUpload = async (img) => {
  const data = new FormData();
  data.append("file", img);
  data.append("upload_preset", "dictionaryApp_preset");

  try {
    let cloudName = "dgxvtrpmh";
    let resourceType = "image";
    let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    console.log(secure_url);
    return secure_url;
  } catch (error) {
    console.error(error);
  }
};
export default imageUpload;
