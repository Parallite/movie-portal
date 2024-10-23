import './Heading.css';

export const Heading = ({ as, headingText }) => {
    const TagSize = `h${as}`;

    return (
        <TagSize className='heading'>{headingText}</TagSize>
    );
};
