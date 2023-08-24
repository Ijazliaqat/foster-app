
const useCurrentReferral = () => {

  const SELECT_FILTERS = [
    {
      key: "referralType",
      label: 'Refferal Type',
      options: [{ label: "test", value: "test-value" }],
    },
    {
      key: "localAuthority",
      label: 'Local Authority',
      options: [{ label: "Available", value: "available" }],
    },
  ];

  return {
    SELECT_FILTERS
  }
}

export default useCurrentReferral