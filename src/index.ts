// interface Human {
// 	name: string,
// 	age: number,
// 	gender: string
// }

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

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

let blockchin: [Block] = [genesisBlock];

console.log(blockchin);



export {};
