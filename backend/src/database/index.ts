import { createConnection } from 'typeorm';


try {
  createConnection().then(
    () => console.log('✅ Database Connected!')
  );
} catch (error) {
  console.log(error)
}

