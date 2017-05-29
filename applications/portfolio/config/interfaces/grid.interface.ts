export interface Grid{
    /**
     * enable or disable this breakpoint.
    */
    "mobile":boolean;
    /**
     * enable or disable this breakpoint.
    */
    "tablet":boolean;
    /**
     * enable or disable this breakpoint.
    */
    "tablet-landscape":boolean;
    /**
     * enable or disable this breakpoint.
    */
    "desktop":boolean;
    /**
     * enable or disable this breakpoint.
    */
    "wide-desktop":boolean;
    /**
     * enable or disable this breakpoint.
    */
    "mobile-landscape":boolean;
    /**
     * set the value of this breakpoint
    */
    "device-mobile":string;
    /**
     * set the value of this breakpoint
    */
    "device-mobile-landscape":string;
    /**
     * set the value of this breakpoint
    */
    "device-tablet":string;
    /**
     * set the value of this breakpoint
    */
    "device-tablet-landscape":string;
    /**
     * set the value of this breakpoint
    */
    "device-desktop":string;
    /**
     * set the value of this breakpoint
    */
    "device-wide-desktop":string; 
}