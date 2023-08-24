import { useRouter } from "next/router";

export const useDeregisterSWAssessment = () => {

  const router = useRouter();

  const handleAction = (action: string, id: string) => {
    router.push({ pathname: `/de-registration/deregister-foster-carer/sw-assessment/form/${id}`, query: { action } })
  }

  return {
    handleAction
  }
}