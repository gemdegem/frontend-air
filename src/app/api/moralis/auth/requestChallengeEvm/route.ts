import { MoralisNextApi } from "@moralisweb3/next";

const apiConfig = {
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQ5ODQ0Yjc2LTYzMWYtNGEyMi04NTVkLWQ2NTcwZDVjMjdjNSIsIm9yZ0lkIjoiMzcxODA3IiwidXNlcklkIjoiMzgyMTEwIiwidHlwZUlkIjoiNzRlMWFhMDgtODBlMS00ZWYyLTgwZmItNjQyMjcyNTAxMjlhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDQ5OTU0NzAsImV4cCI6NDg2MDc1NTQ3MH0.yF9rEkU0527tPiHQTyodhV6fzcXrnDCJX_MMhbGrdRY", // Provide a default value if undefined
  authentication: {
    domain: "amazing.dapp",
    uri: "http://localhost:3000",
    timeout: 120,
  },
};

console.log("API Key++++++++++++++++++++++++++++++++++++++++++++++:", apiConfig.apiKey);

export default MoralisNextApi(apiConfig);
