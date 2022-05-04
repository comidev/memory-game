import { useState } from "react";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    return { users, setUsers };
}
