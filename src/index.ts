import { time } from "console";
import * as CryptoJS from "crypto-js";

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	static calculateBlockHash = (
		index: number, 
		previousHash: string,
		data: string,
		timestamp: number
		): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

	constructor(
		index: number,
		hash: string,
	 	previousHash: string,
	 	data: string,
	 	timestamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

const genesisBlock:Block = new Block(0, "hajdlir2l3kdlfij0", "", "HELLO", 20210313);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const newTimestamp: number = getNewTimeStamp();
	const newHash: string = Block.calculateBlockHash(
		newIndex,
		previousBlock.hash,
		data,
		newTimestamp
	);

	const newBlock: Block = new Block(
		newIndex, 
		newHash, 
		previousBlock.hash, 
		data, 
		newTimestamp
	);

		return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("bye bye"))

export {};
