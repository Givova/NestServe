import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

export function StartsWith(prefix: string, ValidationOptions?: ValidationOptions,) 
{
    return (object: Object, propertyName: string) => {
        registerDecorator({
            name: 'startsWith',
            target: object.constructor,
            propertyName,
            options: ValidationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && value.startsWith(prefix)
                },
                defaultMessage(args: ValidationArguments) {
                    return `Название должно начинаться с "${prefix}"`
                }
            }
    });
    }
}