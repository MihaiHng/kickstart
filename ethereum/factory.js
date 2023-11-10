import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xAAae53cfcBFB617607109da3C53641DC55F80068'
);

export default instance;