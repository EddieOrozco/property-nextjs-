'use client';
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    console.log(router)
    return (
        <div>
            {/* <button onClick={() => router.replace('/')}>Home</button> */}
            {/* Property Page {params.id} */}
            {/* Property Page { searchParams.get('name') } */}
            Property Page {pathname}
        </div>
    );
};
 
export default PropertyPage;