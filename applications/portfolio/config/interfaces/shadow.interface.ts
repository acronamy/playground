export interface ShadowSpec{
    /**
     * What is the rule for this box shadow.
    */
    box:string;
    /**
     * What is the equivelent text shadow.
    */
    text:string;
}

/**
 * Setup the shadow styles for this skin.
*/
export interface ShadowTypes{
    "100":ShadowSpec;
    "200":ShadowSpec;
    "300":ShadowSpec;
    "400":ShadowSpec;
    "500":ShadowSpec;
    default:keyof ShadowTypes;
}