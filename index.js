// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue (driver, key, val) {
  const newObj = { ... driver }
  newObj[key] = val
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newObj = { ... driver }
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
