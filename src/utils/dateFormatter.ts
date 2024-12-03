export const dateFormatter = (date: string): string => {
    const formattedDate = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short'
    }).format(new Date(date));
    return formattedDate;
};