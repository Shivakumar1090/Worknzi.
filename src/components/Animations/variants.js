export const FadeVaraint = {
    "hidden" : {
        opacity: 0,
    },
    "visible": {
        opacity: 1,
        transition: {duration: 3,type: "spring"},
    },
}

export const MoveUpVariant = {
    "hidden" : {
        y: 50,
    },
    "visible": {
        y: 0,
        transition: {duration: 3,type: "spring"},
    },
}

export const scrollVariant = {
    "hidden" : {
        y: 100,
        opacity: 0.1,
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

export const imageVariant = {
    
}
