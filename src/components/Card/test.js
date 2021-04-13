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
        expect(card.innerHTML).toContain('<h2>TestAlbum')
    })
})