import './App.css';

import { Heading } from '@components/Heading';
import { Paragraph } from '@components/Paragraph';
import { Header } from '@components/Header';
import { HeroForm } from '@components/HeroForm';

function App() {
    return (
        <div className='app container'>
            <Header />
            <div className='app__hero'>
                <Heading
                    as={1}
                    headingText='Поиск'
                />
                <Paragraph paragraphText='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' />
                <HeroForm
                    inputPlaceholder="Введите название"
                    inputName="search"
                    buttonText="Искать"
                    icon='/search.svg'
                    alt='иконка поиска'
                />
            </div>
        </div>
    );
}

export default App;
