import josa from "josa-js"

const josaObj = word => {
    return word+josa.c(word, "을/를")
}

export {josaObj}