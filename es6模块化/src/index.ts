import * as Component from './components'

export default class Page {
  constructor() {
    new Component.Header()
    new Component.Content()
    new Component.Footer()
  }
}
