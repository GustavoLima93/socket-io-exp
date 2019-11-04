import axios from 'axios';
import cron from 'node-cron';

import Queue from './lib/Queue';
import Coletor from './jobs/Coletor';

let count = 1;

const task = cron.schedule('*/5 * * * * *', async () => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  const pokemon = data;

  await Queue.add(Coletor.key, {
    pokemon,
  });

  count += 1;
});

task.start();
