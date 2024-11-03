import { validateSync } from "class-validator";
import type { FieldsErrors, IValidatorFields } from "./validator-fields-interface";



export abstract class ClassValidatorFields<PropsValidated> 
implements IValidatorFields<PropsValidated> 
{
  errors: FieldsErrors | null = null;
  validatedData: PropsValidated | null = null;

  validate(data: any) : boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {};
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints!);
      }
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}


// export abstract class ClassValidatorFields implements IValidatorFields {
//   validate(notification: Notification, data: any, fields: string[]): boolean {
//     const errors = validateSync(data, {
//       groups: fields,
//     });
//     if (errors.length) {
//       for (const error of errors) {
//         const field = error.property;
//         Object.values(error.constraints!).forEach((message) => {
//           notification.addError(message, field);
//         });
//       }
//     }
//     return !errors.length;
//   }
// }


// export abstract class ClassValidatorFields implements IValidatorFields {
//   validate(notification: Notification, data: any, fields: string[]): boolean {
//     const errors = validateSync(data, {
//       groups: fields,
//     });
//     if (errors.length) {
//       for (const error of errors) {
//         const field = error.property;
//         Object.values(error.constraints!).forEach((message) => {
//           notification.addError(message, field);
//         });
//       }
//     }
//     return !errors.length;
//   }
// }