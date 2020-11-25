/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BarnFacet } from "./BarnFacet";

export class BarnFacetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BarnFacet> {
    return super.deploy(overrides || {}) as Promise<BarnFacet>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BarnFacet {
    return super.attach(address) as BarnFacet;
  }
  connect(signer: Signer): BarnFacetFactory {
    return super.connect(signer) as BarnFacetFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BarnFacet {
    return new Contract(address, _abi, signerOrProvider) as BarnFacet;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Delegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "to_newDelegatedPower",
        type: "uint256",
      },
    ],
    name: "DelegatedPowerDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "to_newDelegatedPower",
        type: "uint256",
      },
    ],
    name: "DelegatedPowerIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Lock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LockCreatorBalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWithdrew",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountLeft",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_LOCK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "balanceAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondCirculatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bondStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "bondStakedAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "delegatedPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "delegatedPowerAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "depositAndLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bond",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "initBarn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lockCreatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "multiplierAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "stakeAtTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address",
          },
        ],
        internalType: "struct LibBarnStorage.Stake",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stopDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userDelegateLockedUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userDelegatedTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userLockedUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "votingPowerAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506134fe806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80637a141096116100c3578063c07473f61161007c578063c07473f6146103c0578063c2077e81146103f0578063cbf8eda91461040e578063d265a1151461043e578063dd4670641461046e578063f77f962f1461048a5761014d565b80637a141096146102dc578063ae4c89a61461030c578063b6b55f2514610328578063bef624d814610344578063bf0ae48c14610374578063bfc10279146103a45761014d565b80635c19a95c116101155780635c19a95c1461021c57806365a5d5f0146102385780636f1215781461025657806370a082311461026057806371ced98f1461029057806371ef7663146102c05761014d565b8063169df0641461015257806318ab6a3c146101825780632082b4d1146101b25780632e1a7d4d146101d0578063417edd4d146101ec575b600080fd5b61016c6004803603810190610167919061297e565b6104ba565b6040516101799190613361565b60405180910390f35b61019c600480360381019061019791906129f6565b6104cd565b6040516101a99190613346565b60405180910390f35b6101ba61076e565b6040516101c79190613361565b60405180910390f35b6101ea60048036038101906101e59190612a5b565b6109da565b005b610206600480360381019061020191906129f6565b610df3565b6040516102139190613361565b60405180910390f35b6102366004803603810190610231919061297e565b610e17565b005b6102406112ab565b60405161024d9190613361565b60405180910390f35b61025e6112b3565b005b61027a6004803603810190610275919061297e565b6112bf565b6040516102879190613361565b60405180910390f35b6102aa60048036038101906102a5919061297e565b6112d2565b6040516102b79190613361565b60405180910390f35b6102da60048036038101906102d591906129f6565b611329565b005b6102f660048036038101906102f191906129f6565b6113e0565b6040516103039190613361565b60405180910390f35b610326600480360381019061032191906129a7565b6114a3565b005b610342600480360381019061033d9190612a5b565b611608565b005b61035e6004803603810190610359919061297e565b6119ef565b60405161036b9190613080565b60405180910390f35b61038e6004803603810190610389919061297e565b611a12565b60405161039b9190613361565b60405180910390f35b6103be60048036038101906103b99190612aad565b611a35565b005b6103da60048036038101906103d5919061297e565b611a4b565b6040516103e79190613361565b60405180910390f35b6103f8611a5e565b6040516104059190613361565b60405180910390f35b610428600480360381019061042391906129f6565b611a6e565b6040516104359190613361565b60405180910390f35b610458600480360381019061045391906129f6565b611b3b565b6040516104659190613361565b60405180910390f35b61048860048036038101906104839190612a5b565b611ca8565b005b6104a4600480360381019061049f9190612a5b565b611d03565b6040516104b19190613361565b60405180910390f35b60006104c68242611b3b565b9050919050565b6104d56128ec565b60006104df611e3c565b905060008160010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008180549050148061055657508060008154811061054157fe5b90600052602060002090600402016000015484105b1561059d57604051806080016040528042815260200160008152602001428152602001600073ffffffffffffffffffffffffffffffffffffffff1681525092505050610768565b600080600183805490500390508281815481106105b657fe5b9060005260206000209060040201600001548610610672578281815481106105da57fe5b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050945050505050610768565b5b818111156106c857600060026001848401018161068c57fe5b0490508684828154811061069c57fe5b906000526020600020906004020160000154116106bb578092506106c2565b6001810391505b50610673565b8282815481106106d457fe5b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509450505050505b92915050565b60008062093a80635f8cd70042038161078357fe5b049050606481111561079457606490505b60006107c0826904a89f54ef0121c00000026a01d1de3d2d5c712f000000611e6990919063ffffffff16565b905060006107cc611e3c565b905060008160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318360060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016108519190613080565b60206040518083038186803b15801561086957600080fd5b505afa15801561087d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a19190612a84565b905060008260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318460070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016109269190613080565b60206040518083038186803b15801561093e57600080fd5b505afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109769190612a84565b90506109d083600801546109c2836109b4866109a68a6a084595161401484a000000611e6990919063ffffffff16565b611e6990919063ffffffff16565b611e6990919063ffffffff16565b611e6990919063ffffffff16565b9550505050505090565b60008111610a1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a14906131a6565b60405180910390fd5b42610a2733611a12565b1115610a68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5f90613246565b60405180910390fd5b6000610a73336112bf565b905081811015610ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaf906131c6565b60405180910390fd5b6000610ac2611e3c565b9050610b208160010160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610b1b8585611e6990919063ffffffff16565b611eb3565b610b43610b3e84610b3042611d03565b611e6990919063ffffffff16565b6120c4565b6000610b4e336119ef565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cd957428260040160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610c07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfe906131e6565b60405180910390fd5b6000610c2485610c16846104ba565b611e6990919063ffffffff16565b9050610c708360030160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020826121ab565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ffb73cd22fb01f433ef312f758a708c1c7d1442ec871b9dd2546b3ec85a8b4e768784604051610ccf92919061337c565b60405180910390a3505b8160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33866040518363ffffffff1660e01b8152600401610d389291906130fb565b602060405180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a9190612a32565b503373ffffffffffffffffffffffffffffffffffffffff167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b56885610dd78787611e6990919063ffffffff16565b604051610de592919061337c565b60405180910390a250505050565b6000610dfd6128ec565b610e0784846104cd565b9050806020015191505092915050565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610e86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7d90613206565b60405180910390fd5b6000610e91336112bf565b905060008111610ed6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecd906132e6565b60405180910390fd5b6000610ee0611e3c565b9050428160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610f65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5c906132c6565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fab7d75eccd27c9989942a3a6e4137e415df0ad90ec428751b16361f16fe8780f60405160405180910390a36000610fca336119ef565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461115557428260040160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410611083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107a906132a6565b60405180910390fd5b60006110a084611092846104ba565b611e6990919063ffffffff16565b90506110ec8360030160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020826121ab565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ffb73cd22fb01f433ef312f758a708c1c7d1442ec871b9dd2546b3ec85a8b4e76868460405161114b92919061337c565b60405180910390a3505b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461125b5760006111a684611198876104ba565b61227490919063ffffffff16565b90506111f28360030160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020826121ab565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f9306546ca617a204223f7da51d942104c887cf8e53f8fd454af55a529aaa689a868460405161125192919061337c565b60405180910390a3505b6112a58260010160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020856122c9565b50505050565b6301e1338081565b6112bd6000610e17565b565b60006112cb8242610df3565b9050919050565b6000806112dd611e3c565b90508060040160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b611331612418565b61133b82826124b3565b6000611345611e3c565b9050818160040160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167fa77753a5c5b68fda8c6c14772d6b1d094c0388d53b5afbafc928b670fb757a49836040516113d39190613361565b60405180910390a2505050565b60006113ea6128ec565b6113f484846104cd565b90508060400151831061141257670de0b6b3a764000091505061149d565b60008382604001510390506301e13380811061144d576114446002670de0b6b3a764000061261490919063ffffffff16565b9250505061149d565b6114986114816301e13380611473670de0b6b3a76400008561261490919063ffffffff16565b61268490919063ffffffff16565b670de0b6b3a764000061227490919063ffffffff16565b925050505b92915050565b60006114ad611e3c565b90508060000160009054906101000a900460ff1615611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f890613146565b60405180910390fd5b611509612418565b60018160000160006101000a81548160ff021916908315150217905550838160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506969e10de76676d0800000816008018190555050505050565b6000811161164b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611642906131a6565b60405180910390fd5b6000611655611e3c565b905060008160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016116b892919061309b565b60206040518083038186803b1580156116d057600080fd5b505afa1580156116e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117089190612a84565b90508281101561174d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174490613186565b60405180910390fd5b6117b18260010160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206117ac8561179e336112bf565b61227490919063ffffffff16565b611eb3565b6117d46117cf846117c142611d03565b61227490919063ffffffff16565b6120c4565b60006117df336119ef565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118e757600061183285611824846104ba565b61227490919063ffffffff16565b905061187e8460030160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020826121ab565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f9306546ca617a204223f7da51d942104c887cf8e53f8fd454af55a529aaa689a87846040516118dd92919061337c565b60405180910390a3505b8260050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401611948939291906130c4565b602060405180830381600087803b15801561196257600080fd5b505af1158015611976573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199a9190612a32565b503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c856040516119e19190613361565b60405180910390a250505050565b60006119f96128ec565b611a0383426104cd565b90508060600151915050919050565b6000611a1c6128ec565b611a2683426104cd565b90508060400151915050919050565b611a3e82611608565b611a4781611ca8565b5050565b6000611a578242611a6e565b9050919050565b6000611a6942611d03565b905090565b6000611a786128ec565b611a8284846104cd565b905060008073ffffffffffffffffffffffffffffffffffffffff16826060015173ffffffffffffffffffffffffffffffffffffffff1614611ac65760009050611b0f565b6000826020015190506000611adb87876113e0565b9050611b0a670de0b6b3a7640000611afc838561261490919063ffffffff16565b61268490919063ffffffff16565b925050505b6000611b1b8686611b3b565b9050611b30818361227490919063ffffffff16565b935050505092915050565b600080611b46611e3c565b905060008160030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081805490501480611bbd575080600081548110611ba857fe5b90600052602060002090600202016000015484105b15611bcd57600092505050611ca2565b60008060018380549050039050828181548110611be657fe5b9060005260206000209060020201600001548610611c2757828181548110611c0a57fe5b906000526020600020906002020160010154945050505050611ca2565b5b81811115611c7d576000600260018484010181611c4157fe5b04905086848281548110611c5157fe5b90600052602060002090600202016000015411611c7057809250611c77565b6001810391505b50611c28565b828281548110611c8957fe5b9060005260206000209060020201600101549450505050505b92915050565b611cb233826124b3565b3373ffffffffffffffffffffffffffffffffffffffff167f625fed9875dada8643f2418b838ae0bc78d9a148a18eee4ee1979ff0f3f5d42782604051611cf89190613361565b60405180910390a250565b600080611d0e611e3c565b9050600081600201805490501480611d46575080600201600081548110611d3157fe5b90600052602060002090600202016000015483105b15611d55576000915050611e37565b60008060018360020180549050039050826002018181548110611d7457fe5b9060005260206000209060020201600001548510611db757826002018181548110611d9b57fe5b9060005260206000209060020201600101549350505050611e37565b5b81811115611e10576000600260018484010181611dd157fe5b04905085846002018281548110611de457fe5b90600052602060002090600202016000015411611e0357809250611e0a565b6001810391505b50611db8565b826002018281548110611e1f57fe5b90600052602060002090600202016001015493505050505b919050565b6000807fe96c66e59227df98cba2247b26f0b557ed0f64708a0822054b1f9fc99942071590508091505090565b6000611eab83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506126ce565b905092915050565b600082805490501415611f8e57816040518060800160405280428152602001838152602001428152602001600073ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506120c0565b600082600184805490500381548110611fa357fe5b906000526020600020906004020190504281600001541415611fcd578181600101819055506120be565b826040518060800160405280428152602001848152602001836002015481526020018360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505b505b5050565b60006120ce611e3c565b905060008160020180549050148061210f575042816002016001836002018054905003815481106120fb57fe5b906000526020600020906002020160000154105b1561217157806002016040518060400160405280428152602001848152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506121a7565b60008160020160018360020180549050038154811061218c57fe5b90600052602060002090600202019050828160010181905550505b5050565b6000828054905014806121e1575042826001848054905003815481106121cd57fe5b906000526020600020906002020160000154105b156122405781604051806040016040528042815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050612270565b60008260018480549050038154811061225557fe5b90600052602060002090600202019050818160010181905550505b5050565b6000808284019050838110156122bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122b690613166565b60405180910390fd5b8091505092915050565b6000826001848054905003815481106122de57fe5b9060005260206000209060040201905042816000015410156123cf5782604051806080016040528042815260200183600101548152602001836002015481526020018473ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050612413565b818160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b612420612729565b60030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146124b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124a890613326565b60405180910390fd5b565b6301e1338042018111156124fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124f390613226565b60405180910390fd5b6000612507836112bf565b11612547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253e90613306565b60405180910390fd5b6000612551611e3c565b905060008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816001838054905003815481106125ad57fe5b9060005260206000209060040201905080600201548411612603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125fa90613266565b60405180910390fd5b61260d8285612756565b5050505050565b600080831415612627576000905061267e565b600082840290508284828161263857fe5b0414612679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161267090613286565b60405180910390fd5b809150505b92915050565b60006126c683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061288b565b905092915050565b6000838311158290612716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161270d9190613124565b60405180910390fd5b5060008385039050809150509392505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008260018480549050038154811061276b57fe5b90600052602060002090600402019050428160000154101561287c57826040518060800160405280428152602001836001015481526020018481526020018360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050612886565b8181600201819055505b505050565b600080831182906128d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128c99190613124565b60405180910390fd5b5060008385816128de57fe5b049050809150509392505050565b6040518060800160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60008135905061293981613483565b92915050565b60008151905061294e8161349a565b92915050565b600081359050612963816134b1565b92915050565b600081519050612978816134b1565b92915050565b60006020828403121561299057600080fd5b600061299e8482850161292a565b91505092915050565b6000806000606084860312156129bc57600080fd5b60006129ca8682870161292a565b93505060206129db8682870161292a565b92505060406129ec8682870161292a565b9150509250925092565b60008060408385031215612a0957600080fd5b6000612a178582860161292a565b9250506020612a2885828601612954565b9150509250929050565b600060208284031215612a4457600080fd5b6000612a528482850161293f565b91505092915050565b600060208284031215612a6d57600080fd5b6000612a7b84828501612954565b91505092915050565b600060208284031215612a9657600080fd5b6000612aa484828501612969565b91505092915050565b60008060408385031215612ac057600080fd5b6000612ace85828601612954565b9250506020612adf85828601612954565b9150509250929050565b612af281613409565b82525050565b612b01816133c1565b82525050565b612b10816133c1565b82525050565b6000612b21826133a5565b612b2b81856133b0565b9350612b3b81856020860161343f565b612b4481613472565b840191505092915050565b6000612b5c6019836133b0565b91507f4261726e3a20616c726561647920696e697469616c697a6564000000000000006000830152602082019050919050565b6000612b9c601b836133b0565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b6000612bdc6019836133b0565b91507f546f6b656e20616c6c6f77616e636520746f6f20736d616c6c000000000000006000830152602082019050919050565b6000612c1c601d836133b0565b91507f416d6f756e74206d7573742062652067726561746572207468616e20300000006000830152602082019050919050565b6000612c5c6014836133b0565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b6000612c9c6032836133b0565b91507f57697468647261772074656d706f726172696c79206c6f636b6564206475652060008301527f746f206163746976652070726f706f73616c00000000000000000000000000006020830152604082019050919050565b6000612d026016836133b0565b91507f43616e27742064656c656761746520746f2073656c66000000000000000000006000830152602082019050919050565b6000612d426011836133b0565b91507f54696d657374616d7020746f6f206269670000000000000000000000000000006000830152602082019050919050565b6000612d826016836133b0565b91507f557365722062616c616e6365206973206c6f636b6564000000000000000000006000830152602082019050919050565b6000612dc2602f836133b0565b91507f4e65772074696d657374616d70206c6f776572207468616e2063757272656e7460008301527f206c6f636b2074696d657374616d7000000000000000000000000000000000006020830152604082019050919050565b6000612e286021836133b0565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612e8e6032836133b0565b91507f44656c65676174652074656d706f726172696c79206c6f636b6564206475652060008301527f746f206163746976652070726f706f73616c00000000000000000000000000006020830152604082019050919050565b6000612ef46030836133b0565b91507f44656c65676174652074656d706f726172696c79206c6f636b656420666f722060008301527f70726f706f73616c2063726561746f72000000000000000000000000000000006020830152604082019050919050565b6000612f5a6016836133b0565b91507f4e6f2062616c616e636520746f2064656c6567617465000000000000000000006000830152602082019050919050565b6000612f9a6015836133b0565b91507f53656e64657220686173206e6f2062616c616e636500000000000000000000006000830152602082019050919050565b6000612fda6016836133b0565b91507f4d75737420626520636f6e7472616374206f776e6572000000000000000000006000830152602082019050919050565b6080820160008201516130236000850182613062565b5060208201516130366020850182613062565b5060408201516130496040850182613062565b50606082015161305c6060850182612af8565b50505050565b61306b816133ff565b82525050565b61307a816133ff565b82525050565b60006020820190506130956000830184612b07565b92915050565b60006040820190506130b06000830185612ae9565b6130bd6020830184612b07565b9392505050565b60006060820190506130d96000830186612ae9565b6130e66020830185612b07565b6130f36040830184613071565b949350505050565b60006040820190506131106000830185612ae9565b61311d6020830184613071565b9392505050565b6000602082019050818103600083015261313e8184612b16565b905092915050565b6000602082019050818103600083015261315f81612b4f565b9050919050565b6000602082019050818103600083015261317f81612b8f565b9050919050565b6000602082019050818103600083015261319f81612bcf565b9050919050565b600060208201905081810360008301526131bf81612c0f565b9050919050565b600060208201905081810360008301526131df81612c4f565b9050919050565b600060208201905081810360008301526131ff81612c8f565b9050919050565b6000602082019050818103600083015261321f81612cf5565b9050919050565b6000602082019050818103600083015261323f81612d35565b9050919050565b6000602082019050818103600083015261325f81612d75565b9050919050565b6000602082019050818103600083015261327f81612db5565b9050919050565b6000602082019050818103600083015261329f81612e1b565b9050919050565b600060208201905081810360008301526132bf81612e81565b9050919050565b600060208201905081810360008301526132df81612ee7565b9050919050565b600060208201905081810360008301526132ff81612f4d565b9050919050565b6000602082019050818103600083015261331f81612f8d565b9050919050565b6000602082019050818103600083015261333f81612fcd565b9050919050565b600060808201905061335b600083018461300d565b92915050565b60006020820190506133766000830184613071565b92915050565b60006040820190506133916000830185613071565b61339e6020830184613071565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006133cc826133df565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006134148261341b565b9050919050565b60006134268261342d565b9050919050565b6000613438826133df565b9050919050565b60005b8381101561345d578082015181840152602081019050613442565b8381111561346c576000848401525b50505050565b6000601f19601f8301169050919050565b61348c816133c1565b811461349757600080fd5b50565b6134a3816133d3565b81146134ae57600080fd5b50565b6134ba816133ff565b81146134c557600080fd5b5056fea2646970667358221220403d36cca85215fc733d07ba8f7d2481c3f3ffa3ffc5068b7b30253e1605695d64736f6c63430007030033";
