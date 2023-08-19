import ComplexCardRow from "@components/ComplexCardRow";
import Banner from "@components/Banner";
import DataTable from "@components/DataTable";
import ActionsBar from "@includes/ActionsBar";
import NavBar from "@/views/includes/NavBar/NavBar";



export default async function Spaces() {
  return (
    <div className="col-span-5 lg:col-span-4">
      <NavBar/>
      <Banner />

    </div>
  );
}
