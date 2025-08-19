import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from '../utils/getData.js'


export async function addNewSighting(newSighting) {

  try {

    const sightings = await getData()
    sightings.push(newSighting)

    // you need the path to the file, with the folder and the file name
    const pathJSON = path.join('data', 'data.json')


    await fs.writeFile(pathJSON, JSON.stringify(sightings, null, 2), 'utf8')

  } catch (err) {
    throw new Error(err)
  }
}