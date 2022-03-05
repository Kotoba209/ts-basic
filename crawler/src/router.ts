import { Router, Request, Response } from 'express'
import Crawler from './crawler'
import Analyzer from './analyzer'

const router = Router()

router.get('/', (req: Request, resp: Response) => {
  resp.send('hello world')
})

router.get('./login')

router.get('/getData', (req: Request, resp: Response) => {
  const url = 'http://www.dell-lee.com/'

  const analyzer = Analyzer.getInstance()
  new Crawler(url, analyzer)
  resp.send('hello world233 is getData')
})

export default router
