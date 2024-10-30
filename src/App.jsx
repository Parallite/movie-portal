import './App.css';

import { movies } from './constants';

import { Heading } from '@components/Heading';
import { Paragraph } from '@components/Paragraph';
import { Header } from '@components/Header';
import { HeroForm } from '@components/HeroForm';
import { MoviesList } from '@components/MoviesList';

function App() {
    return (
        <div className='app container'>
            <Header />
            <div className='app__hero'>
                <Heading
                    as={1}
                    headingText='Поиск'
                />
                <Paragraph>
                    Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                </Paragraph>
                <HeroForm
                    inputPlaceholder="Введите название"
                    inputName="search"
                    buttonText="Искать"
                    icon='/search.svg'
                    alt='иконка поиска'
                />
            </div>
            <MoviesList movies={movies} />
        </div>
    );
}

export default App;
