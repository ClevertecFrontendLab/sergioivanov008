import rules from '../../mock-data/rules.json';

import './rules.css';


export const Rules = () => (
    <section className='rules'>
        
        <div className='rules-header'>
            {rules['rules-header']}
        </div>

        <div className='rules-paragraph'>
            <div className='rules-paragraph-header'>
                {rules['rules-1']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-1.1']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-1.2']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-1.3']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-1.4']}
            </div>
        </div>

        <div className='rules-paragraph'>
            <div className='rules-paragraph-header'>
                {rules['rules-2']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-2.1']}
                <div className='rules-paragraph-text'>
                    {rules['rules-2.1.1']}
                </div>
                <div className='rules-paragraph-text'>
                    {rules['rules-2.1.2']}
                </div>
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-2.2']}
            </div>
        </div>

        <div className='rules-paragraph'>
            <div className='rules-paragraph-header'>
                {rules['rules-3']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-3.1']}
                <div className='rules-paragraph-text'>
                    {rules['rules-3.1.1']}
                </div>
                <div className='rules-paragraph-text'>
                    {rules['rules-3.1.2']}
                </div>
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-3.2']}
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-3.3']}
                <div className='rules-paragraph-text'>
                    {rules['rules-3.3.1']}
                    <div className='rules-paragraph-text'>
                        {rules['rules-3.3.1.1']}
                    </div>
                    <div className='rules-paragraph-text'>
                        {rules['rules-3.3.1.2']}
                    </div>
                </div>
            </div>
            <div className='rules-paragraph-text'>
                {rules['rules-3.4']}
            </div>
        </div>

    </section>
);
