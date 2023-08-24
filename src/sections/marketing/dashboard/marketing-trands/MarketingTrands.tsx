import ReactApexChart from "react-apexcharts";
import useMarketingTrands from "./useMarketingTrands";
import { Typography } from "@mui/material";

const MarketingTrands = () => {
  const { barOptions, barseries } = useMarketingTrands();

  return (
    <div>
      <Typography sx={(theme) => styles.title(theme)}>
        Marketing Trends
      </Typography>
      <ReactApexChart
        options={barOptions}
        series={barseries}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default MarketingTrands;
const styles = {
  title: (theme: any) => ({
    color:"#FF9326",
    fontSize: "13px",
    fontWeight: 700,
    padding:"20px ",
    paddingBottom:"0px"
  }),
};
