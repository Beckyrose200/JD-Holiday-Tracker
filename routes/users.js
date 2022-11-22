const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createData = async () => {
  await prisma.holidayTracker.create({
    data: {
      name: 'A User',
      totalDays: 10,
      daysUsed: 1,
      daysRemaining: 9
    },
  })
}

const getData = async () => {
  const holidayData = await prisma.holidayTracker.findMany()
  console.dir(holidayData, { depth: null })
}



/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  try {
    await createData()
    await getData()
    await prisma.$disconnect()
    res.send('success')
  } 
  catch (err) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    res.send('error')
  }
  
  
  
  // main()
  // .then(async () => {
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })
});

module.exports = router;
