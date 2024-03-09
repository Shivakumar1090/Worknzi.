

export const scrollVariant = {
    "hidden" : {
        y: 50,
        opacity: 0,
    },
    "visible": {
        y: 0,
        opacity: 1,
    },
    "changeover": {
        duration: 2,
        type: 'spring',
        delay: 0.3,
    },
    "viewport": {
        once: true,
    }
}
