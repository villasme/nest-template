import { ApiProperty } from '@nestjs/swagger';

export class CatClass {
  @ApiProperty({ example: 'firstName', description: 'The name of the firstName' })
  firstName: string;

  @ApiProperty({
    example: 'lastName',
    description: 'The lastName of the lastName',
  })
  lastName: string;

  @ApiProperty({example: false,description: '这是isActive'})
  isActive?: boolean;
}
