'use strict'

function List() {
  this.length = 0
  this.data = {}
}

/**
 * Add item to the end of the list
 *
 * @name push
 * @function
 * @param {any} item list item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item
  this.length++
}

/**
 * Remove an item from the end of the list and return it's value
 *
 * @name pop
 * @function
 */
List.prototype.pop = function() {
  var returnValue = this.data[this.length - 1]
  delete this.data[this.length - 1]
  this.length--
  return returnValue
}

/**
 * Remove an item from the beginning of the list and return its value
 *
 * @name pop
 * @function
 */
List.prototype.shift = function() {
  var returnValue = this.data[0]
  for (var i = 0; i < this.length; i++) {
    this.data[i] = this.data[i + 1]
  }
  delete this.data[this.length - 1]
  this.length--
  return returnValue
}

/**
 * Add item to the beginning of the list
 *
 * @name unshift
 * @function
 * @param {any} item Item to add to the list
 */
List.prototype.unshift = function(item) {
  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i - 1]
  }
  this.data[0] = item
  this.length++
}

/**
 * Perform a callback on each list item
 *
 * @name forEach
 * @function
 * @param {function} cb The callback to run on each list item
 */
List.prototype.forEach = function(cb) {
  if (typeof cb !== 'function') {
    return undefined
  }
  for (let i = 0; i < this.length; i++) {
    cb(this.data[i], i)
  }
}

/**
 * Return an array with each item modified per the callback argument
 *
 * @name map
 * @function
 * @param {function} cb The callback to run on each list item
 * @returns {List} New list
 */
List.prototype.map = function(cb) {
  if (typeof cb !== 'function') {
    return undefined
  }
  const newData = {}
  for (let i = 0; i < this.length; i++) {
    newData[i] = cb(this.data[i], i)
  }
  this.data = newData
  return this
}

/**
 * Return an array filtered per the callback argument
 *
 * @name filter
 * @function
 * @param {function} cb The callback to run on each item; returns a Boolean
 * @returns {List} A filtered List
 */
List.prototype.filter = function(cb) {
  if (typeof cb !== 'function') {
    return undefined
  }
  var newLength = 0
  const newData = {}
  for (let i = 0; i < this.length; i++) {
    if (cb(this.data[i], i)) {
      newData[newLength] = this.data[i]
      newLength++
    }
  }
  this.length = newLength
  this.data = newData
  return this
}

/**
 * Reduce a list per a callback function
 *
 * @name reduce
 * @function
 * @param {function} cb The callback function to run on the list
 * @returns {object} The accumulator
 */
List.prototype.reduce = function(cb) {
  if (typeof cb !== 'function') {
    return undefined
  }

  var acc = this.data[0]
  for (var i = 0; i < this.length; i++) {
    acc = cb(acc, this.data[i], i)
  }

  return acc
}

module.exports = List
