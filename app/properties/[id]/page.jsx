'use client';
import { useRouter, useParams } from "next/navigation";

const PropertyPage = () => {
    const router = useRouter()
    const params = useParams()
    console.log(router)
    return (
        <div>
            {/* <button onClick={() => router.replace('/')}>Home</button> */}
            Property Page {params.id}
        </div>
    );
};
 
export default PropertyPage;