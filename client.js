const axios = require("axios");

async function getCouponValue(couponId) {
  const apiEndPoint = `http://localhost:5000/coupon/${couponId}`;
  console.time(`Request time for ${couponId}`);
  const res = await axios.get(apiEndPoint);
  console.timeEnd(`Request time for ${couponId}`);
  return res.data.value;
}

async function calculateCouponsValue() {
  const couponIds = ["c1", "c2", "c3"];
  const couponValuePromises = couponIds.map((couponId) =>
    getCouponValue(couponId)
  );

  console.time(`Total request time`);

  try {
    // wait for all promises to resolve
    const couponValues = await Promise.all(couponValuePromises);
    console.timeEnd(`Total request time`);
    // find maxSavings
    const maxSavings = Math.max(...couponValues);
    console.log(`Maximum Savings: ${maxSavings}`);
  } catch (err) {
    console.error(`Error Calculating coupon Values: ${err}`);
  }
}

calculateCouponsValue();
