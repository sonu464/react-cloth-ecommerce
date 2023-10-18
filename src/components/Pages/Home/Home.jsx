import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Cart from "../../Cart/Cart";

function Home() {
  const [showCartBox, setShowCartBox] = useState(false);

  const cartValueReceivedByApp = (data) => {
    if (data) {
      setShowCartBox(true);
    } else {
      setShowCartBox(false);
    }
  };
  return (
    <section>
      <Navbar cartValue={cartValueReceivedByApp} />
      {showCartBox && <Cart />}
    </section>
  );
}

export default Home;
