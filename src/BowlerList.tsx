import { useEffect, useState } from "react";
import { bowler } from "./types/bowler";

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);
  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch("https://localhost:5000/Bowler"); // or whatever your localhost name is
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []); // this says if there isn't any data above, bring in an empty array.

  return (
    <>
      <h1>Bowlers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Team</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
              </td>
              <td>{f.bowlerAddress}</td>
              <td>{f.teamName}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BowlerList;
