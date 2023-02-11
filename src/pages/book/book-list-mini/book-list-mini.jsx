import './book-list-mini.css';

export const BookListMini = (props) => {
    const {categoryName, title} = props.curBook;

    return (
        <nav className='book-list-mini_navigation'>
            <div className='book-list-mini'>
                <div className='book-list-mini_wrapper'>
                    <span className='book-list-mini_category'>{categoryName}</span>
                    <span className='book-slash'>/</span>
                    <span className='book-list-mini_book-name'>{title}</span>
                </div>
            </div>
        </nav>
    );
}
