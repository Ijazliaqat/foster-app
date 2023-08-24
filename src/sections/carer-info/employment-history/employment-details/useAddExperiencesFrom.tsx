import { useExperienceMutation } from "@root/services/carer-info/employment-history/employnmentDetailsApi";
import { enqueueSnackbar } from "notistack";

export const useAddExperiencesFrom = () => {
  const [addExperiences, { isLoading }] = useExperienceMutation();

  const submitAddExperiencesForm = async (data: any) => {
    const formData = new FormData();
    // Append the properties of the main object excluding 'experiences'
    for (const key in data) {
      if (data.hasOwnProperty(key) && key !== "experiences") {
        formData.append(key, data[key]);
      }
    }
    // Append each experience as a separate entry
    data.experiences.forEach((experience: any, index: any) => {
      const fieldName = `experiences`;
      formData.append(fieldName, JSON.stringify(experience));
    });

    try {
      const res: any = await addExperiences(formData).unwrap();
      if (res) {
        enqueueSnackbar(res?.message ?? "Experience Added!", {
          variant: "success",
        });
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return { submitAddExperiencesForm };
};
