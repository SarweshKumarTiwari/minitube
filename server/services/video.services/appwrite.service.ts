import {Client,Storage} from "node-appwrite";

const client=new Client();

client.setEndpoint(process.env.API_ENDPOINT||"")
.setProject(process.env.PROJECT_ID||"")
.setKey(process.env.STORE_KEY||"");

const mediaStorage=new Storage(client);

export default mediaStorage;