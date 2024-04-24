"use client";
import { Sparepart } from "@/databases/models/types";

export default function AddSparepartServiceBook({
  persparepart,
  addCart,
}: {
  persparepart: Sparepart[];
  addCart: any;
}) {
  return (
    <>
      <ul className="gap-2 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-x-0">
        {persparepart &&
          persparepart.map((item, index) => {
            return (
              <div key={index} className="shadow-xl rounded-lg transform transition-transform duration-300 border border-orange-200">
                <li
                  className="inline-flex w-full flex-col text-center p-1"
                >
                  <div
                    className="group"
                  >
                    <div className="h-24 aspect-w-1 w-full overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt="sparepart logo"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="py-1">
                      <h3 className="mt-1 font-semibold">
                        <span className="absolute inset-0" />
                        {item.name}
                      </h3>
                      <p className="mt-1">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price)}
                      </p>
                    </div>
                  </div>
                  <button className="btn z-10" type="button" onClick={() => addCart(item._id.toString(), item.price)}>
                    Add to Cart
                  </button>
                </li>
              </div>
            );
          })}
      </ul>
    </>
  );
}
