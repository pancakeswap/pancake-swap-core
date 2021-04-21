var HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const MNEMONIC = process.env.MNEMONIC;
const token = process.env.INFURA_TOKEN;
const etherscanKey = process.env.BSCSCAN_KEY;

module.exports = {
  networks: {
    develop: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 6721975,
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gas: 6721975,
    },
    bscTestnet: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          'https://data-seed-prebsc-1-s1.binance.org:8545'
        );
      },
      network_id: '97',
    },

    bscMainnet: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          'https://bsc-dataseed.binance.org'
        );
      },
      network_id: '56',
    },

    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          'https://mainnet.infura.io/v3/' + token
        );
      },
      network_id: '1',
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          'https://ropsten.infura.io/v3/' + token
        );
      },
      network_id: '3',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          'https://kovan.infura.io/v3/' + token
        );
      },
      network_id: '42',
      skipDryRun: true,
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: etherscanKey,
  },
  compilers: {
    solc: {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
