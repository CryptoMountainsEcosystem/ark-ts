// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
      public: 0x043587cf, 
      private: 0x04358394,
      },
	  name: 'mainnet',
      nethash: '1ed3644897fe1285d5199d216af52aabd7a8a4f0f55abc0a050456cbc243d3b5',
      token: 'CMT',
      symbol: 'CMT',
      version: 0x1C, // Addresses will begin with 'A'
      explorer: 'http://159.65.66.127:4200',
      wif: 0xBB, // Network prefix for wif generation
      activePeer: {
      ip: '159.65.66.127',
      port: 4100
      },
      peers: [],
      },
    devnet: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
name: 'devnet',
    nethash: '578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23',
    token: 'TEST',
    symbol: 'TEST',
    version: 0x52, // Addresses will begin with 'a'
    explorer: 'https://dexplorer.ark.io',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: '104.238.165.129',
      port: 4002
    },
    peers: [],
  },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
