import { useQuery } from "@tanstack/react-query";
import { cronJob } from "../api/DevtreeAPI";

const CronJob = () => {
  const { data: cronjob } = useQuery({
    queryFn: cronJob,
    queryKey: ["cronJob"],
    retry: 1,
    refetchOnWindowFocus: false,
  });

  console.log(cronjob);

  return "cron-job";
};

export default CronJob;
