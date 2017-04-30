import {resolve, sep} from "path";

const projectMap = {
    /**
     * The location of this projects scripts.
    */
    scripts:{
        base: resolve( "app", "public", "scripts"),
        relativeGlob: `${sep}**${sep}*`,
        ext: ".js"
    },
    /**
     * The location of this projects styles.
    */
    styles:{
        base: resolve( "app", "public", "styles"),
        relativeGlob: `${sep}**${sep}*`,
        ext: ".styl"
    },
    /**
     * The location of this projects templates.
    */
    templates:{
        base: resolve( "app", "public"),
        relativeGlob: `${sep}**${sep}*`,
        ext: ".pug"
    }
}

export { projectMap }