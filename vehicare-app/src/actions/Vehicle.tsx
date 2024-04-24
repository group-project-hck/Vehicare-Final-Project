// export default function GetVehicles {
//     try {
//         setLoading(true);
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_BASE_URL}api/vehicle/${selectedVehicle}`,
//             {
//                 cache: "no-store",
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         const { data } = await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// };