const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllHolidays = async () => {
  const holidayData = await prisma.holidayTracker.findMany()
  console.dir(holidayData, { depth: null })
}

module.exports = getAllHolidays