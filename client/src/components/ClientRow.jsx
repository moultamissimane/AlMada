import { FaTrash } from "react-icons/fa";

const ClientRow = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="bg-red-400 text-white">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
