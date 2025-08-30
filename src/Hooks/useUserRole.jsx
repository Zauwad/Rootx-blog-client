import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useUserRole = () => {
    const { user } = useAuth(); 
    const [role, setRole] = useState("user");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                try {
                    const res = await axios.get(
                        `http://localhost:5000/users/role/${user.email}`
                    );
                    setRole(res.data.role);
                } catch (err) {
                    console.error("Failed to fetch user role:", err);
                    setRole("guest");
                } finally {
                    setLoading(false);
                }
            } else {
                setRole("guest");
                setLoading(false);
            }
        };

        fetchRole();
    }, [user?.email]);

    return { role, loading };
};

export default useUserRole;
