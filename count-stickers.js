/**
 * Suppose we have digit stickers, where each packet contains digits 0-9.
 * We have to write all the numbers from 1 using these stickers up to a given number n.
 * Write a function to calculate how many sticker packets I will need.
 * For example, if the given number n is 11, the number of sticker packets needed to write 1 to 11 would be 4, as we will need 4 '1' stickers, and thus 4 sticker packets.
 * */

function countStickerPackets(n) {
  if (n < 1) return 0;

  const counts = Array(10).fill(0);

  // for each decimal position
  for (let i = 0; Math.pow(10, i) <= n; i++) {
    const p = Math.pow(10, i);
    const high = Math.floor(n / (p * 10));
    const cur = Math.floor(n / p) % 10;
    const low = n % p;

    // zero-digit (avoid leading zeros)
    if (high > 0) {
      if (cur > 0) {
        counts[0] += (high - 1) * p + p;
      } else {
        counts[0] += (high - 1) * p + (low + 1);
      }
    }

    // digits 1 through 9
    for (let d = 1; d <= 9; d++) {
      if (cur > d) {
        counts[d] += (high + 1) * p;
      } else if (cur === d) {
        counts[d] += high * p + (low + 1);
      } else {
        counts[d] += high * p;
      }
    }
  }

  return Math.max(...counts);
}

function countStickerPacketsBruteForce(n) {
  const counts = Array(10).fill(0);

  for (let i = 1; i <= n; i++) {
    String(i)
      .split("")
      .forEach((ch) => {
        counts[+ch] += 1;
      });
  }

  return Math.max(...counts);
}

// testing
console.log(0, countStickerPacketsBruteForce(0), countStickerPackets(0));
console.log(1, countStickerPacketsBruteForce(1), countStickerPackets(1));
console.log(10, countStickerPacketsBruteForce(10), countStickerPackets(10));
console.log(11, countStickerPacketsBruteForce(11), countStickerPackets(11));
console.log(19, countStickerPacketsBruteForce(19), countStickerPackets(19));
console.log(20, countStickerPacketsBruteForce(20), countStickerPackets(20));
console.log(25, countStickerPacketsBruteForce(25), countStickerPackets(25));
console.log(35, countStickerPacketsBruteForce(35), countStickerPackets(35));
console.log(55, countStickerPacketsBruteForce(55), countStickerPackets(55));
console.log(75, countStickerPacketsBruteForce(75), countStickerPackets(75));
console.log(99, countStickerPacketsBruteForce(99), countStickerPackets(99));
console.log(100, countStickerPacketsBruteForce(100), countStickerPackets(100));
console.log(101, countStickerPacketsBruteForce(101), countStickerPackets(101));
console.log(110, countStickerPacketsBruteForce(110), countStickerPackets(110));
console.log(111, countStickerPacketsBruteForce(111), countStickerPackets(111));
console.log(121, countStickerPacketsBruteForce(121), countStickerPackets(121));
console.log(131, countStickerPacketsBruteForce(131), countStickerPackets(131));
console.log(141, countStickerPacketsBruteForce(141), countStickerPackets(141));
console.log(199, countStickerPacketsBruteForce(199), countStickerPackets(199));
console.log(200, countStickerPacketsBruteForce(200), countStickerPackets(200));
console.log(299, countStickerPacketsBruteForce(299), countStickerPackets(299));
console.log(300, countStickerPacketsBruteForce(300), countStickerPackets(300));
console.log(399, countStickerPacketsBruteForce(399), countStickerPackets(399));
console.log(500, countStickerPacketsBruteForce(500), countStickerPackets(500));
console.log(599, countStickerPacketsBruteForce(599), countStickerPackets(599));
console.log(700, countStickerPacketsBruteForce(700), countStickerPackets(700));
console.log(799, countStickerPacketsBruteForce(799), countStickerPackets(799));
console.log(999, countStickerPacketsBruteForce(999), countStickerPackets(999));
console.log(1000, countStickerPacketsBruteForce(1000), countStickerPackets(1000));
console.log(1001, countStickerPacketsBruteForce(1001), countStickerPackets(1001));
