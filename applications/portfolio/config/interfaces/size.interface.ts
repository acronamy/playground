
export type Sizes = "extra-small"|"small"|"medium"|"large"|"extra-large"

interface SizeVarient{
    padding?:string;
    "padding-horizontal"?:string;
    "padding-vertical"?:string;
    "font-size"?:string;
    height?:string;
    width?:string;
    "min-height"?:string;
    "min-width"?:string;
} 
export interface SizeVarients{
    "extra-small"?:SizeVarient;
    "small"?:SizeVarient;
    "medium"?:SizeVarient;
    "large"?:SizeVarient;
    "extra-large"?:SizeVarient;
}