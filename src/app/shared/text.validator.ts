import { AbstractControl, ValidatorFn } from "@angular/forms";

export function textValidator(alpha:RegExp):ValidatorFn{
    return(control:AbstractControl):{[key:string]:any} | null =>{
    const validator=alpha.test(control.value);
    // console.log(validator);
    return !validator? {'alphaFailValidator':{value:control.value}}: null;
};
}