import axios from 'axios';

export const convertETHtoUSD = async (amount: number): Promise<number> => {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
  const response = await axios.get(url);
  const price = response.data.ethereum.usd;

  return price * amount;
};
