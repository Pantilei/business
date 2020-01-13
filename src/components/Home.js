import React from "react";
import PrimaryNavBar from "./PrimaryNavBar";
import SecondaryNavBar from "./SecondaryNavBar";
import Filter from "./Filter";
import AdminPanel from "./AdminPanel";
import AddCompany from "./AddCompany";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <PrimaryNavBar />
        <div className="secondaryContainer">
          <SecondaryNavBar />
          <Filter />
          <AdminPanel />
          <AddCompany />
        </div>
      </div>
    );
  }
}

export default Home;
