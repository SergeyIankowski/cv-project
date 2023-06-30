import {FC} from "react";
import {TableCvs} from "@/pages/Cvs/TableCvs/TableCvs";
import {useCvsQuery} from "@/graphql/hooks/useCvsQuery";
import {PageLayoutRowContainer} from "@/components/view/PageLayoutRowContainer";
import {CreateCvModal} from "./CreateCvModal";

export const Cvs: FC = () => {
  const {data} = useCvsQuery();

  return (
    <>
      <PageLayoutRowContainer>
        <CreateCvModal />
      </PageLayoutRowContainer>
      <TableCvs cvsData={data} />;
    </>
  );
};
