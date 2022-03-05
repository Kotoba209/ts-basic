// ts -> .d.ts(翻译文件) -> js
import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import Analyzer from './analyzer'

export interface Analyze {
  analyze: (html: string, filePath: string) => string
}

class Crawler {
  private filePath = path.resolve(__dirname, '../data/course.json')

  async getHtml() {
    const ret = await superagent.get(this.url)
    return ret.text
  }

  writeFile(content: string) {
    console.log(233)
    fs.writeFileSync(this.filePath, content)
  }

  async initSpiderProcess() {
    const html = await this.getHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFile(fileContent)
  }

  constructor(private url: string, private analyzer: Analyze) {
    this.initSpiderProcess()
  }
}

export default Crawler

const url = 'http://www.dell-lee.com/'

const analyzer = Analyzer.getInstance()
new Crawler(url, analyzer)
