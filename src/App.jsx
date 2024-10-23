import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';

function App() {
    const paragraphText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
    const headingText = 'Поиск';
    const buttonText = 'Искать';

    return (
        <>
            <Heading as={1} headingText={headingText} />
            <Paragraph paragraphText={paragraphText} />
            <Button buttonText={buttonText} />
        </>
    );
}

export default App;
