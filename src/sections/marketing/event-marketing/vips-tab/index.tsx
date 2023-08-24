import VipCustomer from "./vip-customer/VipCustomer";
import Customer from "./customer/Customer";
import PorchCamPartner from "./porchcam-partner/PorchCamPartner";
import Influencer from "./influencer/Influencer";
export const data = [
    {
      title: "VIP Customer",
        component: <VipCustomer />,
        countValue: 5,
    },
    {
      title: "Customer",
        component: <Customer />,
        countValue: 1,
    },
    {
      title: "PorchCam Partner",
        component: <PorchCamPartner />,
        countValue: 6,
    },
    {
      title: "Influencer",
        component: <Influencer />,
        countValue: 8,
    }
  ];