import { screen } from '@testing-library/react';
import CardList from '.';

const data = [
  {
    album: "TestAlbum",
    artist: "TestArtist",
    year: 2000,
    producer: "TestProducer",
    image: "",
  },
  {
    album: "TestAlbum",
    artist: "TestArtist",
    year: 2000,
    producer: "TestProducer",
    image: "",
  },
  {
    album: "TestAlbum",
    artist: "TestArtist",
    year: 2000,
    producer: "TestProducer",
    image: "",
  },
];

describe('CardList', () => {
    beforeEach(() => {
        render(<CardList albumList={data}/>)
    })

    test('renders a list of Cards ', () => {
        let cards = screen.getAllByRole('listitem')
        expect(cards).toHaveLength(3)
    })
})