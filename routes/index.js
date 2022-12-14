let express = require('express')
let router = express.Router()
const dayjs = require('dayjs')
const objectSupport = require("dayjs/plugin/objectSupport")
dayjs.extend(objectSupport)
const createNewHoliday = require('../db/create-new-holiday')
const getAllHolidays = require('../db/get-all-holidays')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const holidayTable = []
  const holidayData = await getAllHolidays()
  const dateFormat = 'DD/MM/YYYY'

  if (holidayData != undefined) {
    holidayData.forEach(holiday => {
      const startDate = dayjs(holiday.startDate)
      const endDate = dayjs(holiday.endDate)

      const projection = [
          {
            text: startDate.format(dateFormat)
          },
          {
            text: endDate.format(dateFormat)
          },
          {
            text: endDate.diff(startDate, 'day') + 1
          }
        ]
      
        holidayTable.push(projection)
    })
  }

  let data = {
    message: 'Hello World! Gov Uk styling all working',
    layout: 'layout.njk',
    title: 'Nunjucks example',
    holidays: holidayTable
  }

  console.log(holidayData)
  res.render('index.njk', data)
})

router.post('/', async function(req, res, next) {
  const startDate = dayjs({
    year: req.body['start-date-year'],
    month: req.body['start-date-month'] - 1,
    day: req.body['start-date-day']
  })

  const endDate = dayjs({
    year: req.body['end-date-year'],
    month: req.body['end-date-month'] - 1,
    day: req.body['end-date-day']
  })

  await createNewHoliday(startDate.toDate(), endDate.toDate())

  // TODO: Pass db object id to confirmation page
  res.redirect(`/confirmation?startDate=${startDate.unix()}&endDate=${endDate.unix()}`)
})

/* GET confirmation page. */
router.get('/confirmation', async function(req, res, next) {
  // TODO: Load holiday object from db rather than query param

  const dateFormat = 'ddd MMM DD YYYY'
  const startDate = dayjs.unix(req.query['startDate'])
  const endDate = dayjs.unix(req.query['endDate'])

  let data = {
    message: 'Holiday request received',
    layout: 'layout.njk',
    title: 'Holiday request received',
    startDate: startDate.format(dateFormat),
    endDate: endDate.format(dateFormat)
  }

  res.render('confirmation.njk', data)
})

module.exports = router;
