import app from './app';

const log = console;

app.listen(3333, () => {
  log.info('🚀 Server started on port 3333!');
});
