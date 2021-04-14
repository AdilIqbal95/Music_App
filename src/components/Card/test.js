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
        jest.resetAllMocks();
        jest.useFakeTimers();
    })

    test('renders a Card ', () => {
        let card = screen.getByRole('listitem')
        expect(card.innerHTML).toContain('<h2>TestAlbum')
    })

    test('it starts an 3 second interval on mount', () => {
        render(<Card data={data}/>)
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 3000);
    })
})