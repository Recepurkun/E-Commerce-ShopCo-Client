import Image from "next/image";
import { getUserData } from "@/services/api";

const UserOrders = async ({ userEmail }) => {
  // const userBasket = await getUserData(userEmail);
  // console.log("userBasket: ", userBasket);
  const userBasket = await getUserData(userEmail);

  return (
    <div className="col-12 col-md-8 mx-auto mt-5">
      <h3 className="text-center mb-4">PastOrders</h3>
      {/* {userBasket.map((order, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header">
            OrderDate: {new Date(order.orderDate).toLocaleString()}
          </div>
          <ul className="list-group list-group-flush">
            {order.items.map((item) => (
              <li key={item.cartId} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-1">
                      <strong>{item.name}</strong>
                    </p>
                    <p className="mb-1">Price: {item.price}</p>
                    {item.discountPrice && (
                      <p className="mb-1">
                        DiscountPrice: {item.discountPrice}
                      </p>
                    )}
                    <p className="mb-1">Color: {item.color}</p>
                    <p className="mb-1">Size: {item.size}</p>
                    <p className="mb-1">Total: {item.total}</p>
                  </div>
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default UserOrders;
