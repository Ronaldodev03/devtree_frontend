import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserByHandle } from "../api/DevtreeAPI";
import HandleData from "../components/HandleData";
import MensajeLoader from "../components/MensajeLoader";

export default function HandleView() {
  const params = useParams();
  const handle = params.handle!;
  const { data, error, isLoading } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ["handle", handle],
    retry: 1,
  });

  if (isLoading) return <MensajeLoader className="text-center text-white" />;
  if (error) return <Navigate to={"/404"} />;
  if (data) return <HandleData data={data} />;
}
