const express = require("express");
const app = express();
const port = 5000;

//coupon data
const coupons = require("./coupons.json");

// endpoint to get coupon value by id
app.get("/coupon/:id", (req, res) => {
  const couponId = req.params.id;
  const coupon = coupons.find((c) => c.id === couponId);
  if (coupon) {
    res.json(coupon);
  } else {
    res.status(404).send("coupon not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
