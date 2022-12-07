let express = require('express');
let router = express.Router();
const createNewHoliday = require('../db/create-new-holiday')
const getAllHolidays = require('../db/get-all-holidays')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const holidayData = await getAllHolidays()

  let data = {
    message: 'Hello World! Gov Uk styling all working',
    layout: 'layout.njk',
    title: 'Nunjucks example',
    holidayData
  }

  console.log(holidayData)
  res.render('index.njk', data)
})

router.post('/', async function(req, res, next) {
  const startDate = new Date(
    req.body['start-date-year'],
    req.body['start-date-month'] - 1,
    req.body['start-date-day']
  );

  const endDate = new Date(
    req.body['end-date-year'],
    req.body['end-date-month'] - 1,
    req.body['end-date-day']
  );

  await createNewHoliday(startDate, endDate)
  // TODO: Save holiday object into db
  //       Pass db object GUID to confirmation page

  res.redirect(`/confirmation?startDate=${startDate.getTime()}&endDate=${endDate.getTime()}`)
})

/* GET confirmation page. */
router.get('/confirmation', async function(req, res, next) {
  // TODO: Load holiday object from db rather than query param

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const startDateStr = new Date(+req.query['startDate']).toDateString("en-GB", options)
  const endDateStr = new Date(+req.query['endDate']).toDateString("en-GB", options)

  let data = {
    message: 'Holiday request received',
    layout: 'layout.njk',
    title: 'Holiday request received',
    startDate: startDateStr,
    endDate: endDateStr
  }

  res.render('confirmation.njk', data)
})

module.exports = router;
