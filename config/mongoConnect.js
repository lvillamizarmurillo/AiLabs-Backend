import { MongoClient } from 'mongodb';
import dotenv from 'dotenv/config';

class Database {
    static instance;

    constructor() {
        if (!Database.instance) {
            this.client = new MongoClient(process.env.MONGO_CONNECT);
            Database.instance = this;
        }
        return Database.instance;
    }

    async connect() {
        if (!this.client.isConnected) {
            await this.client.connect();
        }
        return this.client.db('aiLabs');
    }
}

export const collectionGen = async (collectionName) => {
    const dbInstance = new Database();
    const db = await dbInstance.connect();
    return db.collection(collectionName);
};