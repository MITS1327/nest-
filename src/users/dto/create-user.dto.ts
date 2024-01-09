import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'example@mail.ru', description: 'Почта'})
    @IsString()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '1234qwerty', description: 'Пароль'})
    @IsString()
    readonly password: string;
}
