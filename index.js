// Importing the sha256 library for hashing strings
import sha256 from "sha256";

// Define an even block with 8 transaction entries
const evenBlock = {
  t1: "txn-even-0x001",
  t2: "txn-even-0x002",
  t3: "txn-even-0x003",
  t4: "txn-even-0x004",
  t5: "txn-even-0x005",
  t6: "txn-even-0x006",
  t7: "txn-even-0x007",
  t8: "txn-even-0x008",
};

// Define an odd block 5 transaction entries
const oddBlock = {
  t1: "txn-odd-0x001",
  t2: "txn-odd-0x002",
  t3: "txn-odd-0x003",
  t4: "txn-odd-0x004",
  t5: "txn-odd-0x005",
};

// Function to calculate the root hash for a block of transactions
function blockHashing(block) {
  // Extract transaction values as an array
  let hashes = Object.values(block);

  // Continue hashing until there is only one hash left (the root hash)
  while (hashes.length > 1) {
    let newHashes = []; // Array to store the hashes

    // Iterate through the hashes in pairs
    for (let i = 0; i < hashes.length; i += 2) {
      if (i + 1 < hashes.length) {
        // If a pair exist, hash the concatenation of both values
        newHashes.push(sha256(hashes[i] + hashes[i + 1]));
      } else {
        // If it is the last transactiona no pair exist, has it with itself
        newHashes.push(sha256(hashes[i] + hashes[i]));
      }
    }
    // Update the hash array with the newly computed hashes
    hashes = newHashes;
  }
  // Return the final root hash
  return hashes[0];
}

// Log root hashes for both even and odd blocks
console.log("Root Hash for Even Block:", blockHashing(evenBlock));
console.log("Root Hash for Odd Block:", blockHashing(oddBlock));
