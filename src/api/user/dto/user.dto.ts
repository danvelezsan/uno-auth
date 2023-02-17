import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @Expose()
  @IsNotEmpty()
  readonly id: number;

  @Expose()
  @IsNotEmpty()
  readonly email: string;

  @Expose()
  @IsNotEmpty()
  readonly name: string;

  @Exclude()
  @IsNotEmpty()
  readonly password: string;

  @Exclude()
  @IsNotEmpty()
  readonly lastLoginAt: Date;
}
