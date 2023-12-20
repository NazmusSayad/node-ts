declare module 'xss-clean' {
  import { RequestHandler } from 'express'
  export default function xssClean(): RequestHandler
}
