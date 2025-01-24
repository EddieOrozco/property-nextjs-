'use client';
import { useRouter, useParams, useSearchParams } from "next/navigation";

const PropertyPage = () => {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()
    console.log(router)
    return (
        <div>
            {/* <button onClick={() => router.replace('/')}>Home</button> */}
            {/* Property Page {params.id} */}
            Property Page { searchParams.get('name') }
        </div>
    );
};
 
export default PropertyPage;