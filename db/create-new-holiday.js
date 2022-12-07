const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createNewHoliday = async (startDate, endDate) => {
  await prisma.holidayTracker.create({
    data: {
      startDate,
      endDate
    },
  })
}

module.exports = createNewHoliday
