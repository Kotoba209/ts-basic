import fs from 'fs'
import cheerio from 'cheerio'

import { Analyze } from './crawler'

interface Course {
  title: string
  count?: number
  img: string
}

interface CourseResult {
  date: number
  list: Course[]
}

interface Content {
  [propName: number]: Course[]
}

export default class Analyzer implements Analyze {
  private static instance: Analyze

  static getInstance() {
    if (!Analyzer.instance) {
      Analyzer.instance = new Analyzer()
    }
    return Analyzer.instance
  }

  private getTextInfo(html: string) {
    const $ = cheerio.load(html)
    const items = $('.course-item')
    const itemList: Course[] = []

    items.map((index, element) => {
      const title = $(element).find('.course-desc').text()
      const img = `http://www.dell-lee.com/${$(element)
        .find('.course-img')
        .attr('src')}`
      const count = +((Math.random() + 1) * 20).toFixed()
      itemList.push({ title, count, img })
    })
    return {
      date: new Date().getTime(),
      list: itemList,
    }
  }

  generateJsonContent(res: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[res.date] = res.list
    return fileContent
  }

  public analyze(html: string, filePath: string) {
    const list = this.getTextInfo(html)
    const fileContent = this.generateJsonContent(list, filePath)
    return JSON.stringify(fileContent)
  }

  private constructor() {}
}
