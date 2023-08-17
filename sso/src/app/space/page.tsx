import ComplexCardRow from "@components/ComplexCardRow";
import Banner from "@components/Banner";
import DataTable from "@components/DataTable";
import ActionsBar from "@includes/ActionsBar";


export default async function Spaces() {
  return (
    <>
      <Banner />
      <ComplexCardRow />
      <DataTable />
      <ActionsBar />
    </>
  );
}
