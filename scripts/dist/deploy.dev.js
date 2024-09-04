"use strict";

var hre = require('hardhat');

function main() {
  var Lock, lock;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(hre.ethers.getContractFactory("Lock"));

        case 2:
          Lock = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(Lock.deploy(unlockTime, {
            value: lockedAmount
          }));

        case 5:
          lock = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(lock.deployed());

        case 8:
          console.log("App deployed to:, ".concat(lock.address));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

main()["catch"](error);