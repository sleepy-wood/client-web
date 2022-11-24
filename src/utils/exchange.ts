import axios from 'axios';

export const convertETHtoUSD = (amount: number): number => {
  // const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
  // const response = await axios.get(url, {
  //   withCredentials: true,
  // });
  // const price = response.data.ethereum.usd;

  return amount * 1208.77;
};
