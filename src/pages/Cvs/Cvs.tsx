import {FC} from "react";
import {TableCvs} from "@/components/containers/TableCvs/TableCvs";
import {useCvsQuery} from "@/graphql/hooks/useCvsQuery";

export const Cvs: FC = () => {
  const {data} = useCvsQuery();

  return <TableCvs cvsData={data} />;
};
