import { defineConfig } from "hardhat/config";



export default defineConfig({
      paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  solidity: {
    version: "0.8.28",
  },

});
