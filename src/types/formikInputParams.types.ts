export interface IFormikInputParams{
    variant:
    | "input"
    | "select"
    | "textarea"
    | "multiSelect"
    | "phoneInput"
    | "multiInput";
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    mandatory?: boolean;
    options?: string[];
    readonly?: boolean;
    fullWidth?: boolean;
}