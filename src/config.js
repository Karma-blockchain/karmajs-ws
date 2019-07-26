const defaultConfig = {
  name: "Karma",
  coreAsset: "KRM",
  addressPrefix: "KRM",
  expireInSecs: 15,
  expireInSecsProposal: 24 * 60 * 60,
  reviewInSecsCommittee: 24 * 60 * 60,
  chainId: "c85b4a30545e09c01aaa7943be89e9785481c1e7bd5ee7d176cb2b3d8dd71a70"
};

let networks = [
    defaultConfig,
    {
      name: "TestNet",
      coreAsset: "KRMT",
      addressPrefix: "KRMT",
      expireInSecs: 15,
      expireInSecsProposal: 24 * 60 * 60,
      reviewInSecsCommittee: 24 * 60 * 60,
      chainId:
        "e81bea67cebfe8612010fc7c26702bce10dc53f05c57ee6d5b720bbe62e51bef"
    }
  ],
  current = null;

export const addConfig = config =>
  networks.push({ ...defaultConfig, ...config });

export const setConfig = chainId =>
  (current = networks.find(net => net.chainId === chainId));

export const getConfig = () => current;
