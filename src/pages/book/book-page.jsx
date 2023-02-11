import { Footer } from '../main/footer';
import { Header } from '../main/header';

import { BookContent } from './book-content/book-content';

import './book-page.css';

export const BookPage = () => (
    <div className='book-page'>
        <Header />
        <BookContent />
        <Footer />
    </div>
);
