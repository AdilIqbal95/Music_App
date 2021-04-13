import { screen } from '@testing-library/react';
import Card from '.';

const data = {
    album: 'TestAlbum',
    artist: 'TestArtist',
    year: 2000,
    producer: 'TestProducer',
    image: ''
}

describe('Card', () => {
    beforeEach(() => {
        render(<Card data={data}/>)
    })

    test('renders a Card ', () => {
        let card = screen.getByRole('listitem')
        expect(card.innerHTML).toBe('<h2>TestAlbum</h2><h3>TestArtist</h3><img src=\"\"><small>TestProducer | 2000</small>')
    })
})