export const PROMO_CODE = "PROMO_CODE";

export const handleChange = e => ({
  type: PROMO_CODE,
  payload: e.target.value
});
