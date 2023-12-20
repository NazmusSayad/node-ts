import { env, r } from 'rype'

export default env({
  DATABASE_URL: r.string().default('mongodb://localhost:27017'),
  DIRECT_URL: r.string().optional(),
})


