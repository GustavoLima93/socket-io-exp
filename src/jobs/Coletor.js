import io from 'socket.io-client';

const socket = io('http://localhost:3500');

class Coletor {
  get key() {
    return 'Coletor';
  }

  async handle({ data }) {
    const { pokemon } = data;
    const { name, sprites, order } = pokemon;
    socket.emit('pokemon', { name, sprites, order });
  }
}

export default new Coletor();
