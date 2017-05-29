export interface ColorSelector{
    gray?:"gray",
    blue?:"blue" | "indigo" | "light-blue" | "cyan" | "blue-grey",
    green?:"green" | "teal" | "light-green" | "lime",
    orange?:"orange" | "deep-orange" | "brown",
    pink?:"pink",
    purple?:"purple" | "deep purple",
    red?:"red",
    yellow?:"yellow"|"amber"
}

interface MonoShades {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
    "500"?: string;
    "600"?: string;
    "700"?: string;
    "800"?: string;
    "900"?: string;
    "a100"?: string;
    "a200"?: string;
    "a400"?: string;
    "a700"?: string;
    default: keyof MonoShades;
}

export type Palette = {
    [key: string]: MonoShades;
}
