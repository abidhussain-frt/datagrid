import { type } from "os"

type Columns = {
    label: string,
    key: string,
    type: "string" | "date" | "number"
};

type DataObj = {
    [key: string]: number | string
};