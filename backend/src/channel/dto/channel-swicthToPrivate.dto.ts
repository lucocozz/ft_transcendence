import { ApiProperty } from '@nestjs/swagger';

export class ChannelSwitchToPrivateDto {
  @ApiProperty({
    required: true,
  })
  Password: string;
}
