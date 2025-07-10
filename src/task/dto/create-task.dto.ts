import { IsNotEmpty, IsString, Length, IsOptional,  IsPositive, IsInt, IsArray, IsEnum, Matches, MinLength, IsUrl, IsUUID } from "class-validator";
import { StartsWith } from "../decorators/start-with.decorator";

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
}


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @StartsWith('Task:')
    @Length(2, 20)
    title: string;

    @IsString({message: "Описание должно быть строкой"})
    @IsOptional()
    description: string;
 
    @IsInt( {message: "Приоритет должен быть целым числом"})
    @IsPositive({message: "Приоритет должен быть положительным"})
    @IsOptional()
    priority: number;

    @IsArray({message: "Теги должны быть массивом"})
    @IsEnum(TaskTag, { each: true , message: "Недопустимое значение тега"})
    @IsOptional()
    tags: TaskTag[];

    // @IsString({message: "Пароль должен быть строкой"})
    // @MinLength(6, {message: "Пароль должен быть больше 6 символов"})
    // @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    //     message: "Пароль должен содержать хотя бы одну цифру и букву",
    //  })
    // password: string;

    // @IsUrl({protocols: ['https' , 'wss'], require_valid_protocol: true, }, {message: "Некорректный формат URL"})
    // websiteUrl: string

    // @IsUUID('4', {message: "Некорректный формат uuid"})
    // userId: string
}

