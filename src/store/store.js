import create from 'zustand';

const useStore = create((set) => ({
    currentGirl:JSON.parse(localStorage.getItem('currentGirl')) || 'firstGirl',
    firstGirlColors: JSON.parse(localStorage.getItem('firstGirlColors')) || {
        hair: null,
        top: null,
        pants: null
    },
    secondGirlColors: JSON.parse(localStorage.getItem('secondGirlColors')) || {
        hair: null,
        suit: null,
    },
    thirdGirlColors: JSON.parse(localStorage.getItem('thirdGirlColors')) || {
        hair: null,
        top: null,
        pants: null
    },
    setCurrentGirl: (girl) => {
        set({ currentGirl: girl });
    },

    setFirstGirlColors: (colors) => {
        set({ firstGirlColors: colors });
        localStorage.setItem('firstGirlColors', JSON.stringify(colors));
    },
    setSecondGirlColors: (colors) => {
        set({ secondGirlColors: colors });
        localStorage.setItem('secondGirlColors', JSON.stringify(colors));
    },
    setThirdGirlColors: (colors) => {
        set({ thirdGirlColors: colors });
        localStorage.setItem('thirdGirlColors', JSON.stringify(colors));
    }
}));

export default useStore;
