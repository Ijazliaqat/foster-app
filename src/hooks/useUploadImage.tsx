// ----------------------------------------------------------------------

import { useUploadImageMutation } from "@root/services/uploadApi";

const useUploadImage = () => {
  const [uploadTriger, meta] = useUploadImageMutation();
  const uploadImage = (key: string, { getValues, setValue }: any) => {
    return new Promise<void>(async (resolve, reject) => {
      // Upload the image to the CDN
      // Replace the value of the image in RHF with url provided in the API response
      // Resolve the promise
      //-----------------//
      try {
        const image = getValues(key);

        // If image is already a URL then resolve immediately
        if (typeof image === "string") return resolve();

        const formData = new FormData();
        formData.append("image", image);

        const response = await uploadTriger({ formData }).unwrap();

        setValue(key, response.data.url);
        resolve();
      } catch (error: any) {
        reject({ message: "Something went wrong." });
      }
    });
  };

  return { uploadImage };
};
export default useUploadImage;
