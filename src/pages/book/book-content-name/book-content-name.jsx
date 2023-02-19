import './book-content-name.css';

export const BookContentName = (props) => (
    <div className='book-content-name'>
        {props.name}
        <span className='for_review'>{props.count ? props.count : ''}</span>
    </div>
);
