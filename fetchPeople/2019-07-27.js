'use strict'

const superagent = require('superagent')

const swapi = 'https://swapi.co/api/people/'

const fetchPeople = () => {
  return superagent
    .get(swapi)
    .then(result0 => result0.body.results)
    .then(people => people.map(person => person.url))
    .then(urlArray => urlArray.map(url => superagent.get(url)))
    .then(promiseArray => Promise.all(promiseArray))
    .then(resolved => {
      resolved.forEach(person => console.log(person.body.name))
    })
    .catch(console.error)
}

const fetchPeopleAsync = async () => {
  const result = await superagent.get(swapi)
  const urlArray = result.body.results.map(person => person.url)
  const promiseArray = urlArray.map(url => superagent.get(url))
  const resolved = await Promise.all(promiseArray)
  resolved.forEach(person => console.log(person.body.name))
}

// fetchPeople()
fetchPeopleAsync()
