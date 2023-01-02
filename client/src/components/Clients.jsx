import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";
import AddClientModal from "./AddClientModal";

const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {!loading && !error && (
        <div className="container py-2 inline-block min-w-full ">
          <AddClientModal />
          <table className="container min-w-full">
            <thead className="bg-gray-600">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Clients;
