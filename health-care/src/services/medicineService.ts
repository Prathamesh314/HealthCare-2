
import axios from "axios"

interface MedicineInterface{
    name: string,
    description: string,
    image: string,
    suggested_by: string,
    userId: string,
};

export async function createMedicine(medicine: MedicineInterface)
{
    const result = await axios
        .post("/api/medicine", medicine)
    return result;
}

export async function getAllMedicines()
{
    const result = await axios.get("/api/medicine")
    .then((response)=>response.data);
    return result;
}

