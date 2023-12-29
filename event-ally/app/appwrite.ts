import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_PROJECTID}`); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
