const Migrations = artifacts.require("Migrations");
const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async (deployer,net,addresses) => {
  // await deployer.deploy(Migrations);
  // const factory = await deployer.deploy(PancakeFactory, addresses[0]);
  
  // console.log('Factory: ', factory.address);
  // console.log('INIT HASH: ', await factory.INIT_CODE_PAIR_HASH());

  const factory = await PancakeFactory.deployed();
  const lPToken = await factory.getPair('0x381316ed98bcd9E28661F953DECc22f910Fa98fD', '0x5683e8c773E9fD01CAa9bD59b74f7Ed925745774');

  console.log('LPToken: ', lPToken);

  //Local:
//   Green Token:  0xA01DD36ec74A64D1069EE57e154964683a5C25De
// Yellow Token:  0x543f5288F382aCc72D1743747f035Cb44bbBdD5b
};

// bscTestnet 12am 22-4-21
// Factory:  0xD02F09b5131B9593BCBee5427562908f0F806Dda
// INIT HASH:  0xf4c741b552690ebc6d0fbc9b0c881422ff1572ff8e78659b2f242021759f4e86

// Green Token:  0x381316ed98bcd9E28661F953DECc22f910Fa98fD
// Yellow Token:  0x5683e8c773E9fD01CAa9bD59b74f7Ed925745774

// LP Token Green/Yellow Token 0xeC33E6421D7746E186EffFEEB02A9fE853c26d26

// WETH 0x11E3E9f259e0273369542D1a1eE315e0EA065Cd0
// Router01 0xCc58f119a8D0598EeEf19b6E5Bff07c9a0Bc4A17
