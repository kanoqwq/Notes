import express, { Express, Router, Request, Response } from 'express'
const app: Express = express()

const router: Router = express.Router()

app.use('/api', router)


router.get('/list', (req: Request, res: Response) => {
    //没接口了，不做了，改天找个有意思的接口补上
})