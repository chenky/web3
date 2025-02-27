import { ethers } from "ethers"; // 导入 ethers 库
import { readFileSync } from "fs"; // 导入文件系统模块

async function main() {
  // 创建一个连接到以太坊节点的 provider
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); // 使用小写的 http

  // 创建钱包，确保将私钥替换为您的私钥
  const wallet = new ethers.Wallet(
    "0x4759429218e156f47c0225b66b1f069706b4969e92214899556d141a89fc3ba3", // 用您的私钥替换
    provider
  );

  // 读取合约的 ABI 和字节码
  const abi = readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8"); // 确保文件路径正确
  const binary = readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8"); // 确保文件路径正确

  // 创建合约工厂
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Contract is deploying...");

  // 部署合约，若有构造参数，在这里传递
  const contract = await contractFactory.deploy({
    gasLimit: 5721975, // 设置 gas 上限
    // gasPrice: 20000000000, // 设置 gas 价格
  });
  //   const contract = await contractFactory.deploy();

  //   const receipt = await contract.waitForDeployment(); // 等待合约部署完成

  // 输出合约地址
  //   console.log("Contract is deployed to:", receipt);
  console.log("Contract is deployed!");
}

// 调用主函数
main()
  .then(() => {
    process.exit(0); // 成功后退出进程
  })
  .catch((error) => {
    console.error("Error:", error); // 捕获并打印错误
    process.exit(1); // 发生错误时退出进程
  });
