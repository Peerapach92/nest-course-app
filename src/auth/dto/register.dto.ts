import { IsEmail, IsNotEmpty } from "class-validator";


export class RegisterDto {
    @IsNotEmpty({message: 'username required!!!'  })
    username: string;

    @IsNotEmpty({message: 'Email required!!!'  })
    @IsEmail({}, { message: 'The email format is incorrect.'})
    email: string;

    @IsNotEmpty({ message: 'password required!!!'})
    password: string;
}