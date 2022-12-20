const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllHolidays = async () => {
 return await prisma.holidayTracker.findMany()
}

module.exports = getAllHolidays