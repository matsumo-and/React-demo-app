import { atom } from 'recoil';
import { selector } from 'recoil';

export const modelState = atom<String>({

    key: "model",

    default: "test",
});

export const modelSelector = selector<String>({
    key: "modelSelector",
    get: ( {get} ) => {
       return get(modelState);
    }
})