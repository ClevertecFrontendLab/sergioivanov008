import { RecipeItemFullType } from '~/components/types';

export const getSortByDate = (arr: RecipeItemFullType[], num: number) => {
    const sortedArr = arr.slice().sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;

        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return sortedArr.slice(0, num);
};

export const getSortByLikes = (arr: RecipeItemFullType[], num: number) => {
    const sortedArr = arr.slice().sort((a, b) => {
        if (!a.likes) return 1;
        if (!b.likes) return -1;

        return b.likes - a.likes;
    });

    return sortedArr.slice(0, num);
};

export const checkIsOdd = (num: number) => num % 2 === 0;
