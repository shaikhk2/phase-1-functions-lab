function distanceFromHqInBlocks(startingBlock) {
   const hqBlock = 42
   if (startingBlock > hqBlock) {
    return startingBlock - hqBlock
   }
   else {
    return hqBlock - startingBlock
   }
}
