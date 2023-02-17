/** @application */
import { UserDto } from '../../dto/user.dto';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class LoginResponseDto {
  @Expose()
  @IsNotEmpty()
  @Type(() => UserDto)
  readonly user: UserDto;
}
