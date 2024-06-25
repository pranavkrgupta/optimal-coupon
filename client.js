const axios = require("axios");

async function getCouponValue(couponId) {
  const apiEndPoint = `http://localhost:5000/coupon/${couponId}`;
  const res = await axios.get(apiEndPoint);
  return res.data.value;
}

async function calculateCouponsValue() {
  const couponIds = ["c1", "c2", "c3"];
  const couponValuePromises = couponIds.map((couponId) =>
    getCouponValue(couponId)
  );

  try {
    const couponValues = await Promise.all(couponValuePromises);
    const maxSavings = Math.max(...couponValues);
    console.log(`Maximum Savings: ${maxSavings}`);
  } catch (err) {
    console.error(`Error Calculating coupon Values: ${err}`);
  }
}

calculateCouponsValue();
