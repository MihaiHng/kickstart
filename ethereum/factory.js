import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4B57dDB9c156b15e5b8900b9fe1E1f6a050DdB24'
);

export default instance;