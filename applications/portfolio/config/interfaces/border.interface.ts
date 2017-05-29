export interface BorderSpec{
    /**
     * What is the default border color.
    */
    color:string;
    /**
     * How thick or thin is this border?
    */
    weight:string;
}

/**
 * Setup the border styles for this skin.
*/
export interface BorderTypes{
    hairline:BorderSpec;
    thin:BorderSpec;
    medium:BorderSpec;
    large:BorderSpec;
    "extra-large":BorderSpec;
}