import React from "react";
import MainLayout from "../../layout/MainLayout";

const Orders = () => {
  return (
    <MainLayout>
      <section className="container mx-auto lg:pt-32 pt-16 pb-16">
        <div class="mt-10 sm:mt-0 lg:w-[50%]">
          <h3 class="my-4 ml-2 text-[2rem] font-bold leading-6 text-gray-900">
            Recent Orders
          </h3>
        </div>
      </section>
    </MainLayout>
  );
};

export default Orders;
