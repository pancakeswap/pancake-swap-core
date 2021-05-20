pragma solidity =0.5.16;

import '../OrionERC20.sol';

contract ERC20 is OrionERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
