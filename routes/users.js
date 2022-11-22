const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.holidayTracker.create({
    data: {
      name: 'A User',
      totalDays: 10,
      daysUsed: 1,
      daysRemaining: 9
    },
  })

  const holidayData = await prisma.holidayTracker.findMany()
  console.dir(holidayData, { depth: null })
}




/* GET users listing. */
router.get('/', function(req, res, next) {
  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  res.send('respond with a resource');
});

module.exports = router;
