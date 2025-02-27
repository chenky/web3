// HTTP://127.0.0.1:7545

import { ethers } from "ethers";
import { readFileSync } from "node:fs";

async function main() {
  const provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");

  const wallet = new ethers.Wallet(
    "0xb655174ae38d1cb87f9b600bd34fa29553c734050e80895e5dec3a1721afa6f4",
    provider
  );

  //   console.log("Wallet:", wallet);

  const abi = readFileSync("./SimpleStorage.abi", "utf8");
  const binary = readFileSync("./SimpleStorage.bin", "utf8");

  //   console.log(abi, binary, "abi binary");

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Contract is deploying...");
  const contract = await contractFactory.deploy({
    gasLimit: 3000000, // 设置更高的 gas 限制（默认可能太低）
  });
  console.log("Contract is deployed to:", contract);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
